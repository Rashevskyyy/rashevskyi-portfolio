// Slots on the Work page. Add a new game by appending an entry:
// `play` opens the live demo in the theater, `video`/`poster` fill the cabinet,
// `preview: 'fjord'` uses a built-in mock instead of a video.
const ABYSSAL = 'https://rashevskyyy.github.io/abyssal-tide';

export const slots = [
    {
        id: 'abyssal-tide',
        title: 'Abyssal Tide',
        kicker: 'Slot · Hold & Win · 5×3, 25 lines',
        tagline: 'Salvage from the sea floor, printed like a cyanotype.',
        blurb: 'Built end to end from my own design doc: Free Dives, a Hold & Win with black pearls and sealed shells, and three jars that fill as you spin. The math is simulated over 5 million rounds, and the same rules engine runs in the browser and on a Fastify + PostgreSQL server.',
        hint: 'Hit Play and spin, or open Menu → Show bonus to jump straight into a Salvage with all three jars full.',
        play: `${ABYSSAL}/play/index.html`,
        caseStudy: `${ABYSSAL}/`,
        repo: 'https://github.com/Rashevskyyy/abyssal-tide',
        video: `${ABYSSAL}/media/abyssal-tide.mp4`,
        poster: `${ABYSSAL}/media/big-win.jpg`,
        stack: ['PixiJS v8', 'GSAP', 'Spine', 'TypeScript', 'Fastify', 'PostgreSQL'],
        glow: '#8fb8ff',
        glowSoft: 'rgba(80, 140, 255, 0.28)',
    },
    {
        id: 'fjordfall',
        title: 'Fjordfall',
        kicker: 'Slot · Roguelike · Deckbuilder',
        tagline: 'Build the jackpot as you go.',
        blurb: 'A northern slot where you draft the jackpot. Spin once, then bank it or push your luck. The game core never touches the DOM.',
        hint: 'Draft the horn, lock symbols, bank or double. Daily runs share one seed, like Wordle.',
        repo: 'https://github.com/Rashevskyyy/fjordfall',
        preview: 'fjord',
        stack: ['TypeScript', 'GSAP', 'Vite', 'Deterministic RNG'],
        glow: '#ffc34d',
        glowSoft: 'rgba(255, 195, 77, 0.28)',
    },
];
