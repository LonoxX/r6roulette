var Attacker = {
  Ace: {
    name: 'Ace',
    role: 'attacker',
    primary: {
      primary: {
        name: 'AK-12',
        img: './assets/img/weapon/AK-12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/M1014.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/P9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './assets/img/gadgets/Claymore.png'
      }
    }
  },
  Amaru: {
    name: 'Amaru',
    role: 'attacker',
    primary: {
      primary: {
        name: 'G8A1',
        img: './assets/img/weapon/G8A1.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/SuperNova.png',
        attachment: {
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/SMG-11.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/ITA12S.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/Gonne_6.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Stun_Grenade.png'
      },
      gadget2: {
        name: 'HARD BREACH CHARGE',
        img: './assets/img/gadgets/SecondaryBreacher.png'
      }
    }
  },
  Ash: {
    name: 'Ash',
    role: 'attacker',
    primary: {
      primary: {
        name: 'R4-C',
        img: './assets/img/weapon/R4-C.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/G36C.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/5-7_USG.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },  
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/M45_MEUSOC.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },  
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './assets/img/gadgets/Claymore.png'
      }
    }
  },
  Blackbeard: {
    name: 'Blackbeard',
    role: 'attacker',
    primary: {
      primary: {
        name: 'Mk17 CQB',
        img: './assets/img/weapon/Mk17_CQB.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/SR-25.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/D-50.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Claymore.png'
      },
      gadget2: {
        name: 'Stun Grenade',
        img: './assets/img/gadgets/Smoke_Grenade.png'
      },
      gadget3: {
        name: 'Impact EMP Grenade',
        img: './assets/img/gadgets/Impact_EMP_Grenade.png'
      }
    }
  },
  Blitz: {
    name: 'Blitz',
    role: 'attacker',
    primary: {
      primary: {
        name: 'Tactical Shield',
        img: './assets/img/weapon/G52-Tactical_Shield.png',
        attachment: {
          attachment: { name: '' },
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
        img: './assets/img/weapon/P12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Smoke Grenade',
        img: './assets/img/gadgets/Smoke_Grenade.png'
      }
    }
  },
  Buck: {
    name: 'Buck',
    role: 'attacker',
    primary: {
      primary: {
        name: 'C8-SFW',
        img: './assets/img/weapon/C8-SFW.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/CAMRS.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Mk1_9mm.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Gonne_6.png',
        attachment: {
        'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/SecondaryBreacher.png'
      },
      gadget2: {
        name: 'Stun Grenade',
        img: './assets/img/gadgets/Claymore.png'
      }
    }
  },
  Capitao: {
    name: 'Capitao',
    role: 'attacker',
    primary: {
      primary: {
        name: 'PARA-308',
        img: './assets/img/weapon/PARA-308.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/M249.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
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
        img: './assets/img/weapon/PRB92.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Gonne_6.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Claymore.png'
      },
      gadget2: {
        name: 'HARD BREACH CHARGE',
        img: './assets/img/gadgets/SecondaryBreacher.png'
      }
    }
  },
  Dokkaebi: {
    name: 'Dokkaebi',
    role: 'attacker',
    primary: {
      primary: {
        name: 'Mk 14 EBR',
        img: './assets/img/weapon/Mk_14_EBR.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/BOSG-12-2.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/SMG-12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/C75_Auto.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Gonne_6.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Smoke_Grenade.png'
      },
      gadget2: {
        name: 'Stun Grenade',
        img: './assets/img/gadgets/Stun_Grenade.png'
      },
      gadget3: {
        name: 'Impact EMP Grenade',
        img: './assets/img/gadgets/Impact_EMP_Grenade.png'
      }
    }
  },
  Finka: {
    name: 'Finka',
    role: 'attacker',
    primary: {
      primary: {
        name: 'Spear .308',
        img: './assets/img/weapon/Spear_308.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/6P41.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/SASG-12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/PMM.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/GSH_18.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Gonne_6.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Smoke_Grenade.png'
      },
      gadget2: {
        name: 'Stun Grenade',
        img: './assets/img/gadgets/Stun_Grenade.png'
      }
    }
  },
  Flores: {
    name: 'Flores',
    role: 'attacker',
    primary: {
      primary: {
        name: 'AR33',
        img: './assets/img/weapon/AR33.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/SR-25.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/GSH_18.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Stun_Grenade.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './assets/img/gadgets/Claymore.png'
      }
    }
  },
  Fuze: {
    name: 'Fuze',
    role: 'attacker',
    primary: {
      primary: {
        name: 'AK-12',
        img: './assets/img/weapon/AK-12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/6P41.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Ballistic_Shield.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/PMM.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/GSH_18.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'HARD BREACH CHARGE',
        img: './assets/img/gadgets/SecondaryBreacher.png'
      },
      gadget3: {
        name: 'Stun Grenade',
        img: './assets/img/gadgets/Stun_Grenade.png'
      }
    }
  },
  Glaz: {
    name: 'Glaz',
    role: 'attacker',
    primary: {
      primary: {
        name: 'OTs-03',
        img: './assets/img/weapon/OTs-03.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },  
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/PMM.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Gonne_6.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/Bearing_9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/gadgets/Smoke_Grenade.png'
      },
      gadget2: {
        name: 'Frag Grenade',
        img: './assets/img/gadgets/Frag_Grenade.png'
      },
      gadget3: {
        name: 'Claymore',
        img: './assets/img/gadgets/Claymore.png'
      }
    }
  },
  Gridlock: {
    name: 'Gridlock',
    role: 'attacker',
    primary: {
      primary: {
        name: 'F90',
        img: './assets/img/weapon/F90.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/M249_SAW.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
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
        img: './assets/img/weapon/Super_Shorty.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/SDP_9mm.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Gonne_6.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Smoke_Grenade.png'
      },
      gadget2: {
        name: 'Breach Charge',
        img: './assets/img/gadgets/Breach_Charge.png'
      },
      gadget3: {
        name: 'Impact EMP Grenade',
        img: './assets/img/gadgets/Impact_EMP_Grenade.png'
      }
    }
  },
  Grim: {
    name: 'Grim',
    role: 'attacker',
    primary: {
      primary: {
        name: '552 Commando',
        img: './assets/img/weapon/552_Commando.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/SG-CQB.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/P229.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './assets/img/gadgets/Claymore.png'
      }
    }
  },
  Hibana: {
    name: 'Hibana',
    role: 'attacker',
    primary: {
      primary: {
        name: 'Type-89',
        img: './assets/img/weapon/Type-89.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/SuperNova.png',
        attachment: {
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/P229.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Bearing_9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/gadgets/Stun_Grenade.png'
      },
      gadget2: {
        name: 'Breach Charge',
        img: './assets/img/gadgets/Breach_Charge.png'
      }
    }
  },
  Iana: {
    name: 'Iana',
    role: 'attacker',
    primary: {
      primary: {
        name: 'ARX200',
        img: './assets/img/weapon/ARX200.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/G36C.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/Mk1_9mm.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Frag_Grenade.png'
      },
      gadget2: {
        name: 'Smoke Grenade',
        img: './assets/img/gadgets/Smoke_Grenade.png'
      }
    }
  },
  IQ: {
    name: 'IQ',
    role: 'attacker',
    primary: {
      primary: {
        name: 'AUG A2',
        img: './assets/img/weapon/AUG_A2.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        name: '552 Commando',
        img: './assets/img/weapon/552_Commando.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/SG-CQB.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
          img: './assets/img/weapon/G8A1.png',
          attachment: {
            'No Attachment': { name: 'No Attachment' },
            'Flash Hilder': { name: 'Flash Hilder' },
            'Compensator': { name: 'Compensator' },
            'Muzzle Brake': { name: 'Muzzle Brake' },
            'Suppressor': { name: 'Suppressor' },
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
        name: 'P12',
        img: './assets/img/weapon/P12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        name: 'Breach Chargee',
        img: './assets/img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './assets/img/gadgets/Claymore.png'
      }
    }
  },
  Jackal: {
    name: 'Jackal',
    role: 'attacker',
    primary: {
      primary: {
        name: 'C7E',
        img: './assets/img/weapon/C7E.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/PDW9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/ITA12L.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/USP40.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/ITA12S.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Claymore.png'
      },
      gadget2: {
        name: 'Smoke Grenade',
        img: './assets/img/gadgets/Smoke_Grenade.png'
      }
    }
  },
  Ying: {
    name: 'Ying',
    role: 'attacker',
    primary: {
      primary: {
        name: 'T-95 LSW',
        img: './assets/img/weapon/T-95_LSW.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Six12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/Q-929.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/SecondaryBreacher.png'
      },
      gadget2: {
        name: 'Smoke Grenade',
        img: './assets/img/gadgets/Smoke_Grenade.png'
      }
    }
  },
  Kali: {
    name: 'Kali',
    role: 'attacker',
    primary: {
      primary: {
        name: 'CSRX 300',
        img: './assets/img/weapon/CSRX_300.png',
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
        img: './assets/img/weapon/SPSMG9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/C75_Auto.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/P226_Mk_25.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Claymore.png'
      },
      gadget2: {
        name: 'Breach Charge',
        img: './assets/img/gadgets/Breach_Charge.png'
      }
    }
  },
  Lion: {
    name: 'Lion',
    role: 'attacker',
    primary: {
      primary: {
        name: 'V308',
        img: './assets/img/weapon/V308.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/417.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/SG-CQB.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/LFP586.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/P9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Gonne_6.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Claymore.png'
      },
      gadget2: {
        name: 'Stun Grenade',
        img: './assets/img/gadgets/Stun_Grenade.png'
      },
      gadget3: {
        name: 'Impact EMP Grenade',
        img: './assets/img/gadgets/Impact_EMP_Grenade.png'
      }
    }
  },
  Maverick: {
    name: 'Maverick',
    role: 'attacker',
    primary: {
      primary: {
        name: 'AR-15.50',
        img: './assets/img/weapon/AR-15-50.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/M4.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/1911_TACOPS.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Stun_Grenade.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './assets/img/gadgets/Claymore.png'
      }
    }
  },
  Montagne: {
    name: 'Montagne',
    role: 'attacker',
    primary: {
      primary: {
        name: 'LE ROC SHIELD',
        img: './assets/img/weapon/LE_ROC_SHIELD.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/P9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/LFP586.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/SecondaryBreacher.png'
      },
      gadget2: {
        name: 'Smoke Grenade',
        img: './assets/img/gadgets/Smoke_Grenade.png'
      }
    }
  },
  Nokk: {
    name: 'Nokk',
    role: 'attacker',
    primary: {
      primary: {
        name: 'FMG-9',
        img: './assets/img/weapon/FMG-9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/SIX12_SD.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/5-7_USG.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/D-50.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Frag_Grenade.png'
      },
      gadget2: {
        name: 'HARD BREACH CHARGE',
        img: './assets/img/gadgets/SecondaryBreacher.png'
      },
      gadget3: {
        name: 'Impact EMP Grenade',
        img: './assets/img/gadgets/Impact_EMP_Grenade.png'
      }
    }
  },
  Nomad: {
    name: 'Nomad',
    role: 'attacker',
    primary: {
      primary: {
        name: 'AK-74M',
        img: './assets/img/weapon/AK-74M.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/ARX200.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/44_MAG_SEMI-AUTO.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/PRB92.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Stun_Grenade.png'
      },
      gadget2: {
        name: 'Breach Charge',
        img: './assets/img/gadgets/Breach_Charge.png'
      }
    }
  },
  Osa: {
    name: 'Osa',
    role: 'attacker',
    primary: {
      primary: {
        name: '556xi',
        img: './assets/img/weapon/556xi.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/PDW9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/PMM.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Smoke_Grenade.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './assets/img/gadgets/Claymore.png'
      },
      gadget3: {
        name: 'Impact EMP Grenade',
        img: './assets/img/gadgets/Impact_EMP_Grenade.png'
      }
    }
  },
  Sens: {
    name: 'Sens',
    role: 'attacker',
    primary: {
      primary: {
        name: 'POF9',
        img: './assets/img/weapon/POF9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/417.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/SDP_9mm.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './assets/img/gadgets/Claymore.png'
      }
    }
  },
  Sledge: {
    name: 'Sledge',
    role: 'attacker',
    primary: {
      primary: {
        name: 'L85A2',
        img: './assets/img/weapon/L85A2.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/M590A1.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/P226_Mk_25.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Frag_Grenade.png'
      },
      gadget2: {
        name: 'Stun Grenade',
        img: './assets/img/gadgets/Smoke_Grenade.png'
      }
    }
  },
  Thatcher: {
    name: 'Thatcher',
    role: 'attacker',
    primary: {
      primary: {
        name: 'AR33',
        img: './assets/img/weapon/AR33.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/L85A2.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/M590A1.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/P226_Mk_25.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './assets/img/gadgets/Claymore.png'
      }
    }
  },
  Thermite: {
    name: 'Thermite',
    role: 'attacker',
    primary: {
      primary: {
        name: 'M1014',
        img: './assets/img/weapon/M1014.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/556xi.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/5-7_USG.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
          img: './assets/img/weapon/M45_MEUSOC.png',
          attachment: {
            'No Attachment': { name: 'No Attachment' },
            'Muzzle Brake': { name: 'Muzzle Brake' },
            'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Smoke_Grenade.png'
      },
      gadget2: {
        name: 'Stun Grenade',
        img: './assets/img/gadgets/Stun_Grenade.png'
      }
    }
  },
  Twitch: {
    name: 'Twitch',
    role: 'attacker',
    primary: {
      primary: {
        name: 'F2',
        img: './assets/img/weapon/F2.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/417.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/SG-CQB.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/P9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/LFP586.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Smoke_Grenade.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './assets/img/gadgets/Claymore.png'
      }
    }
  },
  Zero: {
    name: 'Zero',
    role: 'attacker',
    primary: {
      primary: {
        name: 'SC3000K',
        img: './assets/img/weapon/SC3000K.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/MP7.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/5-7_USG.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },  
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Gonne_6.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/SecondaryBreacher.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './assets/img/gadgets/Claymore.png'
      }
    }
  },
  Zofia: {
    name: 'Zofia',
    role: 'attacker',
    primary: {
      primary: {
        name: 'LMG-E',
        img: './assets/img/weapon/LMG-E.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/M762.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/RG15.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Breach_Charge.png'
      },
      gadget2: {
        name: 'Claymore',
        img: './assets/img/gadgets/Claymore.png'
      }
    }
  },
  Brava: {
    name: 'Brava',
    role: 'attacker',
    primary: {
      primary: {
        name: 'PARA-308',
        img: './assets/img/weapon/PARA-308.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/CAMRS.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Super_Shorty.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/USP40.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Stun_Grenade.png',
      },
      gadget2: {
        name: 'Claymore',
        img: './assets/img/gadgets/Claymore.png',
      }
    }
  },
}
var Defender = {
  Smoke:{
    name: 'Smoke',
    role: 'defender',
    primary: {
      primary: {
        name: 'FMG-9',
        img: './assets/img/weapon/FMG-9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/M590A1.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/P226_Mk_25.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/SMG-11.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/gadgets/Barbed_Wire.png'
      },
      gadget2: {
        name: 'Proximity Alarm',
        img: './assets/img/gadgets/Proximity_Alarm.png'
      }
    }
  },
  Castle: {
    name: 'Castle',
    role: 'defender',
    primary: {
      primary: {
        name: 'UMP45',
        img: './assets/img/weapon/UMP45.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
      img: './assets/img/weapon/M1014.png',
      attachment: {
        'No Attachment': { name: 'No Attachment' },
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
      img: './assets/img/weapon/5-7_USG.png',
      attachment: {
        'No Attachment': { name: 'No Attachment' },  
        'Muzzle Brake': { name: 'Muzzle Brake' },
        'Suppressor': { name: 'Suppressor' },
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
      img: './assets/img/weapon/5-7_USG.png',
      attachment: {
        'No Attachment': { name: 'No Attachment' },  
        'Muzzle Brake': { name: 'Muzzle Brake' },
        'Suppressor': { name: 'Suppressor' },
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
      img: './assets/img/weapon/5-7_USG.png',
      attachment: {
        'No Attachment': { name: 'No Attachment' },  
        'Muzzle Brake': { name: 'Muzzle Brake' },
        'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Nitro_Cell.png'
      },
      gadget2: {
        name: 'Bulletproof Camera',
        img: './assets/img/gadgets/Bulletproof_camera.png'
      }
    }
  },
  Pulse : {
    name: 'Pulse',
    role: 'defender',
    primary: {
      primary: {
        name: 'M1014',
        img: './assets/img/weapon/M1014.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/UMP45.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/M45_MEUSOC.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },  
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/5-7_USG.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },  
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Deployable_Shield.png'
      },
      gadget2: {
        name: 'Nitro Cell',
        img: './assets/img/gadgets/Nitro_Cell.png'
      },
      gadget3: {
        name: 'Observation Blocker',
        img: './assets/img/gadgets/Observation_Blocker.png'
      }
    }
  },
  Doc: {
    name: 'Doc',
    role: 'defender',
    primary: {
      primary: {
        name: 'SG-CQB',
        img: './assets/img/weapon/SG-CQB.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/MP5.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/P90.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/P9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/LFP586.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/Bailiff_410.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Bulletproof_camera.png',
      },
      gadget2: {
        name: 'Barbed Wire',
        img: './assets/img/gadgets/Barbed_Wire.png',
      }
    }
  },
  Rook: {
    name: 'Rook',
    role: 'defender',
    primary: {
      primary: {
        name: 'P90',
        img: './assets/img/weapon/P90.png',
        attachment: {
        'No Attachment': { name: 'No Attachment' },
        'Flash Hilder': { name: 'Flash Hilder' },
        'Compensator': { name: 'Compensator' },
        'Muzzle Brake': { name: 'Muzzle Brake' },
        'Suppressor': { name: 'Suppressor' },
        'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/MP5.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/SG-CQB.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/P9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/LFP586.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Proximity_alarm.png',
      },
      gadget2: {
        name: 'Impact Grenade',
        img: './assets/img/gadgets/Impact_Grenade.png',
      },
      gadget3: {
        name: 'Observation Blocker',
        img: './assets/img/gadgets/Observation_Blocker.png'
      }
    }
  },
  Kapkan: {
    name: 'Kapkan',
    role: 'defender',
    primary: {
      primary: {
        name: '9x19VSN',
        img: './assets/img/weapon/9x19VSN.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/SASG-12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/PMM.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/GSH_18.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Nitro Cell',
        img: './assets/img/gadgets/Nitro_Cell.png',
      }
    }
  },
  Tachanka: {
    name: 'Tachanka',
    role: 'defender',
    primary: {
      primary: {
        name: 'DP27',
        img: './assets/img/weapon/DP27.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/9x19VSN.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/PMM.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/GSH_18.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Bearing_9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Deployable Shield',
        img: './assets/img/gadgets/Deployable_Shield.png',
      },
      gadget3: {
        name: 'Proximity Alarm',
        img: './assets/img/gadgets/Proximity_alarm.png',
      }
    }
  },
  Jager: {
    name: 'Jager',
    role: 'defender',
    primary: {
      primary: {
        name: 'M870',
        img: './assets/img/weapon/M870.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/416C_Carbine.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/P12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Observation_Blocker.png',
      },
      gadget2: {
        name: 'Barbed Wire',
        img: './assets/img/gadgets/Barbed_Wire.png',
      }
    }
  },
  Bandit: {
    name: 'Bandit',
    role: 'defender',
    primary: {
      primary: {
        name: 'Mp7',
        img: './assets/img/weapon/MP7.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/M870.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/P12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Nitro Cell',
        img: './assets/img/gadgets/Nitro_Cell.png',
      }
    }
  },
  Frost: {
    name: 'Frost',
    role: 'defender',
    primary: {
      primary: {
        name: 'Super 90',
        img: './assets/img/weapon/Super_90.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/9mm_C1.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
          img: './assets/img/weapon/Mk1_9mm.png',
          attachment: {
            'No Attachment': { name: 'No Attachment' },
            'Muzzle Brake': { name: 'Muzzle Brake' },
            'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/ITA12S.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Bulletproof_camera.png',
      },
      gadget2: {
        name: 'Deployable Shield',
        img: './assets/img/gadgets/Deployable_Shield.png',
      }
    }
  },
  Valkyrie: {
    name: 'Valkyrie',
    role: 'defender',
    primary: {
      primary: {
        name: 'MPX',
        img: './assets/img/weapon/MPX.png',
        attachment: {
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/SPAS-12.png',
        attachment: {
          'Flash Hilder': { name: 'Flash Hilder' },
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
        img: './assets/img/weapon/D-50.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Nitro Cell',
        img: './assets/img/gadgets/Nitro_Cell.png',
      }
    }
  },
  Caveira: {
    name: 'Caveira',
    role: 'defender',
    primary: {
      primary: {
        name: 'M12',
        img: './assets/img/weapon/M12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/SPAS-15.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/Luison.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Proximity Alarm',
        img: './assets/img/gadgets/Proximity_alarm.png',
      },
      gadget3: {
        name: 'Observation Blocker',
        img: './assets/img/gadgets/Observation_Blocker.png'
      }
    }
  },
  Echo: {
    name: 'Echo',
    role: 'defender',
    primary: {
      primary: {
        name: 'Supernova',
        img: './assets/img/weapon/SuperNova.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/MP5SD.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/P229.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Bearing_9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Deployable Shield',
        img: './assets/img/gadgets/Deployable_Shield.png',
      }
    }
  },
  Mira: {
    name: 'Mira',
    role: 'defender',
    primary: {
      primary: {
        name: 'Vector .45 ACP',
        img: './assets/img/weapon/Vector_45_ACP.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/ITA12L.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/USP40.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Proximity_alarm.png',
      },
      gadget2: {
        name: 'Nitro Cell',
        img: './assets/img/gadgets/Nitro_Cell.png',
      }
    }
  },
  Lesion: {
    name: 'Lesion',
    role: 'defender',
    primary: {
      primary: {
        name: 'Six12 SD',
        img: './assets/img/weapon/SIX12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/T-5_SMG.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/Q-929.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Bulletproof Camera',
        img: './assets/img/gadgets/Bulletproof_camera.png',
      }
    }
  },
  Ela: {
    name: 'Ela',
    role: 'defender',
    primary: {
      primary: {
        name: 'Scorpion EVO 3 A1',
        img: './assets/img/weapon/Scorpion_EVO_3_A1.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/FO-12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/RG15.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Deployable Shield',
        img: './assets/img/gadgets/Deployable_Shield.png',
      },
      gadget3: {
        name: 'Observation Blocker',
        img: './assets/img/gadgets/Observation_Blocker.png'
      }
    }
  },
  Vigil: {
    name: 'Vigil',
    role: 'defender',
    primary: {
      primary: {
        name: 'K1A',
        img: './assets/img/weapon/K1A.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/BOSG-12-2.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/C75_Auto.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/SMG-12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Bulletproof Camera',
        img: './assets/img/gadgets/Bulletproof_camera.png',
      }
    }
  },
  Maestro: {
    name: 'Maestro',
    role: 'defender',
    primary: {
      primary: {
        name: 'ALDA 5.56',
        img: './assets/img/weapon/ALDA 5.56.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/ACS12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/Bailiff_410.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/Keratos_357.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Impact Grenade',
        img: './assets/img/gadgets/Impact_Grenade.png',
      },
      gadget3: {
        name: 'Observation Blocker',
        img: './assets/img/gadgets/Observation_Blocker.png'
      }
    }
  },
  Alibi: {
    name: 'Alibi',
    role: 'defender',
    primary: {
      primary: {
        name: 'Mx4 Storm',
        img: './assets/img/weapon/Mx4_Storm.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/ACS12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/Bailiff_410.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/Keratos_357.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Observation_Blocker.png',
      },
      gadget2: {
        name: 'Proximity Alarm',
        img: './assets/img/gadgets/Deployable_Shield.png',
      }
    }
  },
  Clash: {  
    name: 'Clash',
    role: 'defender',
    primary: {
      primary: {
        name: 'CCE Shield',
        img: './assets/img/weapon/CCE_Shield.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/Super_Shorty.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/SPSMG9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/P-10C.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Impact Grenade',
        img: './assets/img/gadgets/Impact_Grenade.png',
      },
      gadget3: {
        name: 'Deployable Shield',
          img: './assets/img/gadgets/Deployable_Shield.png'
      }
    }
  },
  Kaid: {
    name: 'Kaid',
    role: 'defender',
    primary: {
      primary: {
        name: 'Aug A3',
        img: './assets/img/weapon/AUG_A3.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/TCSG12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/44_MAG_SEMI-AUTO.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/LFP586.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Nitro_Cell.png',
      },
      gadget2: {
        name: 'Barbed Wire',
        img: './assets/img/gadgets/Barbed_Wire.png',
      },
      gadget3: {
        name: 'Observation Blocker',
        img: './assets/img/gadgets/Observation_Blocker.png'
      }
    }
  },
  Mozzie: {
    name: 'Mozzie',
    role: 'defender',
    primary: {
      primary: {
        name: 'Commando 9',
        img: './assets/img/weapon/Commando_9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/P10Roni.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/SDP_9mm.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Nitro Cell',
        img: './assets/img/gadgets/Nitro_Cell.png',
      }
    }
  },
  Warden: {
    name: 'Warden',
    role: 'defender',
    primary: {
      primary: {
        name: 'M590A1',
        img: './assets/img/weapon/M590A1.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/MPX.png',
        attachment: {
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/P-10C.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/SMG-12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Deployable_Shield.png',
      },
      gadget2: {
        name: 'Nitro Cell',
        img: './assets/img/gadgets/Nitro_Cell.png',
      },
      gadget3: {
        name: 'Observation Blocker',
        img: './assets/img/gadgets/Observation_Blocker.png'
      }
    }
  },
  Goyo: {
    name: 'Goyo',
    role: 'defender',
    primary: {
      primary: {
        name: 'Vector .45 ACP',
        img: './assets/img/weapon/Vector_45_ACP.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/TCSG12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/P229.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Proximity_alarm.png',
      },
      gadget2: {
        name: 'Bulletproof Camera.',
        img: './assets/img/gadgets/Bulletproof_Camera.png',
      },
      gadget3: {
        name: 'Impact Grenade',
        img: './assets/img/gadgets/Impact_Grenade.png',
      }
    }
  },
  Warmai: {
    name: 'Wamai',
    role: 'defender',
    primary: {
      primary: {
        name: 'AUG A2',
        img: './assets/img/weapon/AUG_A2.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/MP5K.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Keratos_357.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/P12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Proximity Alarm',
        img: './assets/img/gadgets/Proximity_alarm.png',
      }
    }
  },
  Oryx: {
    name: 'Oryx',
    role: 'defender',
    primary: {
      primary: {
        name: 'T-5 SMG',
        img: './assets/img/weapon/T-5_SMG.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/SPAS-12.png',
        attachment: {
          'Flash Hilder': { name: 'Flash Hilder' },
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
        img: './assets/img/weapon/Bailiff_410.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/USP40.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Proximity Alarm',
        img: './assets/img/gadgets/Proximity_alarm.png',
      }
    }
  },
  Melusi: {
    name: 'Melusi',
    role: 'defender',
    primary: {
      primary: {
        name: 'MP5',
        img: './assets/img/weapon/MP5.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/Super_90.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/RG15.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Bulletproof_camera.png',
      },
      gadget2: {
        name: 'Impact Grenade',
        img: './assets/img/gadgets/Impact_Grenade.png',
      }
    }
  },
  Aruni: {
    name: 'Aruni',
    role: 'defender',
    primary: {
      primary: {
        name: 'P10 RONI',
        img: './assets/img/weapon/P10Roni.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/Mk_14_EBR.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/PRB92.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Bulletproof Camera',
        img: './assets/img/gadgets/Bulletproof_camera.png',
      }
    }
  },
  Thunderbird: {
    name: 'Thunderbird',
    role: 'defender',
    primary: {
      primary: {
        name: 'Spear .308',
        img: './assets/img/weapon/Spear_308.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/SPAS-15.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/Bearing_9.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/Q-929.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Bulletproof Camera',
        img: './assets/img/gadgets/Bulletproof_camera.png',
      }
    }
},
  Thorn: {
    name: 'Thorn',
    role: 'defender',
    primary: {
      primary: {
        name: 'UZK50GI',
        img: './assets/img/weapon/uzk50gi.png',
        attachment: {  
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/M870.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/1911_TACOPS.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/C75_Auto.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Deployable_Shield.png',
      },
      gadget2: {
        name: 'Barbed Wire',
        img: './assets/img/gadgets/Barbed_Wire.png',
      }
    }
  },
  Azami: {
    name: 'Azami',
    role: 'defender',
    primary: {
      primary: {
        name: '9x19VSN',
        img: './assets/img/weapon/9x19VSN.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/ACS12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/D-50.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Impact Grenade',
        img: './assets/img/gadgets/Impact_Grenade.png',
      }
    }
  },
  Solis: {
    name: 'Solis',
    role: 'defender',
    primary: {
      primary: {
        name: 'P90',
        img: './assets/img/weapon/P90.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/ITA12L.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/weapon/SMG-11.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/gadgets/Impact_Grenade.png',
      },
      gadget2: {
        name: 'Bulletproof Camera',
        img: './assets/img/gadgets/Bulletproof_camera.png',
      }
    }
  },
  Fenrir: {
    name: 'Fenrir',
    role: 'defender',
    primary: {
      primary: {
        name: 'MP7',
        img: './assets/img/weapon/MP7.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Flash Hilder': { name: 'Flash Hilder' },
          'Compensator': { name: 'Compensator' },
          'Muzzle Brake': { name: 'Muzzle Brake' },
          'Suppressor': { name: 'Suppressor' },
          'Extended Barrel' : { name: 'Extended Barrel' },
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
        img: './assets/img/weapon/SASG-12.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
          'Suppressor': { name: 'Suppressor' },
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
        img: './assets/img/weapon/Bailiff_410.png',
        attachment: {
          'No Attachment': { name: 'No Attachment' },
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
        img: './assets/img/gadgets/Barbed_Wire.png',
      },
      gadget2: {
        name: 'Boletproof Camera',
        img: './assets/img/gadgets/Bulletproof_camera.png',
      }
    }
  }
}