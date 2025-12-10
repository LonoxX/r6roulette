const CONFIG = {
    API_KEY: "r6roulette-discord",
    API_BASE_URL: "https://api.r6roulette.de",
    CACHE_DURATION: 5 * 60 * 1000,
    DEFAULT_SPIN_DURATION: 4,
    MIN_SPIN_DURATION: 2,
    MAX_SPIN_DURATION: 8,
    WHEEL_COLORS: {
        attackers: { primary: '#2499ff', secondary: '#1a7acc' },
        defenders: { primary: '#ff7424', secondary: '#cc5c1d' },
        all: { primary: '#00ffe6', secondary: '#00ccb8' }
    }
};

const state = {
    operators: { attackers: [], defenders: [] },
    currentOperators: [],
    currentRole: 'all',
    spinning: false,
    angle: 0,
    selectedOperator: null,
    isLoading: false,
    settings: {
        streamerMode: false,
        spinDuration: CONFIG.DEFAULT_SPIN_DURATION,
        streamerBgColor: '#ffffff'
    }
};

const cache = new Map();

const elements = {};

function initElements() {
    elements.canvas = document.getElementById('wheel');
    elements.ctx = elements.canvas?.getContext('2d');
    elements.spinBtn = document.getElementById('spin-btn');
    elements.roleButtons = document.querySelectorAll('.role-btn');
    elements.resultDisplay = document.getElementById('result');
    elements.resultName = elements.resultDisplay?.querySelector('.result-name');
    elements.settingsPanel = document.getElementById('settings-panel');
    elements.settingsBtn = document.getElementById('settings-btn');
    elements.settingsClose = document.querySelector('.settings-close');
    elements.streamerBtn = document.getElementById('streamer-btn');
    elements.exitStreamerBtn = document.getElementById('exit-streamer-btn');
    elements.streamerToggle = document.getElementById('streamer-toggle');
    elements.streamerBgColor = document.getElementById('streamer-bg-color');
    elements.spinDurationSlider = document.getElementById('spin-duration');
    elements.spinDurationValue = document.querySelector('.range-value');
    elements.loadingOverlay = document.getElementById('loading-overlay');
    elements.toastContainer = document.getElementById('toast-container');
    elements.wheelWrapper = document.querySelector('.wheel-wrapper');
}

function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle'
    };

    toast.innerHTML = `
        <i class="fa-solid ${icons[type] || icons.info}"></i>
        <span>${message}</span>
    `;

    elements.toastContainer?.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

function setLoading(loading) {
    state.isLoading = loading;

    if (elements.loadingOverlay) {
        elements.loadingOverlay.classList.toggle('visible', loading);
    }

    if (elements.spinBtn) {
        elements.spinBtn.disabled = loading;
    }

    elements.roleButtons?.forEach(btn => {
        btn.disabled = loading;
    });
}

async function fetchOperators(role, retries = 3) {
    const cacheKey = `operators_${role}`;

    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }

    let lastError;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            const response = await fetch(
                `${CONFIG.API_BASE_URL}/role/${role}?api_key=${CONFIG.API_KEY}`,
                {
                    signal: controller.signal,
                    headers: { 'Accept': 'application/json' }
                }
            );

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json();

            if (!Array.isArray(data)) {
                throw new Error('Invalid data format');
            }

            cache.set(cacheKey, data);
            setTimeout(() => cache.delete(cacheKey), CONFIG.CACHE_DURATION);

            return data;

        } catch (error) {
            lastError = error;
            if (attempt < retries) {
                await new Promise(r => setTimeout(r, Math.pow(2, attempt - 1) * 1000));
            }
        }
    }

    console.error(`Failed to load ${role}:`, lastError);
    return getFallbackOperators(role);
}

function getFallbackOperators(role) {
    const fallback = {
        attacker: [
            { name: 'Ash' }, { name: 'Thermite' }, { name: 'Sledge' },
            { name: 'Thatcher' }, { name: 'Twitch' }, { name: 'Montagne' },
            { name: 'Glaz' }, { name: 'Fuze' }, { name: 'IQ' }, { name: 'Blitz' },
            { name: 'Buck' }, { name: 'Blackbeard' }, { name: 'Capitão' },
            { name: 'Hibana' }, { name: 'Jackal' }, { name: 'Ying' }
        ],
        defender: [
            { name: 'Smoke' }, { name: 'Mute' }, { name: 'Castle' },
            { name: 'Pulse' }, { name: 'Doc' }, { name: 'Rook' },
            { name: 'Kapkan' }, { name: 'Tachanka' }, { name: 'Jäger' },
            { name: 'Bandit' }, { name: 'Frost' }, { name: 'Valkyrie' },
            { name: 'Caveira' }, { name: 'Echo' }, { name: 'Mira' }, { name: 'Lesion' }
        ]
    };

    showToast('Offline mode: Using fallback data', 'warning');
    return fallback[role] || [];
}

