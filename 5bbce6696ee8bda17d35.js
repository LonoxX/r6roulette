// Operator lists (example, extend as needed)


const API_KEY = "r6roulette-discord";
const API_BASE_URL = "https://api.r6roulette.de";


let operators = { attackers: [], defenders: [] };
let currentOperators = [];
let spinning = false;
let angle = 0;
let spinTimeout;
let selectedOperator = null;
let isLoading = false;
let loadingCache = new Map(); // Cache for API requests


// DOM Elements
const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const spinBtn = document.getElementById('spin-btn');
const btnAll = document.getElementById('btn-all');
const btnAttackers = document.getElementById('btn-attackers');
const btnDefenders = document.getElementById('btn-defenders');
const resultDiv = document.getElementById('result');
const streamerBtn = document.getElementById('streamer-mode-btn');

// Create loading indicator
function createLoadingIndicator() {
    let loadingDiv = document.getElementById('loading-indicator');
    if (!loadingDiv) {
        loadingDiv = document.createElement('div');
        loadingDiv.id = 'loading-indicator';
        loadingDiv.innerHTML = `
            <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0,0,0,0.8);
                color: white;
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                z-index: 1000;
                font-family: Arial, sans-serif;
            ">
                <div style="
                    width: 40px;
                    height: 40px;
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #3498db;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 10px;
                "></div>
                <div>Loading operators...</div>
            </div>
            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `;
        document.body.appendChild(loadingDiv);
    }
    return loadingDiv;
}

// Show/hide loading indicator
function showLoading(show = true) {
    const loadingDiv = createLoadingIndicator();
    loadingDiv.style.display = show ? 'block' : 'none';
    isLoading = show;

    // Disable buttons while loading
    [btnAll, btnAttackers, btnDefenders, spinBtn].forEach(btn => {
        if (btn) {
            btn.disabled = show;
            btn.style.opacity = show ? '0.5' : '1';
        }
    });
}

