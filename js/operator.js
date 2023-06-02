var Attacker = {
  Ace: {
    name: 'Ace',
    role: 'attacker',
    img: './img/attacker/Ace.png',
    badge: './img/attacker/Badge/Ace-Badge.png',
    primary: {
      primary: {
        name: 'AK-12',
        img: './img/weapon/AK-12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'M1014',
        img: './img/weapon/M1014.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'P9',
        img: './img/weapon/P9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Breach Charge',
        img: './img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      }
    }
  },
  Amaru: {
    name: 'Amaru',
    role: 'attacker',
    img: './img/attacker/Amaru.png',
    badge: './img/attacker/Badge/Amaru-Badge.png',
    primary: {
      primary: {
        name: 'G8A1',
        img: './img/weapon/G8A1.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'SuperNova',
        img: './img/weapon/SuperNova.png',
        attachment: {
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'SMG-11',
        img: './img/weapon/SMG-11.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      secondary2: {
        name: 'ITA12S',
        img: './img/weapon/ITA12S.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      secondary3: {
        name: 'Gonne 6',
        img: './img/weapon/Gonne_6.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Stun Grenade',
        img: './img/gadgets/Stun_Grenade.png'
      },
      gadget2: {
        name: 'HARD BREACH CHARGE',
        img: './img/gadgets/SecondaryBreacher.png'
      }
    }
  },
  Ash: {
    name: 'Ash',
    role: 'attacker',
    img: './img/attacker/Ash.png',
    badge: './img/attacker/Badge/Ash-Badge.png',
    primary: {
      primary: {
        name: 'R4-C',
        img: './img/weapon/R4-C.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'G36C',
        img: './img/weapon/G36C.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: '5.7 USG',
        img: './img/weapon/5-7_USG.png',
        attachment: {
          attachment: { name: 'No Attachment' },  
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'M45 MEUSOC',
        img: './img/weapon/M45_MEUSOC.png',
        attachment: {
          attachment: { name: 'No Attachment' },  
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Breach Charge',
        img: './img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      }
    }
  },
  Blackbeard: {
    name: 'Blackbeard',
    role: 'attacker',
    img: './img/attacker/Blackbeard.png',
    badge: './img/attacker/Badge/Blackbeard-Badge.png',
    primary: {
      primary: {
        name: 'Mk17 CQB',
        img: './img/weapon/Mk17_CQB.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'SR-25',
        img: './img/weapon/SR-25.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },        
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'D-50',
        img: './img/weapon/D-50.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      },
      gadget2: {
        name: 'Stun Grenade',
        img: './img/gadgets/Smoke_Grenade.png'
      },
      gadget3: {
        name: 'Impact EMP Grenade',
        img: './img/gadgets/Impact_EMP_Grenade.png'
      }
    }
  },
  Blitz: {
    name: 'Blitz',
    role: 'attacker',
    img: './img/attacker/Blitz.png',
    badge: './img/attacker/Badge/Blitz-Badge.png',
    primary: {
      primary: {
        name: 'G52-Tactical Shield',
        img: './img/weapon/G52-Tactical_Shield.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'P12',
        img: './img/weapon/P12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Breach Charge',
        img: './img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Smoke Grenade',
        img: './img/gadgets/Smoke_Grenade.png'
      }
    }
  },
  Buck: {
    name: 'Buck',
    role: 'attacker',
    img: './img/attacker/Buck.png',
    badge: './img/attacker/Badge/Buck-Badge.png',
    primary: {
      primary: {
        name: 'C8-SFW',
        img: './img/weapon/C8-SFW.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'CAMRS',
        img: './img/weapon/CAMRS.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Scope 3.0x' : { name: 'Scope 3.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'Mk1 9mm',
        img: './img/weapon/Mk1_9mm.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
      secondary2: {
        name: 'Gonne 6',
        img: './img/weapon/Gonne_6.png',
        attachment: {
        attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
    },
    gadgets: {
      gadget1: {
        name: 'HARD BREACH CHARGE',
        img: './img/gadgets/SecondaryBreacher.png'
      },
      gadget2: {
        name: 'Stun Grenade',
        img: './img/gadgets/Claymore.png'
      }
    }
  },
  Capitao: {
    name: 'Capitao',
    role: 'attacker',
    img: './img/attacker/Capitao.png',
    badge: './img/attacker/Badge/Capitao-Badge.png',
    primary: {
      primary: {
        name: 'PARA-308',
        img: './img/weapon/PARA-308.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'M249',
        img: './img/weapon/M249.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'PRB92',
        img: './img/weapon/PRB92.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'Gonne 6',
        img: './img/weapon/Gonne_6.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
    },
    gadgets: {
      gadget1: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      },
      gadget2: {
        name: 'HARD BREACH CHARGE',
        img: './img/gadgets/SecondaryBreacher.png'
      }
    }
  },
  Dokkaebi: {
    name: 'Dokkaebi',
    role: 'attacker',
    img: './img/attacker/Dokkaebi.png',
    badge: './img/attacker/Badge/Dokkaebi-Badge.png',
    primary: {
      primary: {
        name: 'Mk 14 EBR',
        img: './img/weapon/Mk_14_EBR.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Scope 3.0x' : { name: 'Scope 3.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'BOSG.12.2',
        img: './img/weapon/BOSG-12-2.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'SMG-12',
        img: './img/weapon/SMG-12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      secondary2: {
        name: 'C75 Auto',
        img: './img/weapon/C75_Auto.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary3: {
        name: 'Gonne 6',
        img: './img/weapon/Gonne_6.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
    },
    gadgets: {
      gadget1: {
        name: 'Smoke Grenade',
        img: './img/gadgets/Smoke_Grenade.png'
      },
      gadget2: {
        name: 'Stun Grenade',
        img: './img/gadgets/Stun_Grenade.png'
      },
      gadget3: {
        name: 'Impact EMP Grenade',
        img: './img/gadgets/Impact_EMP_Grenade.png'
      }
    }
  },
  Finka: {
    name: 'Finka',
    role: 'attacker',
    img: './img/attacker/Finka.png',
    badge: './img/attacker/Badge/Finka-Badge.png',
    primary: {
      primary: {
        name: 'Spear .308',
        img: './img/weapon/Spear_308.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: '6P41',
        img: './img/weapon/6P41.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary3: {
        name: 'SASG-12',
        img: './img/weapon/SASG-12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'PMM',
        img: './img/weapon/PMM.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'GSH 18',
        img: './img/weapon/GSH_18.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary3: {
        name: 'Gonne 6',
        img: './img/weapon/Gonne_6.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Smoke Grenade',
        img: './img/gadgets/Smoke_Grenade.png'
      },
      gadget2: {
        name: 'Stun Grenade',
        img: './img/gadgets/Stun_Grenade.png'
      }
    }
  },
  Flores: {
    name: 'Flores',
    role: 'attacker',
    img: './img/attacker/Flores.png',
    badge: './img/attacker/Badge/Flores-Badge.png',
    primary: {
      primary: {
        name: 'AR33',
        img: './img/weapon/AR33.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'SR-25',
        img: './img/weapon/SR-25.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },        
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Scope 3.0x' : { name: 'Scope 3.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'GSH-18',
        img: './img/weapon/GSH_18.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Stun Grenade',
        img: './img/gadgets/Stun_Grenade.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      }
    }
  },
  Fuze: {
    name: 'Fuze',
    role: 'attacker',
    img: './img/attacker/Fuze.png',
    badge: './img/attacker/Badge/Fuze-Badge.png',
    primary: {
      primary: {
        name: 'AK-12',
        img: './img/weapon/AK-12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: '6P41',
        img: './img/weapon/6P41.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary3: {
        name: 'Ballistic Shield',
        img: './img/weapon/Ballistic_Shield.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'PMM',
        img: './img/weapon/PMM.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'GSH-18',
        img: './img/weapon/GSH_18.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Breach Charge',
        img: './img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'HARD BREACH CHARGE',
        img: './img/gadgets/SecondaryBreacher.png'
      },
      gadget3: {
        name: 'Stun Grenade',
        img: './img/gadgets/Stun_Grenade.png'
      }
    }
  },
  Glaz: {
    name: 'Glaz',
    role: 'attacker',
    img: './img/attacker/Glaz.png',
    badge: './img/attacker/Badge/Glaz-Badge.png',
    primary: {
      primary: {
        name: 'OTs-03',
        img: './img/weapon/OTs-03.png',
        attachment: {
          attachment: { name: 'No Attachment' },  
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'PMM',
        img: './img/weapon/PMM.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'Gonne 6',
        img: './img/weapon/Gonne_6.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary3: {
        name: 'Bearing9',
        img: './img/weapon/Bearing_9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Smoke Grenade',
        img: './img/gadgets/Smoke_Grenade.png'
      },
      gadget2: {
        name: 'Frag Grenade',
        img: './img/gadgets/Frag_Grenade.png'
      },
      gadget3: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      }
    }
  },
  Gridlock: {
    name: 'Gridlock',
    role: 'attacker',
    img: './img/attacker/Gridlock.png',
    badge: './img/attacker/Badge/Gridlock-Badge.png',
    primary: {
      primary: {
        name: 'F90',
        img: './img/weapon/F90.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'M249 SAW',
        img: './img/weapon/M249_SAW.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {  
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'Super Shorty',
        img: './img/weapon/Super_Shorty.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      secondary2: {
        name: 'SDP 9mm',
        img: './img/weapon/SDP_9mm.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary3: {
        name: 'Gonne 6',
        img: './img/weapon/Gonne_6.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Smoke Grenade',
        img: './img/gadgets/Smoke_Grenade.png'
      },
      gadget2: {
        name: 'Breach Charge',
        img: './img/gadgets/Breach_Charge.png'
      },
      gadget3: {
        name: 'Impact EMP Grenade',
        img: './img/gadgets/Impact_EMP_Grenade.png'
      }
    }
  },
  Grim: {
    name: 'Grim',
    role: 'attacker',
    img: './img/attacker/Grim.png',
    badge: './img/attacker/Badge/Grim-Badge.png',
    primary: {
      primary: {
        name: '552 Commando',
        img: './img/weapon/552_Commando.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
        }
      },
      primary2: {
        name: 'SG-CQB',
        img: './img/weapon/SG-CQB.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'P229',
        img: './img/weapon/P229.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Breach Charge',
        img: './img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      }
    }
  },
  Hibana: {
    name: 'Hibana',
    role: 'attacker',
    img: './img/attacker/Hibana.png',
    badge: './img/attacker/Badge/Hibana-Badge.png',
    primary: {
      primary: {
        name: 'Type-89',
        img: './img/weapon/Type-89.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'SuperNova',
        img: './img/weapon/SuperNova.png',
        attachment: {
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'P229',
        img: './img/weapon/P229.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'Bearing 9',
        img: './img/weapon/Bearing_9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Stun Grenade',
        img: './img/gadgets/Stun_Grenade.png'
      },
      gadget2: {
        name: 'Breach Charge',
        img: './img/gadgets/Breach_Charge.png'
      }
    }
  },
  Iana: {
    name: 'Iana',
    role: 'attacker',
    img: './img/attacker/Iana.png',
    badge: './img/attacker/Badge/Iana-Badge.png',
    primary: {
      primary: {
        name: 'ARX200',
        img: './img/weapon/ARX200.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'G36C',
        img: './img/weapon/G36C.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'Mk1 9mm',
        img: './img/weapon/Mk1_9mm.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Frag Grenade',
        img: './img/gadgets/Frag_Grenade.png'
      },
      gadget2: {
        name: 'Smoke Grenade',
        img: './img/gadgets/Smoke_Grenade.png'
      }
    }
  },
  IQ: {
    name: 'IQ',
    role: 'attacker',
    img: './img/attacker/IQ.png',
    badge: './img/attacker/Badge/IQ-Badge.png',
    primary: {
      primary: {
        name: 'AUG A2',
        img: './img/weapon/AUG_A2.png',
        attachment: {
          attachment: { name: 'Placeholder' },
          attachment: { name: 'Placeholder 2' },
          attachment: { name: 'Placeholder 3' },
        },
        gripe: {
          'Placeholder': { name: 'Placeholder' },
          'Placeholder 2': { name: 'Placeholder 2' },
        },
        scope: {
          'Placeholder': { name: 'Placeholder' },
          'Placeholder 2': { name: 'Placeholder 2' },
        }
      },
      primary2: {
        name: '552 Commando',
        img: './img/weapon/552_Commando.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
        }
      },
      primary2: {
        name: 'SG-CQB',
        img: './img/weapon/SG-CQB.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary3: {
        name: 'G8A1',
        img: './img/weapon/G8A1.png',
        attachment: {
          attachment: { name: 'Placeholder' },
          attachment: { name: 'Placeholder 2' },
          attachment: { name: 'Placeholder 3' },
        },
        gripe: {
          'Placeholder': { name: 'Placeholder' },
          'Placeholder 2': { name: 'Placeholder 2' },
        },
        scope: {
          'Placeholder': { name: 'Placeholder' },
          'Placeholder 2': { name: 'Placeholder 2' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'P12',
        img: './img/weapon/P12.png',
        attachment: {
          attachment: { name: 'Placeholder' },
          attachment: { name: 'Placeholder 2' },
          attachment: { name: 'Placeholder 3' },
        },
        gripe: {
          'Placeholder': { name: 'Placeholder' },
          'Placeholder 2': { name: 'Placeholder 2' },
        },
        scope: {
          'Placeholder': { name: 'Placeholder' },
          'Placeholder 2': { name: 'Placeholder 2' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Breach Chargee',
        img: './img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      }
    }
  },
  Jackal: {
    name: 'Jackal',
    role: 'attacker',
    img: './img/attacker/Jackal.png',
    badge: './img/attacker/Badge/Jackal-Badge.png',
    primary: {
      primary: {
        name: 'C7E',
        img: './img/weapon/C7E.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'PDW9',
        img: './img/weapon/PDW9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary3: {
        name: 'ITA12L',
        img: './img/weapon/ITA12L.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'USP40',
        img: './img/weapon/USP40.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'ITA12S',
        img: './img/weapon/ITA12S.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      },
      gadget2: {
        name: 'Smoke Grenade',
        img: './img/gadgets/Smoke_Grenade.png'
      }
    }
  },
  Ying: {
    name: 'Ying',
    role: 'attacker',
    img: './img/attacker/Ying.png',
    badge: './img/attacker/Badge/Ying-Badge.png',
    primary: {
      primary: {
        name: 'T-95 LSW',
        img: './img/weapon/T-95_LSW.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'Six12',
        img: './img/weapon/Six12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'Q-929',
        img: './img/weapon/Q-929.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Hard Breach Charge',
        img: './img/gadgets/SecondaryBreacher.png'
      },
      gadget2: {
        name: 'Smoke Grenade',
        img: './img/gadgets/Smoke_Grenade.png'
      }
    }
  },
  Kali: {
    name: 'Kali',
    role: 'attacker',
    img: './img/attacker/Kali.png',
    badge: './img/attacker/Badge/Kali-Badge.png',
    primary: {
      primary: {
        name: 'CSRX 300',
        img: './img/weapon/CSRX_300.png',
        attachment: {
          attachment: { name: 'Extended Barrel ;)' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'Reflex C ;)' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'SPSMG9',
        img: './img/weapon/SPSMG9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      secondary2: {
        name: 'C75 Auto',
        img: './img/weapon/C75_Auto.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary3: {
        name: 'P226 Mk 25',
        img: './img/weapon/P226_Mk_25.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      },
      gadget2: {
        name: 'Breach Charge',
        img: './img/gadgets/Breach_Charge.png'
      }
    }
  },
  Lion: {
    name: 'Lion',
    role: 'attacker',
    img: './img/attacker/Lion.png',
    badge: './img/attacker/Badge/Lion-Badge.png',
    primary: {
      primary: {
        name: 'V308',
        img: './img/weapon/V308.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: '417',
        img: './img/weapon/417.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Scope 3.0x' : { name: 'Scope 3.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary3: {
        name: 'SG-CQB',
        img: './img/weapon/SG-CQB.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'LFP586',
        img: './img/weapon/LFP586.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'P9',
        img: './img/weapon/P9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary3: {
        name: 'Gonne 6',
        img: './img/weapon/Gonne_6.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
    },
    gadgets: {
      gadget1: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      },
      gadget2: {
        name: 'Stun Grenade',
        img: './img/gadgets/Stun_Grenade.png'
      },
      gadget3: {
        name: 'Impact EMP Grenade',
        img: './img/gadgets/Impact_EMP_Grenade.png'
      }
    }
  },
  Maverick: {
    name: 'Maverick',
    role: 'attacker',
    img: './img/attacker/Maverick.png',
    badge: './img/attacker/Badge/Maverick-Badge.png',
    primary: {
      primary: {
        name: 'AR-15.50',
        img: './img/weapon/AR-15-50.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Scope 3.0x' : { name: 'Scope 3.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'M4 GS',
        img: './img/weapon/M4.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Scope 3.0x' : { name: 'Scope 3.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: '1911 TACOPS',
        img: './img/weapon/1911_TACOPS.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Stun Grenade',
        img: './img/gadgets/Stun_Grenade.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      }
    }
  },
  Montagne: {
    name: 'Montagne',
    role: 'attacker',
    img: './img/attacker/Montagne.png',
    badge: './img/attacker/Badge/Montagne-Badge.png',
    primary: {
      primary: {
        name: 'LE ROC SHIELD',
        img: './img/weapon/LE_ROC_SHIELD.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {  
          'none': { name: 'No Scope' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'P9',
        img: './img/weapon/P9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'LFP586',
        img: './img/weapon/LFP586.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'HARD BREACH CHARGE',
        img: './img/gadgets/SecondaryBreacher.png'
      },
      gadget2: {
        name: 'Smoke Grenade',
        img: './img/gadgets/Smoke_Grenade.png'
      }
    }
  },
  Nokk: {
    name: 'Nokk',
    role: 'attacker',
    img: './img/attacker/Nokk.png',
    badge: './img/attacker/Badge/Nokk-Badge.png',
    primary: {
      primary: {
        name: 'FMG-9',
        img: './img/weapon/FMG-9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'SIX12 SD',
        img: './img/weapon/SIX12_SD.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: '5.7 USG',
        img: './img/weapon/5-7_USG.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'D-50',
        img: './img/weapon/D-50.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Frag Grenade',
        img: './img/gadgets/Frag_Grenade.png'
      },
      gadget2: {
        name: 'HARD BREACH CHARGE',
        img: './img/gadgets/SecondaryBreacher.png'
      },
      gadget3: {
        name: 'Impact EMP Grenade',
        img: './img/gadgets/Impact_EMP_Grenade.png'
      }
    }
  },
  Nomad: {
    name: 'Nomad',
    role: 'attacker',
    img: './img/attacker/Nomad.png',
    badge: './img/attacker/Badge/Nomad-Badge.png',
    primary: {
      primary: {
        name: 'AK-74M',
        img: './img/weapon/AK-74M.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {  
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'ARX200',
        img: './img/weapon/ARX200.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: '.44 MAG SEMI-AUTO',
        img: './img/weapon/44_MAG_SEMI-AUTO.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'PRB92',
        img: './img/weapon/PRB92.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Stun Grenade',
        img: './img/gadgets/Stun_Grenade.png'
      },
      gadget2: {
        name: 'Breach Charge',
        img: './img/gadgets/Breach_Charge.png'
      }
    }
  },
  Osa: {
    name: 'Osa',
    role: 'attacker',
    img: './img/attacker/Osa.png',
    badge: './img/attacker/Badge/Osa-Badge.png',
    primary: {
      primary: {
        name: '556xi',
        img: './img/weapon/556xi.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
       name: 'PDW9',
        img: './img/weapon/PDW9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'PMM',
        img: './img/weapon/PMM.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Smoke Grenade',
        img: './img/gadgets/Smoke_Grenade.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      },
      gadget3: {
        name: 'Impact EMP Grenade',
        img: './img/gadgets/Impact_EMP_Grenade.png'
      }
    }
  },
  Sens: {
    name: 'Sens',
    role: 'attacker',
    img: './img/attacker/Sens.png',
    badge: './img/attacker/Badge/Sens-Badge.png',
    primary: {
      primary: {
        name: 'POF9',
        img: './img/weapon/POF9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        },
      },
      primary2: {
        name: '417',
        img: './img/weapon/417.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Scope 3.0x' : { name: 'Scope 3.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'SDP 9mm',
        img: './img/weapon/SDP_9mm.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Breach Charge',
        img: './img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      }
    }
  },
  Sledge: {
    name: 'Sledge',
    role: 'attacker',
    img: './img/attacker/Sledge.png',
    badge: './img/attacker/Badge/Sledge-Badge.png',
    primary: {
      primary: {
        name: 'L85A2',
        img: './img/weapon/L85A2.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'M590A1',
        img: './img/weapon/M590A1.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'P226 Mk 25',
        img: './img/weapon/P226_Mk_25.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Frag Grenade',
        img: './img/gadgets/Frag_Grenade.png'
      },
      gadget2: {
        name: 'Stun Grenade',
        img: './img/gadgets/Smoke_Grenade.png'
      }
    }
  },
  Thatcher: {
    name: 'Thatcher',
    role: 'attacker',
    img: './img/attacker/Thatcher.png',
    badge: './img/attacker/Badge/Thatcher-Badge.png',
    primary: {
      primary: {
        name: 'AR33',
        img: './img/weapon/AR33.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'L85A2',
        img: './img/weapon/L85A2.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary3: {
        name: 'M590A1',
        img: './img/weapon/M590A1.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'P226 Mk 25',
        img: './img/weapon/P226_Mk_25.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Breach Charge',
        img: './img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      }
    }
  },
  Thermite: {
    name: 'Thermite',
    role: 'attacker',
    img: './img/attacker/Thermite.png',
    badge: './img/attacker/Badge/Thermite-Badge.png',
    primary: {
      primary: {
        name: 'M1014',
        img: './img/weapon/M1014.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: '556xi',
        img: './img/weapon/556xi.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: '5.7 USG',
        img: './img/weapon/5-7_USG.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        secondary: {
          name: 'M45 MEUSOC',
          img: './img/weapon/M45_MEUSOC.png',
          attachment: {
            attachment: { name: 'No Attachment' },
            attachment: { name: 'Muzzle Brake' },
            attachment: { name: 'Suppressor' },
          },
          gripe: {
            'none': { name: 'No Grip' },
          },
          scope: {
            'none': { name: 'No Scope' },
          }
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Smoke Grenade',
        img: './img/gadgets/Smoke_Grenade.png'
      },
      gadget2: {
        name: 'Stun Grenade',
        img: './img/gadgets/Stun_Grenade.png'
      }
    }
  },
  Twitch: {
    name: 'Twitch',
    role: 'attacker',
    img: './img/attacker/Twitch.png',
    badge: './img/attacker/Badge/Twitch-Badge.png',
    primary: {
      primary: {
        name: 'F2',
        img: './img/weapon/F2.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: '417',
        img: './img/weapon/417.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Scope 3.0x' : { name: 'Scope 3.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary3: {
        name: 'SG-CQB',
        img: './img/weapon/SG-CQB.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'P9',
        img: './img/weapon/P9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'LFP586',
        img: './img/weapon/LFP586.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
         'none': { name: 'No Grip' },
        },
        scope: {
         'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Smoke Grenade',
        img: './img/gadgets/Smoke_Grenade.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      }
    }
  },
  Zero: {
    name: 'Zero',
    role: 'attacker',
    img: './img/attacker/Zero.png',
    badge: './img/attacker/Badge/Zero-Badge.png',
    primary: {
      primary: {
        name: 'SC3000K',
        img: './img/weapon/SC3000K.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'MP7',
        img: './img/weapon/MP7.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: '5.7 USG',
        img: './img/weapon/5-7_USG.png',
        attachment: {
          attachment: { name: 'No Attachment' },  
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'Gonne 6',
        img: './img/weapon/Gonne_6.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Hard Breach Charge',
        img: './img/gadgets/SecondaryBreacher.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      }
    }
  },
  Zofia: {
    name: 'Zofia',
    role: 'attacker',
    img: './img/attacker/Zofia.png',
    badge: './img/attacker/Badge/Zofia-Badge.png',
    primary: {
      primary: {
        name: 'LMG-E',
        img: './img/weapon/LMG-E.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'M762',
        img: './img/weapon/M762.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'RG15',
        img: './img/weapon/RG15.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Breach Charge',
        img: './img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png'
      }
    }
  },
  Brava: {
    name: 'Brava',
    role: 'attacker',
    img: './img/attacker/Brava.png',
    badge: './img/attacker/Badge/Brava-Badge.png',
    primary: {
      primary: {
        name: 'PARA-308',
        img: './img/weapon/PARA-308.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'CAMRS',
        img: './img/weapon/CAMRS.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Scope 3.0x' : { name: 'Scope 3.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'Super Shorty',
        img: './img/weapon/Super_Shorty.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      secondary2: {
        name: 'USP40',
        img: './img/weapon/USP40.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },  
    gadget: {
      gadget: {
        name: 'Stun Grenade',
        img: './img/gadgets/Stun_Grenade.png',
      },
      gadget2: {
        name: 'Claymore',
        img: './img/gadgets/Claymore.png',
      }
    }
  },
}
var Defender = {
  Smoke:{
    name: 'Smoke',
    role: 'defender',
    img: './img/defender/Smoke.png',
    badge: './img/defender/Badge/Smoke-Badge.png',
    primary: {
      primary: {
        name: 'FMG-9',
        img: './img/weapon/FMG-9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'M590A1',
        img: './img/weapon/M590A1.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'P226 Mk 25',
        img: './img/weapon/P226_Mk_25.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'SMG-11',
        img: './img/weapon/SMG-11.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png'
      },
      gadget2: {
        name: 'Proximity Alarm',
        img: './img/gadgets/Proximity_Alarm.png'
      }
    }
  },
  
  Castle: {
    name: 'Castle',
    role: 'defender',
    img: './img/defender/Castle.png',
    badge: './img/defender/Badge/Castle-Badge.png',
    primary: {
      primary: {
        name: 'UMP45',
        img: './img/weapon/UMP45.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {  
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: { 
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
      }
    },
    primary2: {
      name: 'M1014',
      img: './img/weapon/M1014.png',
      attachment: {
        attachment: { name: 'No Attachment' },
      },
      gripe: {
        'none': { name: 'No Grip' },
      },
      scope: {
        'none': { name: 'No Scope' },
        'Red Dot A': { name: 'Red Dot A' },
        'Red Dot B': { name: 'Red Dot B' },
        'Red Dot C': { name: 'Red Dot C' },
        'Holo A' : { name: 'Holo A' },
        'Holo B': { name: 'Holo B' },
        'Holo C': { name: 'Holo C' },
        'Holo D': { name: 'Holo D' },
        'Reflex A': { name: 'Reflex A' },
        'Reflex B': { name: 'Reflex B' },
        'Reflex C': { name: 'Reflex C' },
      }
    },
  },
  secondary: {
    secondary: {
      name: '5.7 USG',
      img: './img/weapon/5-7_USG.png',
      attachment: {
        attachment: { name: 'No Attachment' },  
        attachment: { name: 'Muzzle Brake' },
        attachment: { name: 'Suppressor' },
      },
      gripe: {
        'none': { name: 'No Grip' },
      },
      scope: {
        'none': { name: 'No Scope' },
      }
    },
    secondary2: {
      name: '5.7 USG',
      img: './img/weapon/5-7_USG.png',
      attachment: {
        attachment: { name: 'No Attachment' },  
        attachment: { name: 'Muzzle Brake' },
        attachment: { name: 'Suppressor' },
      },
      gripe: {
        'none': { name: 'No Grip' },
      },
      scope: {
        'none': { name: 'No Scope' },
      }
    },
    secondary3: {
      name: '5.7 USG',
      img: './img/weapon/5-7_USG.png',
      attachment: {
        attachment: { name: 'No Attachment' },  
        attachment: { name: 'Muzzle Brake' },
        attachment: { name: 'Suppressor' },
      },
      gripe: {
        'none': { name: 'No Grip' },
      },
      scope: {
        'none': { name: 'No Scope' },
      }
    },
  },
    gadgets: {
      gadget1: {
        name: 'Nitro Cell',
        img: './img/gadgets/Nitro_Cell.png'
      },
      gadget2: {
        name: 'Bulletproof Camera',
        img: './img/gadgets/Bulletproof_camera.png'
      }
    }
  },
  Pulse : {
    name: 'Pulse',
    role: 'defender',
    img: './img/defender/Pulse.png',
    badge: './img/defender/Badge/Pulse-Badge.png',
    primary: {
      primary: {
        name: 'M1014',
        img: './img/weapon/M1014.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'UMP45',
        img: './img/weapon/UMP45.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {  
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: { 
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'M45 MEUSOC',
        img: './img/weapon/M45_MEUSOC.png',
        attachment: {
          attachment: { name: 'No Attachment' },  
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: '5.7 USG',
        img: './img/weapon/5-7_USG.png',
        attachment: {
          attachment: { name: 'No Attachment' },  
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
    },
    gadgets: {
      gadget1: {
        name: 'Deployable Shield',
        img: './img/gadgets/Deployable_Shield.png'
      },
      gadget2: {
        name: 'Nitro Cell',
        img: './img/gadgets/Nitro_Cell.png'
      },
      gadget3: {
        name: 'Observation Blocker',
        img: './img/gadgets/Observation_Blocker.png'
      }
    }
  },
  Doc: {
    name: 'Doc',
    role: 'defender',
    img: './img/defender/Doc.png',
    badge: './img/defender/Badge/Doc-Badge.png',
    primary: {
      primary: {
        name: 'SG-CQB',
        img: './img/weapon/SG-CQB.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'MP5',
        img: './img/weapon/MP5.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary3: {
        name: 'P90',
        img: './img/weapon/P90.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'P9',
        img: './img/weapon/P9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'LFP586',
        img: './img/weapon/LFP586.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary3: {
        name: 'Bailiff 410',
        img: './img/weapon/Bailiff_410.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Bulletproof Camera',
        img: './img/gadgets/Bulletproof_camera.png',
      },
      gadget2: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png',
      }
    }
  },
  Rook: {
    name: 'Rook',
    role: 'defender',
    img: './img/defender/Rook.png',
    badge: './img/defender/Badge/Rook-Badge.png',
    primary: {
      primary: {
        name: 'P90',
        img: './img/weapon/P90.png',
        attachment: {
        attachment: { name: 'No Attachment' },
        attachment: { name: 'Flash Hilder' },
        attachment: { name: 'Compensator' },
        attachment: { name: 'Muzzle Brake' },
        attachment: { name: 'Suppressor' },
        attachment: { name: 'Extended Barrel' },
      },
      gripe: {
        'none': { name: 'No Grip' }
      },
      scope: {
        'none': { name: 'No Scope' },
        'Scope 1.5x': { name: 'Scope 1.5x' },
        'Red Dot A': { name: 'Red Dot A' },
        'Red Dot B': { name: 'Red Dot B' },
        'Red Dot C': { name: 'Red Dot C' },
        'Holo A' : { name: 'Holo A' },
        'Holo B': { name: 'Holo B' },
        'Holo C': { name: 'Holo C' },
        'Holo D': { name: 'Holo D' },
        'Reflex A': { name: 'Reflex A' },
        'Reflex B': { name: 'Reflex B' },
        'Reflex C': { name: 'Reflex C' },
     }
    },
      primary2: {
        name: 'MP5',
        img: './img/weapon/MP5.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary3: {
        name: 'SG-CQB',
        img: './img/weapon/SG-CQB.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'P9',
        img: './img/weapon/P9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'LFP586',
        img: './img/weapon/LFP586.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
    },
    gadgets: {
      gadget1: {
        name: 'Proximity Alarm',
        img: './img/gadgets/Proximity_alarm.png',
      },
      gadget2: {
        name: 'Impact Grenade',
        img: './img/gadgets/Impact_Grenade.png',
      },
      gadget3: {
        name: 'Observation Blocker',
        img: './img/gadgets/Observation_Blocker.png'
      }
    }
  },
  Kapkan: {
    name: 'Kapkan',
    role: 'defender',
    img: './img/defender/Kapkan.png',
    badge: './img/defender/Badge/Kapkan-Badge.png',
    primary: {
      primary: {
        name: '9x19VSN',
        img: './img/weapon/9x19VSN.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'SASG-12',
        img: './img/weapon/SASG-12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'PMM',
        img: './img/weapon/PMM.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'GSH 18',
        img: './img/weapon/GSH_18.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
    },
    gadgets: {
      gadget1: {
        name: 'Impact Grenade',
        img: './img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Nitro Cell',
        img: './img/gadgets/Nitro_Cell.png',
      }
    }
  },
  Tachanka: {
    name: 'Tachanka',
    role: 'defender',
    img: './img/defender/Tachanka.png',
    badge: './img/defender/Badge/Tachanka-Badge.png',
    primary: {
      primary: {
        name: 'DP27',
        img: './img/weapon/DP27.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: '9x19VSN',
        img: './img/weapon/9x19VSN.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'PMM',
        img: './img/weapon/PMM.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'GSH 18',
        img: './img/weapon/GSH_18.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary3: {
        name: 'Bearing9',
        img: './img/weapon/Bearing_9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Deployable Shield',
        img: './img/gadgets/Deployable_Shield.png',
      },
      gadget3: {
        name: 'Proximity Alarm',
        img: './img/gadgets/Proximity_alarm.png',
      }
    }
  },
  Jager: {
    name: 'Jager',
    role: 'defender',
    badge: './img/defender/Badge/Jager-Badge.png',
    img: './img/defender/Jager.png',
    primary: {
      primary: {
        name: 'M870',
        img: './img/weapon/M870.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: '416-C Carbine',
        img: './img/weapon/416C_Carbine.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'P12',
        img: './img/weapon/P12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Observation Blocker',
        img: './img/gadgets/Observation_Blocker.png',
      },
      gadget2: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png',
      }
    }
  },
  Bandit: {
    name: 'Bandit',
    role: 'defender',
    img: './img/defender/Bandit.png',
    badge: './img/defender/Badge/Bandit-Badge.png',
    primary: {
      primary: {
        name: 'Mp7',
        img: './img/weapon/MP7.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'M870',
        img: './img/weapon/M870.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'P12',
        img: './img/weapon/P12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Nitro Cell',
        img: './img/gadgets/Nitro_Cell.png',
      }
    }
  },

  Frost: {
    name: 'Frost',
    role: 'defender',
    img: './img/defender/Frost.png',
    badge: './img/defender/Badge/Frost-Badge.png',
    primary: {
      primary: {
        name: 'Super 90',
        img: './img/weapon/Super_90.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: '9mm C1',
        img: './img/weapon/9mm_C1.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        secondary: {
          name: 'Mk1 9mm',
          img: './img/weapon/Mk1_9mm.png',
          attachment: {
            attachment: { name: 'No Attachment' },
            attachment: { name: 'Muzzle Brake' },
            attachment: { name: 'Suppressor' },
          },
          gripe: {
            'none': { name: 'No Grip' },
          },
          scope: {
            'none': { name: 'No Scope' },
          }
        }
      },
      secondary2: {
        name: 'ITA12S',
        img: './img/weapon/ITA12S.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },    
    gadgets: {
      gadget1: {
        name: 'Bulletproof Camera',
        img: './img/gadgets/Bulletproof_camera.png',
      },
      gadget2: {
        name: 'Deployable Shield',
        img: './img/gadgets/Deployable_Shield.png',
      }
    }
  },
  Valkyrie: {
    name: 'Valkyrie',
    role: 'defender',
    img: './img/defender/Valkyrie.png',
    badge: './img/defender/Badge/Valkyrie-Badge.png',
    primary: {
      primary: {
        name: 'MPX',
        img: './img/weapon/MPX.png',
        attachment: {
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'SPAS-12',
        img: './img/weapon/SPAS-12.png',
        attachment: {
          attachment: { name: 'Flash Hilder' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },    
    secondary: {
      secondary: {
        name: 'D-50',
        img: './img/weapon/D-50.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
    },
    gadgets: {
      gadget1: {
        name: 'Impact Grenade',
        img: './img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Nitro Cell',
        img: './img/gadgets/Nitro_Cell.png',
      }
    }
  },
  Caveira: {
    name: 'Caveira',
    role: 'defender',
    img: './img/defender/Caveira.png',
    badge: './img/defender/Badge/Caveira-Badge.png',
    primary: {
      primary: {
        name: 'M12',
        img: './img/weapon/M12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'SPAS-15',
        img: './img/weapon/SPAS-15.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'Luison',
        img: './img/weapon/Luison.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
    },
    gadgets: {
      gadget1: {
        name: 'Impact Grenade',
        img: './img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Proximity Alarm',
        img: './img/gadgets/Proximity_alarm.png',
      },
      gadget3: {
        name: 'Observation Blocker',
        img: './img/gadgets/Observation_Blocker.png'
      }
    }
  },
  Echo: {
    name: 'Echo',
    role: 'defender',
    img: './img/defender/Echo.png',
    badge: './img/defender/Badge/Echo-Badge.png',
    primary: {
      primary: {
        name: 'Supernova',
        img: './img/weapon/SuperNova.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        },
      },
      primary2: {
        name: 'Mp5SD',
        img: './img/weapon/MP5SD.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },  
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'P229',
        img: './img/weapon/P229.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        },
      },
      secondary2: {
        name: 'Bearing 9',
        img: './img/weapon/Bearing_9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Impact Grenade',
        img: './img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Deployable Shield',
        img: './img/gadgets/Deployable_Shield.png',
      }
    }
  },
  Mira: {
    name: 'Mira',
    role: 'defender',
    img: './img/defender/Mira.png',
    badge: './img/defender/Badge/Mira-Badge.png',
    primary: {
      primary: {
        name: 'Vector .45 ACP',
        img: './img/weapon/Vector_45_ACP.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }      
      },
      primary2: {
        name: 'ITA12L',
        img: './img/weapon/ITA12L.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'USP40',
        img: './img/weapon/USP40.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        },
      },
    },
    gadgets: {
      gadget1: {
        name: 'Proximity Alarm',
        img: './img/gadgets/Proximity_alarm.png',
      },
      gadget2: {
        name: 'Nitro Cell',
        img: './img/gadgets/Nitro_Cell.png',
      }
    }
  },
  Lesion: {
    name: 'Lesion',
    role: 'defender',
    img: './img/defender/Lesion.png',
    badge: './img/defender/Badge/Lesion-Badge.png',
    primary: {
      primary: {
        name: 'Six12 SD',
        img: './img/weapon/SIX12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'T-5 SMG',
        img: './img/weapon/T-5_SMG.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'Q-929',
        img: './img/weapon/Q-929.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        }, 
        scope: {
          'none': { name: 'No Scope' },
        },
      },
    },
    gadgets: {
      gadget1: {
        name: 'Impact Grenade',
        img: './img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Bulletproof Camera',
        img: './img/gadgets/Bulletproof_camera.png',
      }
    }
  },
  Ela: {
    name: 'Ela',
    role: 'defender',
    img: './img/defender/Ela.png',
    badge: './img/defender/Badge/Ela-Badge.png',
    primary: {
      primary: {
        name: 'Scorpion EVO 3 A1',
        img: './img/weapon/Scorpion_EVO_3_A1.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: { 
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
      }
      },
      primary2: {
        name: 'Fo-12',
        img: './img/weapon/FO-12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'RG15',
        img: './img/weapon/RG15.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        },
      },
    },
    gadgets: {
      gadget1: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Deployable Shield',
        img: './img/gadgets/Deployable_Shield.png',
      },
      gadget3: {
        name: 'Observation Blocker',
        img: './img/gadgets/Observation_Blocker.png'
      }
    }
  },
  Vigil: {
    name: 'Vigil',
    role: 'defender',
    img: './img/defender/Vigil.png',
    badge: './img/defender/Badge/Vigil-Badge.png',
    primary: {
      primary: {
        name: 'K1A',
        img: './img/weapon/K1A.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'BOSG.12.2',
        img: './img/weapon/BOSG-12-2.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Scope 2.5x': { name: 'Scope 2.5x' },
          'Scope 2.5x A': { name: 'Scope 2.5x A' },
          'Scope 2.5x B': { name: 'Scope 2.5x B' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'C75 Auto',
        img: './img/weapon/C75_Auto.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        },
      },
      secondary2: {
        name: 'SMG-12',
        img: './img/weapon/SMG-12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Impact Grenade',
        img: './img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Bulletproof Camera',
        img: './img/gadgets/Bulletproof_camera.png',
      }
    }
  },
  Maestro: {
    name: 'Maestro',
    role: 'defender',
    img: './img/defender/Maestro.png',
    badge: './img/defender/Badge/Maestro-Badge.png',
    primary: {
      primary: {
        name: 'ALDA 5.56',
        img: './img/weapon/ALDA 5.56.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'ACS12',
        img: './img/weapon/ACS12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'Bailiff 410',
        img: './img/weapon/Bailiff_410.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        },
      },
      secondary2: {
        name: 'Keratos .357',
        img: './img/weapon/Keratos_357.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        },
      },
    },
    gadgets: {
      gadget1: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Impact Grenade',
        img: './img/gadgets/Impact_Grenade.png',
      },
      gadget3: {
        name: 'Observation Blocker',
        img: './img/gadgets/Observation_Blocker.png'
      }
    }
  },
  Alibi: {
    name: 'Alibi',
    role: 'defender',
    img: './img/defender/Alibi.png',
    badge: './img/defender/Badge/Alibi-Badge.png',
    primary: {
      primary: {
        name: 'Mx4 Storm',
        img: './img/weapon/Mx4_Storm.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'ACS12',
        img: './img/weapon/ACS12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'Bailiff 410',
        img: './img/weapon/Bailiff_410.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        },
      },
      secondary2: {
        name: 'Keratos .357',
        img: './img/weapon/Keratos_357.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        },
      },
    },
    gadgets: {
      gadget1: {
        name: 'Observation Blocker',
        img: './img/gadgets/Observation_Blocker.png',
      },
      gadget2: {
        name: 'Proximity Alarm',
        img: './img/gadgets/Deployable_Shield.png',
      }
    }
  },
  Clash: {  
    name: 'Clash',
    role: 'defender',
    img: './img/defender/Clash.png',
    badge: './img/defender/Badge/Clash-Badge.png',
    primary: {
      primary: {
        name: 'CCE Shield',
        img: './img/weapon/CCE_Shield.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        },
      },
    },
    secondary: {
      secondary: {
        name: 'Super Shorty',
        img: './img/weapon/Super_Shorty.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      secondary2: {
        name: 'SPSMG9',
        img: './img/weapon/SPSMG9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      secondary3: {
        name: 'P-10C',
        img: './img/weapon/P-10C.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        },
      },
    },
    gadgets: {
      gadget1: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Impact Grenade',
        img: './img/gadgets/Impact_Grenade.png',
      },
      gadget3: {
        name: 'Deployable Shield',
          img: './img/gadgets/Deployable_Shield.png'
      }
    }
  },
  Kaid: {
    name: 'Kaid',
    role: 'defender',
    img: './img/defender/Kaid.png',
    badge: './img/defender/Badge/Kaid-Badge.png',
    primary: {
      primary: {
        name: 'Aug A3',
        img: './img/weapon/AUG_A3.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'TCSG12',
        img: './img/weapon/TCSG12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: '.44 MAG SEMI-AUTO',
        img: './img/weapon/44_MAG_SEMI-AUTO.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'LFP586',
        img: './img/weapon/LFP586.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Nitro Cell',
        img: './img/gadgets/Nitro_Cell.png',
      },
      gadget2: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png',
      },
      gadget3: {
        name: 'Observation Blocker',
        img: './img/gadgets/Observation_Blocker.png'
      }
    }
  },
  Mozzie: {
    name: 'Mozzie',
    role: 'defender',
    img: './img/defender/Mozzie.png',
    badge: './img/defender/Badge/Mozzie-Badge.png',
    primary: {
      primary: {
        name: 'Commando 9',
        img: './img/weapon/Commando_9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'P10 RONI',
        img: './img/weapon/P10Roni.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
           'Scope 1.5x': { name: 'Scope 1.5x' },
           'Red Dot A': { name: 'Red Dot A' },
           'Red Dot B': { name: 'Red Dot B' },
           'Red Dot C': { name: 'Red Dot C' },
           'Holo A' : { name: 'Holo A' },
           'Holo B': { name: 'Holo B' },
           'Holo C': { name: 'Holo C' },
           'Holo D': { name: 'Holo D' },
           'Reflex A': { name: 'Reflex A' },
           'Reflex B': { name: 'Reflex B' },
           'Reflex C': { name: 'Reflex C' },
         }
      }
    },
    secondary: {
      secondary: {
        name: 'SDP 9mm',
        img: './img/weapon/SDP_9mm.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Nitro Cell',
        img: './img/gadgets/Nitro_Cell.png',
      }
    }
  },
  Warden: {
    name: 'Warden',
    role: 'defender',
    img: './img/defender/Warden.png',
    badge: './img/defender/Badge/Warden-Badge.png',
    primary: {
      primary: {
        name: 'M590A1',
        img: './img/weapon/M590A1.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'MPX',
        img: './img/weapon/MPX.png',
        attachment: {
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'P-10C',
        img: './img/weapon/P-10C.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        },
      },
      secondary2: {
        name: 'SMG-12',
        img: './img/weapon/SMG-12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    gadgets: {
      gadget1: {
        name: 'Deployable Shield',
        img: './img/gadgets/Deployable_Shield.png',
      },
      gadget2: {
        name: 'Nitro Cell',
        img: './img/gadgets/Nitro_Cell.png',
      },
      gadget3: {
        name: 'Observation Blocker',
        img: './img/gadgets/Observation_Blocker.png'
      }
    }
  },
  Goyo: {
    name: 'Goyo',
    role: 'defender',
    img: './img/defender/Goyo.png',
    badge: './img/defender/Badge/Goyo-Badge.png',
    primary: {
      primary: {
        name: 'Vector .45 ACP',
        img: './img/weapon/Vector_45_ACP.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }      
      },
      primary2: {
        name: 'TCSG12',
        img: './img/weapon/TCSG12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'P229',
        img: './img/weapon/P229.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Proximity Alarm',
        img: './img/gadgets/Proximity_alarm.png',
      },
      gadget2: {
        name: 'Bulletproof Camera.',
        img: './img/gadgets/Bulletproof_Camera.png',
      },
      gadget3: {
        name: 'Impact Grenade',
        img: './img/gadgets/Impact_Grenade.png',
      }
    }
  },
  Warmai: {
    name: 'Wamai',
    role: 'defender',
    img: './img/defender/Wamai.png',
    badge: './img/defender/Badge/Wamai-Badge.png',
    primary: {
      primary: {
        name: 'AUG A2',
        img: './img/weapon/AUG_A2.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'MP5K',
        img: './img/weapon/MP5K.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' }
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },  
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'Keratos .357',
        img: './img/weapon/Keratos_357.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        },
      },
      secondary2: {
        name: 'P12',
        img: './img/weapon/P12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
    },
    gadgets: {
      gadget1: {
        name: 'Impact Grenade',
        img: './img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Proximity Alarm',
        img: './img/gadgets/Proximity_alarm.png',
      }
    }
  },
  Oryx: {
    name: 'Oryx',
    role: 'defender',
    img: './img/defender/Oryx.png',
    badge: './img/defender/Badge/Oryx-Badge.png',
    primary: {
      primary: {
        name: 'T-5 SMG',
        img: './img/weapon/T-5_SMG.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'SPAS-12',
        img: './img/weapon/SPAS-12.png',
        attachment: {
          attachment: { name: 'Flash Hilder' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },   
    secondary: {
      secondary: {
        name: 'Bailiff 410',
        img: './img/weapon/Bailiff_410.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'USP40',
        img: './img/weapon/USP40.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Proximity Alarm',
        img: './img/gadgets/Proximity_alarm.png',
      }
    }
  },
  Melusi: {
    name: 'Melusi',
    role: 'defender',
    img: './img/defender/Melusi.png',
    badge: './img/defender/Badge/Melusi-Badge.png',
    primary: {
      primary: {
        name: 'MP5',
        img: './img/weapon/MP5.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'Super 90',
        img: './img/weapon/Super_90.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'RG15',
        img: './img/weapon/RG15.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Bulletproof Camera',
        img: './img/gadgets/Bulletproof_camera.png',
      },
      gadget2: {
        name: 'Impact Grenade',
        img: './img/gadgets/Impact_Grenade.png',
      }
    }
  },
  Aruni: {
    name: 'Aruni',
    role: 'defender',
    img: './img/defender/Aruni.png',
    badge: './img/defender/Badge/Aruni-Badge.png',
    primary: {
      primary: {
        name: 'P10 RONI',
        img: './img/weapon/P10Roni.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
           'Scope 1.5x': { name: 'Scope 1.5x' },
           'Red Dot A': { name: 'Red Dot A' },
           'Red Dot B': { name: 'Red Dot B' },
           'Red Dot C': { name: 'Red Dot C' },
           'Holo A' : { name: 'Holo A' },
           'Holo B': { name: 'Holo B' },
           'Holo C': { name: 'Holo C' },
           'Holo D': { name: 'Holo D' },
           'Reflex A': { name: 'Reflex A' },
           'Reflex B': { name: 'Reflex B' },
           'Reflex C': { name: 'Reflex C' },
         }
      },
      primary2: {
        name: 'Mk 14 EBR',
        img: './img/weapon/Mk_14_EBR.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'PRB92',
        img: './img/weapon/PRB92.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Bulletproof Camera',
        img: './img/gadgets/Bulletproof_camera.png',
      }
    }
  },
  Thunderbird: {
    name: 'Thunderbird',
    role: 'defender',
    img: './img/defender/Thunderbird.png',
    badge: './img/defender/Badge/Thunderbird-Badge.png',
    primary: {
      primary: {
        name: 'Spear .308',
        img: './img/weapon/Spear_308.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        } 
      },
      primary2: {
        name: 'SPAS-15',
        img: './img/weapon/SPAS-15.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'Bearing9',
        img: './img/weapon/Bearing_9.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      secondary2: {
        name: 'Q-929',
        img: './img/weapon/Q-929.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Bulletproof Camera',
        img: './img/gadgets/Bulletproof_camera.png',
      }
    }
 
},
  Thorn: {
    name: 'Thorn',
    role: 'defender',
    img: './img/defender/Thorn.png',
    badge: './img/defender/Badge/Thorn-Badge.png',
    primary: {
      primary: {
        name: 'UZK50GI',
        img: './img/weapon/uzk50gi.png',
        attachment: {  
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'M870',
        img: './img/weapon/M870.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: '1911 TACOPS',
        img: './img/weapon/1911_TACOPS.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
      secondary2: {
        name: 'C75 Auto',
        img: './img/weapon/C75_Auto.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      },
    },
    gadgets: {
      gadget1: {
        name: 'Deployable Shield',
        img: './img/gadgets/Deployable_Shield.png',
      },
      gadget2: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png',
      }
    }
  },
  Azami: {
    name: 'Azami',
    role: 'defender',
    img: './img/defender/Azami.png',
    badge: './img/defender/Badge/Azami-Badge.png',
    primary: {
      primary: {
        name: '9x19VSN',
        img: './img/weapon/9x19VSN.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'ACS12',
        img: './img/weapon/ACS12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Scope 2.0x': { name: 'Scope 2.0x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
    },
    secondary: {
      secondary: {
        name: 'D-50',
        img: './img/weapon/D-50.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Impact Grenade',
        img: './img/gadgets/Impact_Grenade.png',
      }
    }
  },
  Solis: {
    name: 'Solis',
    role: 'defender',
    img: './img/defender/Solis.png',
    badge: './img/defender/Badge/Solis-Badge.png',
    primary: {
      primary: {
        name: 'P90',
        img: './img/weapon/P90.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Scope 1.5x': { name: 'Scope 1.5x' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'ITA12L',
        img: './img/weapon/ITA12L.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {  
      secondary: {
        name: 'SMG-11',
        img: './img/weapon/SMG-11.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Impact Grenade',
        img: './img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Bulletproof Camera',
        img: './img/gadgets/Bulletproof_camera.png',
      }
    }
  },
  Fenrir: {
    name: 'Fenrir',
    role: 'defender',
    img: './img/defender/Fenrir.png',
    badge: './img/defender/Badge/Fenrir-Badge.png',
    primary: {
      primary: {
        name: 'MP7',
        img: './img/weapon/MP7.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Flash Hilder' },
          attachment: { name: 'Compensator' },
          attachment: { name: 'Muzzle Brake' },
          attachment: { name: 'Suppressor' },
          attachment: { name: 'Extended Barrel' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      },
      primary2: {
        name: 'SASG-12',
        img: './img/weapon/SASG-12.png',
        attachment: {
          attachment: { name: 'No Attachment' },
          attachment: { name: 'Suppressor' },
        },
        gripe: {
          'none': { name: 'No Grip' },
          'Vertical Grip': { name: 'Vertical Grip' },
          'Angled Grip': { name: 'Angled Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
          'Red Dot A': { name: 'Red Dot A' },
          'Red Dot B': { name: 'Red Dot B' },
          'Red Dot C': { name: 'Red Dot C' },
          'Holo A' : { name: 'Holo A' },
          'Holo B': { name: 'Holo B' },
          'Holo C': { name: 'Holo C' },
          'Holo D': { name: 'Holo D' },
          'Reflex A': { name: 'Reflex A' },
          'Reflex B': { name: 'Reflex B' },
          'Reflex C': { name: 'Reflex C' },
        }
      }
    },
    secondary: {
      secondary: {
        name: 'Bailiff 410',
        img: './img/weapon/Bailiff_410.png',
        attachment: {
          attachment: { name: 'No Attachment' },
        },
        gripe: {
          'none': { name: 'No Grip' },
        },
        scope: {
          'none': { name: 'No Scope' },
        }
      }
    },
    gadgets: {
      gadget1: {
        name: 'Barbed Wire',
        img: './img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Boletproof Camera',
        img: './img/gadgets/Bulletproof_camera.png',
      }
    }
  }
}