async function loadOperators(role) {
    if (state.isLoading) return;

    setLoading(true);
    state.currentRole = role;

    try {
        if (role === 'attackers') {
            state.operators.attackers = await fetchOperators('attacker');
            state.currentOperators = state.operators.attackers;
        } else if (role === 'defenders') {
            state.operators.defenders = await fetchOperators('defender');
            state.currentOperators = state.operators.defenders;
        } else {
            const [attackers, defenders] = await Promise.all([
                fetchOperators('attacker'),
                fetchOperators('defender')
            ]);
            state.operators.attackers = attackers;
            state.operators.defenders = defenders;
            state.currentOperators = [...attackers, ...defenders];
        }

        state.angle = 0;
        hideResult();
        drawWheel();

    } catch (error) {
        showToast('Error loading operators', 'error');
    } finally {
        setLoading(false);
    }
}

function resizeCanvas() {
    if (!elements.canvas) return;

    const wrapper = elements.wheelWrapper;
    if (!wrapper) return;

    const size = Math.min(wrapper.offsetWidth, wrapper.offsetHeight) * 0.9;
    const finalSize = Math.min(size, 500);

    elements.canvas.width = finalSize;
    elements.canvas.height = finalSize;

    drawWheel();
}

function drawWheel(highlightIndex = null) {
    const ctx = elements.ctx;
    const canvas = elements.canvas;
    if (!ctx || !canvas) return;

    const list = state.currentOperators;
    const num = list.length || 1;
    const arc = (2 * Math.PI) / num;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = (canvas.width / 2) - 5;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < num; i++) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, radius, arc * i + state.angle, arc * (i + 1) + state.angle);
        ctx.closePath();

        if (i === highlightIndex) {
            ctx.fillStyle = '#ffd700';
        } else {
            const hue = (i * 360 / num) % 360;
            ctx.fillStyle = `hsl(${hue}, 65%, 45%)`;
        }

        ctx.fill();

        ctx.strokeStyle = i === highlightIndex ? '#fff' : 'rgba(0,0,0,0.3)';
        ctx.lineWidth = i === highlightIndex ? 3 : 1;
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(arc * i + arc / 2 + state.angle);
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';

        const fontSize = Math.max(12, Math.min(20, canvas.width / 25 - num / 12));
        ctx.font = `bold ${fontSize}px 'Mohave-Medium-Italic', Arial, sans-serif`;

        const op = list[i];
        const name = op?.name || String(op);

        ctx.strokeStyle = 'rgba(0,0,0,0.8)';
        ctx.lineWidth = 3;
        ctx.lineJoin = 'round';
        ctx.strokeText(name, radius - 18, 0);

        ctx.fillStyle = i === highlightIndex ? '#FFD700' : '#fff';
        ctx.shadowColor = 'rgba(0,0,0,0.7)';
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.fillText(name, radius - 18, 0);
        ctx.restore();
    }

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.12, 0, 2 * Math.PI);
    ctx.fillStyle = '#e0e0e0';
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.restore();
}

function spinWheel() {
    if (state.spinning || !state.currentOperators.length || state.isLoading) {
        if (!state.currentOperators.length) {
            showToast('Please select a category first', 'warning');
        }
        return;
    }

    state.spinning = true;
    hideResult();

    elements.spinBtn?.classList.add('spinning');

    const list = state.currentOperators;
    const duration = state.settings.spinDuration * 1000;
    const startAngle = state.angle;
    const totalRotation = Math.PI * 2 * (6 + Math.random() * 4);
    const finalAngle = startAngle + totalRotation;

    let startTime = null;
    let lastSegment = -1;

    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const eased = 1 - Math.pow(1 - progress, 3);
        state.angle = startAngle + (finalAngle - startAngle) * eased;

        drawWheel();

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            finishSpin();
        }
    }

    requestAnimationFrame(animate);
}