// Verbesserte Fetch-Funktion mit Retry-Logic und Caching
async function fetchOperators(role, retries = 3) {
    const cacheKey = `operators_${role}`;

    // Check cache first
    if (loadingCache.has(cacheKey)) {
        console.log(`Cache hit for ${role}`);
        return loadingCache.get(cacheKey);
    }

    let lastError;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`Loading ${role} operators (Attempt ${attempt}/${retries})`);

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

            const response = await fetch(`${API_BASE_URL}/role/${role}?api_key=${API_KEY}`, {
                signal: controller.signal,
                headers: {
                    'Accept': 'application/json'
                }
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();

            // Validate data
            if (!Array.isArray(data)) {
                throw new Error('Invalid data format received');
            }

            // Cache data for 5 minutes
            loadingCache.set(cacheKey, data);
            setTimeout(() => loadingCache.delete(cacheKey), 5 * 60 * 1000);

            console.log(`${data.length} ${role} operators loaded`);
            return data;

        } catch (error) {
            lastError = error;
            console.warn(`Attempt ${attempt} failed:`, error.message);

            if (attempt < retries) {
                // Exponential backoff: 1s, 2s, 4s
                const delay = Math.pow(2, attempt - 1) * 1000;
                console.log(`Waiting ${delay}ms before next attempt...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }

    // Fallback data if all attempts fail
    console.error(`All attempts failed for ${role}:`, lastError);
    showError(`Error loading ${role === 'attacker' ? 'attackers' : 'defenders'}: ${lastError.message}`);
    return getFallbackOperators(role);
}

// Fallback operators in case the API is not available
function getFallbackOperators(role) {
    const fallbackData = {
        attacker: [
            { name: 'Ash', icon: null },
            { name: 'Thermite', icon: null },
            { name: 'Sledge', icon: null },
            { name: 'Thatcher', icon: null },
            { name: 'Twitch', icon: null },
            { name: 'Montagne', icon: null },
            { name: 'Glaz', icon: null },
            { name: 'Fuze', icon: null },
            { name: 'IQ', icon: null },
            { name: 'Blitz', icon: null }
        ],
        defender: [
            { name: 'Smoke', icon: null },
            { name: 'Mute', icon: null },
            { name: 'Castle', icon: null },
            { name: 'Pulse', icon: null },
            { name: 'Doc', icon: null },
            { name: 'Rook', icon: null },
            { name: 'Kapkan', icon: null },
            { name: 'Tachanka', icon: null },
            { name: 'Jäger', icon: null },
            { name: 'Bandit', icon: null }
        ]
    };

    console.log(`Using fallback data for ${role}`);
    return fallbackData[role] || [];
}

// Show error message
function showError(message) {
    let errorDiv = document.getElementById('error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'error-message';
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff4444;
            color: white;
            padding: 15px;
            border-radius: 5px;
            z-index: 1001;
            max-width: 300px;
            font-family: Arial, sans-serif;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        `;
        document.body.appendChild(errorDiv);
    }

    errorDiv.textContent = message;
    errorDiv.style.display = 'block';

    // Auto-hide after 5 seconds
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 5000);
}

// Improved load function with parallel loading
async function loadOperators(type) {
    if (isLoading) {
        console.log('Already loading...');
        return;
    }

    showLoading(true);

    try {
        if (type === 'attackers') {
            operators.attackers = await fetchOperators('attacker');
            currentOperators = operators.attackers;
        } else if (type === 'defenders') {
            operators.defenders = await fetchOperators('defender');
            currentOperators = operators.defenders;
        } else {
            // Load in parallel for better performance
            console.log('Loading all operators in parallel...');
            const [attackers, defenders] = await Promise.all([
                fetchOperators('attacker'),
                fetchOperators('defender')
            ]);

            operators.attackers = attackers;
            operators.defenders = defenders;
            currentOperators = [...operators.attackers, ...operators.defenders];
        }

        // Reset wheel
        angle = 0;
        drawWheel(currentOperators);
        resultDiv.textContent = '';

        console.log(`${currentOperators.length} operators loaded for ${type}`);

    } catch (error) {
        console.error('Error loading operators:', error);
        showError('Error loading operators');
    } finally {
        showLoading(false);
    }
}

// Show success message
function showSuccess(message) {
    let successDiv = document.getElementById('success-message');
    if (!successDiv) {
        successDiv = document.createElement('div');
        successDiv.id = 'success-message';
        successDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            background: #44ff44;
            color: #333;
            padding: 15px;
            border-radius: 5px;
            z-index: 1001;
            font-family: Arial, sans-serif;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        `;
        document.body.appendChild(successDiv);
    }

    successDiv.textContent = message;
    successDiv.style.display = 'block';

    // Auto-hide after 3 seconds
    setTimeout(() => {
        successDiv.style.display = 'none';
    }, 3000);
}

// Update button states
function updateButtonStates(activeType) {
    const buttons = {
        'all': btnAll,
        'attackers': btnAttackers,
        'defenders': btnDefenders
    };

    Object.entries(buttons).forEach(([type, btn]) => {
        if (btn) {
            btn.classList.toggle('active', type === activeType);
        }
    });
}

// Responsive canvas
function resizeCanvas() {
    const size = Math.min(window.innerWidth, window.innerHeight, 500);
    canvas.width = size;
    canvas.height = size;
    drawWheel(currentOperators);
}
window.addEventListener('resize', resizeCanvas);

// Draw the wheel
function drawWheel(list, highlightIndex = null) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const num = list.length || 1;
    const arc = 2 * Math.PI / num;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = canvas.width / 2 - 10;

    for (let i = 0; i < num; i++) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, radius, arc * i + angle - arc/2, arc * (i + 1) + angle - arc/2);
        ctx.closePath();

        // Enhanced gradient fill with better readability
        let grad = ctx.createLinearGradient(
            cx, cy,
            cx + Math.cos(arc * i + angle - arc/2) * radius,
            cy + Math.sin(arc * i + angle - arc/2) * radius
        );
        grad.addColorStop(0, i === highlightIndex ? '#ffffff' : `hsl(${i * 360 / num}, 70%, 55%)`);
        grad.addColorStop(0.7, i === highlightIndex ? '#f0f0f0' : `hsl(${i * 360 / num}, 65%, 40%)`);
        grad.addColorStop(1, i === highlightIndex ? '#e0e0e0' : `hsl(${i * 360 / num}, 60%, 25%)`);
        ctx.fillStyle = grad;
        ctx.shadowColor = i === highlightIndex ? '#ffffff' : '#161b22';
        ctx.shadowBlur = i === highlightIndex ? 40 : 12;
        ctx.fill();
        ctx.strokeStyle = i === highlightIndex ? '#ffffff' : '#333';
        ctx.lineWidth = i === highlightIndex ? 7 : 2.5;
        ctx.stroke();
        ctx.restore();

        // Text
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(arc * i + arc / 2 + angle - arc/2);
        ctx.textAlign = 'right';
        ctx.font = `bold ${Math.max(18, canvas.width/25)}px 'Mohave-Medium-Italic', Open Sans, Arial, sans-serif`;
        ctx.fillStyle = i === highlightIndex ? '#000000' : '#ffffff';
        ctx.shadowColor = i === highlightIndex ? '#ffffff' : '#000000';
        ctx.shadowBlur = i === highlightIndex ? 8 : 6;
        let op = list[i];
        let opName = (typeof op === 'object' && op !== null && op.name) ? op.name : String(op);
        ctx.fillText(opName, radius - 24, 10);
        ctx.restore();
    }

    // Draw pointer (arrow)
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cx, cy - radius - 8);
    ctx.lineTo(cx - 18, cy - radius + 32);
    ctx.lineTo(cx - 7, cy - radius + 32);
    ctx.lineTo(cx, cy - radius + 10);
    ctx.lineTo(cx + 7, cy - radius + 32);
    ctx.lineTo(cx + 18, cy - radius + 32);
    ctx.closePath();
    ctx.fillStyle = '#fff';
    ctx.shadowBlur = 30;
    ctx.fill();
    ctx.restore();
}

// Spin the wheel - now with check if data is loaded
function spinWheel() {
    if (spinning || !currentOperators.length || isLoading) {
        if (!currentOperators.length && !isLoading) {
            showError('No operators loaded. Please select a category.');
        }
        return;
    }

    spinning = true;
    spinBtn.style.transform = 'scale(1.12)';
    spinBtn.style.boxShadow = '0 0 24px #fff';
    setTimeout(() => {
        spinBtn.style.transform = '';
        spinBtn.style.boxShadow = '';
    }, 350);
    resultDiv.textContent = '';

    let list = currentOperators;
    let duration = 4000 + Math.random() * 1000;
    let start = null;
    let lastAngle = angle;
    let randomSpin = 2 * Math.PI * (4 + Math.random() * 2); // 4-6 rotations
    let finalAngle = lastAngle + randomSpin;

    function animateWheel(ts) {
        if (!start) start = ts;
        let elapsed = ts - start;
        let progress = Math.min(elapsed / duration, 1);
        angle = lastAngle + (finalAngle - lastAngle) * easeOutCubic(progress);
        drawWheel(list);
        if (progress < 1) {
            spinTimeout = requestAnimationFrame(animateWheel);
        } else {
            spinning = false;
            const num = list.length;
            const arc = 2 * Math.PI / num;
            let normalizedAngle = ((angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
            let targetAngle = (3 * Math.PI / 2); // Pointer at top (270 deg)
            let diff = (2 * Math.PI + targetAngle - normalizedAngle) % (2 * Math.PI);
            let index = Math.floor(diff / arc) % num;
            selectedOperator = list[index];
            let opName = (typeof selectedOperator === 'object' && selectedOperator !== null && selectedOperator.name) ? selectedOperator.name : String(selectedOperator);
            drawWheel(list, index);
            resultDiv.textContent = opName;
            resultDiv.style.color = '#ffff';
            resultDiv.style.fontWeight = 'bold';
            resultDiv.style.borderRadius = '18px';
        }
    }
    requestAnimationFrame(animateWheel);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// Button event listeners with improved state management
btnAll?.addEventListener('click', () => {
    updateButtonStates('all');
    loadOperators('all');
});
btnAttackers?.addEventListener('click', () => {
    updateButtonStates('attackers');
    loadOperators('attackers');
});
btnDefenders?.addEventListener('click', () => {
    updateButtonStates('defenders');
    loadOperators('defenders');
});
spinBtn?.addEventListener('click', spinWheel);

// Hide controls for stream mode
function hideControlsIfStream() {
    const url = new URL(window.location.href);
    if (url.searchParams.get('stream') === '1') {
        document.getElementById('controls').style.display = 'none';
        resultDiv.style.top = '50%';
        resultDiv.style.fontSize = '3em';
    }
}

// Ensure dynamic-style <style> exists for streamer mode
function ensureDynamicStyle() {
    let style = document.getElementById('dynamic-style');
    if (!style) {
        style = document.createElement('style');
        style.id = 'dynamic-style';
        style.innerHTML = 'html, body { background: linear-gradient(135deg, #0f1115 0%, #1a1f27 100%) !important; }';
        document.head.appendChild(style);
    }
    return style;
}

// Streamer mode toggle
let streamerMode = false;
streamerBtn.style.transition = 'opacity 0.3s, background 0.2s, color 0.2s';
streamerBtn.addEventListener('click', function() {
    const style = ensureDynamicStyle();
    streamerMode = !streamerMode;
    if (streamerMode) {
        style.innerHTML = 'html, body { background: transparent !important; }';
        document.body.style.background = 'transparent';
        document.documentElement.style.background = 'transparent';
        streamerBtn.textContent = 'Streamer Mode: ON';
        streamerBtn.style.background = 'linear-gradient(90deg,#FFD700 0%,#ff7424 100%)';
        streamerBtn.style.color = '#222';
    } else {
        style.innerHTML = 'html, body { background: linear-gradient(135deg, #0f1115 0%, #1a1f27 100%) !important; }';
        document.body.style.background = '';
        document.documentElement.style.background = '';
        streamerBtn.textContent = 'Streamer Mode';
        streamerBtn.style.background = 'linear-gradient(90deg,#444 0%,#222 100%)';
        streamerBtn.style.color = '#FFD700';
    }
});

// Edit Mode: Drag & drop for all controls/buttons
document.addEventListener('DOMContentLoaded', function() {
    let editMode = false;
    const editBtn = document.getElementById('edit-mode-btn');
    const controls = document.getElementById('controls');
    const allButtons = Array.from(controls.querySelectorAll('button'));
    const draggableEls = [resultDiv, ...allButtons];

    function setDraggableStyles(el, enable) {
        if (enable) {
            el.style.outline = '2px dashed #24ff24';
            el.style.cursor = 'move';
            if (el.id === 'result') el.style.pointerEvents = 'auto';
        } else {
            el.style.outline = '';
            el.style.cursor = '';
            if (el.id === 'result') el.style.pointerEvents = 'none';
        }
    }

    function makeDraggable(el) {
        let offsetX, offsetY, dragging = false;
        el.addEventListener('mousedown', dragStart);
        function dragStart(e) {
            if (!editMode) return;
            dragging = true;
            offsetX = e.clientX - el.offsetLeft;
            offsetY = e.clientY - el.offsetTop;
            document.addEventListener('mousemove', dragMove);
            document.addEventListener('mouseup', dragEnd);
            el.style.zIndex = 9999;
            e.preventDefault();
        }
        function dragMove(e) {
            if (!dragging) return;
            el.style.position = 'absolute';
            el.style.left = (e.clientX - offsetX) + 'px';
            el.style.top = (e.clientY - offsetY) + 'px';
        }
        function dragEnd() {
            dragging = false;
            el.style.zIndex = '';
            document.removeEventListener('mousemove', dragMove);
            document.removeEventListener('mouseup', dragEnd);
            if (editMode) {
                localStorage.setItem('dragpos-' + el.id, JSON.stringify({left: el.style.left, top: el.style.top}));
            }
        }
    }

    function restorePositions() {
        draggableEls.forEach(el => {
            const pos = localStorage.getItem('dragpos-' + el.id);
            if (pos) {
                try {
                    const {left, top} = JSON.parse(pos);
                    el.style.position = 'absolute';
                    el.style.left = left;
                    el.style.top = top;
                } catch {}
            }
        });
    }

    function setEditMode(on) {
        editMode = on;
        if (on) {
            allButtons.forEach(btn => {
                if (btn.id !== 'edit-mode-btn') {
                    btn.addEventListener('click', preventClick, true);
                }
            });
        } else {
            allButtons.forEach(btn => {
                if (btn.id !== 'edit-mode-btn') {
                    btn.removeEventListener('click', preventClick, true);
                }
            });
        }
        draggableEls.forEach(el => setDraggableStyles(el, on));
    }

    function preventClick(e) {
        if (editMode) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    editBtn?.addEventListener('click', () => {
        setEditMode(!editMode);
        editBtn.textContent = editMode ? 'Edit Mode: ON' : 'Edit Mode';
        editBtn.style.background = '#1d4b88';
    });

    draggableEls.forEach(makeDraggable);
    restorePositions();
    if (resultDiv) resultDiv.style.pointerEvents = 'none';
    setEditMode(false);
});

// Make background hideable for OBS/streamers
window.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('nobg') === '1' || params.get('transparent') === '1') {
        const style = document.getElementById('dynamic-style');
        if (style) {
            style.innerHTML = style.innerHTML.replace(/background:[^;]+;/g, 'background: transparent !important;');
        }
        document.body.style.background = 'transparent';
        document.documentElement.style.background = 'transparent';
    }
});

// Cache cleanup on page unload
window.addEventListener('beforeunload', () => {
    loadingCache.clear();
});

// Monitor network status
window.addEventListener('online', () => {
    console.log('Internet connection restored');
    showSuccess('Internet connection restored');
    // Clear cache to load fresh data
    loadingCache.clear();
});

window.addEventListener('offline', () => {
    console.log('Internet connection lost');
    showError('No internet connection - using fallback data');
});

// Initial setup
drawWheel(currentOperators);
resizeCanvas();
hideControlsIfStream();

// Initial loading with improved error handling
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, starting initial load...');
    updateButtonStates('all');
    loadOperators('all');
});
