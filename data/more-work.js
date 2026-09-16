export const featured = {
    fjordfall: {
        id: 'fjordfall',
        kicker: 'Slot · Roguelike · Deckbuilder',
        title: 'Fjordfall',
        tagline: 'The jackpot you built yourself.',
        blurb: 'A northern slot-roguelike: one honest spin, a deck you draft, and a Valhalla bonus you stack on purpose. Vite, TypeScript, GSAP — the game logic has no DOM imports.',
        hint: 'Draft the horn, lock symbols, then bank or double. Daily runs share one seed, like Wordle for a slot machine.',
        repo: 'https://github.com/Rashevskyyy/fjordfall',
        stack: ['TypeScript', 'GSAP', 'Vite', 'Deterministic RNG'],
        glow: '#ffc34d',
        glowSoft: 'rgba(255, 195, 77, 0.28)',
    },
    fridge: {
        id: 'fridge',
        kicker: 'PWA · Product',
        title: 'Fridge',
        tagline: 'An app I actually open.',
        blurb: 'A phone PWA for what is in the fridge: expiry, scan, barcode, recipes, voice, shopping. IndexedDB offline, Cloudflare Worker for AI. Not a demo landing — a tool.',
        hint: 'Camera to the shelf, leftover matching, waste stats. Installs to the home screen.',
        repo: 'https://github.com/Rashevskyyy/fridge-web',
        stack: ['React', 'TypeScript', 'PWA', 'IndexedDB'],
        glow: '#7CFFB2',
        glowSoft: 'rgba(124, 255, 178, 0.22)',
        items: [
            {name: 'Milk', left: '2 days', cat: 'Dairy'},
            {name: 'Eggs', left: '5 days', cat: 'Fridge'},
            {name: 'Tomatoes', left: 'today', cat: 'Veg', warn: true},
            {name: 'Oat milk', left: '11 days', cat: 'Pantry'},
        ],
    },
};

export const lab = [
    {
        id: 'ruins-nexus',
        title: 'Ruins Nexus',
        tag: 'Multiplayer tactics',
        blurb: 'PixiJS v8 board game with races, rooms, Socket.io and a Node server. Not a tutorial clone — a full client/server loop.',
        stack: ['PixiJS v8', 'Socket.io', 'Supabase'],
        glow: '#00ddff',
        repo: 'https://github.com/Rashevskyyy/ruins-nexus',
    },
    {
        id: 'living-farm',
        title: 'Living Farm',
        tag: 'Simulation',
        blurb: 'A production-chain farm where the sim has zero Pixi imports. The renderer just reads state, so the core runs in Node.',
        stack: ['PixiJS v8', 'TypeScript', 'Fixed-step sim'],
        glow: '#9be564',
        repo: 'https://github.com/Rashevskyyy/living-farm',
    },
];