function finishSpin() {
    state.spinning = false;
    elements.spinBtn?.classList.remove('spinning');

    const list = state.currentOperators;
    const num = list.length;
    const arc = (2 * Math.PI) / num;

    const normalizedAngle = ((state.angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    const pointerAngle = (3 * Math.PI) / 2;
    const diff = ((pointerAngle - normalizedAngle) + 2 * Math.PI) % (2 * Math.PI);
    const winnerIndex = Math.floor(diff / arc) % num;

    state.selectedOperator = list[winnerIndex];
    const opName = state.selectedOperator?.name || String(state.selectedOperator);

    drawWheel(winnerIndex);
    showResult(opName);
}

function showResult(name) {
    if (!elements.resultDisplay || !elements.resultName) return;

    elements.resultName.textContent = name;
    elements.resultDisplay.classList.remove('hidden');
    elements.resultDisplay.classList.add('show');
}

function hideResult() {
    if (!elements.resultDisplay) return;

    elements.resultDisplay.classList.remove('show');
    elements.resultDisplay.classList.add('hidden');
}

function loadSettings() {
    try {
        const saved = localStorage.getItem('wheelSettings');
        if (saved) {
            Object.assign(state.settings, JSON.parse(saved));
        }
    } catch (e) {
        console.warn('Could not load settings');
    }

    applySettings();
}

function saveSettings() {
    try {
        localStorage.setItem('wheelSettings', JSON.stringify(state.settings));
    } catch (e) {
        console.warn('Could not save settings');
    }
}

function applySettings() {
    if (elements.streamerToggle) {
        elements.streamerToggle.checked = state.settings.streamerMode;
    }
    document.body.classList.toggle('streamer-mode', state.settings.streamerMode);

    if (elements.streamerBgColor) {
        elements.streamerBgColor.value = state.settings.streamerBgColor || '#ffffff';
    }
    document.documentElement.style.setProperty('--streamer-bg', state.settings.streamerBgColor || '#ffffff');

    if (elements.spinDurationSlider) {
        elements.spinDurationSlider.value = state.settings.spinDuration;
    }
    if (elements.spinDurationValue) {
        elements.spinDurationValue.textContent = `${state.settings.spinDuration}s`;
    }
}

function toggleSettings(show) {
    elements.settingsPanel?.classList.toggle('open', show);
}

function toggleStreamerMode(enabled) {
    if (enabled) {
        showToast(
            'Streamer Mode enabled - Press ESC or click X to exit',
            'info'
        );
        document.documentElement.style.setProperty('--streamer-bg', state.settings.streamerBgColor || '#ffffff');
    } else {
        showToast('Streamer Mode disabled', 'info');
    }

    state.settings.streamerMode = enabled;
    document.body.classList.toggle('streamer-mode', enabled);
    elements.streamerBtn?.classList.toggle('active', enabled);
    saveSettings();
}

function setupEventListeners() {
    elements.spinBtn?.addEventListener('click', spinWheel);

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && !state.spinning) {
            e.preventDefault();
            spinWheel();
        }
        if (e.code === 'Escape' && state.settings.streamerMode) {
            toggleStreamerMode(false);
            if (elements.streamerToggle) {
                elements.streamerToggle.checked = false;
            }
        }
    });

    elements.exitStreamerBtn?.addEventListener('click', () => {
        toggleStreamerMode(false);
        if (elements.streamerToggle) {
            elements.streamerToggle.checked = false;
        }
    });

    elements.roleButtons?.forEach(btn => {
        btn.addEventListener('click', () => {
            const role = btn.dataset.role;

            elements.roleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            loadOperators(role);
        });
    });

    elements.settingsBtn?.addEventListener('click', () => toggleSettings(true));
    elements.settingsClose?.addEventListener('click', () => toggleSettings(false));

    elements.settingsPanel?.addEventListener('click', (e) => {
        if (e.target === elements.settingsPanel) {
            toggleSettings(false);
        }
    });

    elements.streamerBtn?.addEventListener('click', () => {
        toggleStreamerMode(!state.settings.streamerMode);
        if (elements.streamerToggle) {
            elements.streamerToggle.checked = state.settings.streamerMode;
        }
    });

    elements.streamerToggle?.addEventListener('change', (e) => {
        toggleStreamerMode(e.target.checked);
    });

    elements.streamerBgColor?.addEventListener('input', (e) => {
        state.settings.streamerBgColor = e.target.value;
        document.documentElement.style.setProperty('--streamer-bg', e.target.value);
        saveSettings();
    });

    elements.spinDurationSlider?.addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        state.settings.spinDuration = value;
        if (elements.spinDurationValue) {
            elements.spinDurationValue.textContent = `${value}s`;
        }
        saveSettings();
    });

    window.addEventListener('resize', resizeCanvas);

    const params = new URLSearchParams(window.location.search);
    if (params.get('stream') === '1' || params.get('transparent') === '1') {
        toggleStreamerMode(true);
    }
}

function init() {
    initElements();
    loadSettings();
    setupEventListeners();
    resizeCanvas();
    loadOperators('all');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
