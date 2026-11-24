import {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {AnimatePresence, motion} from 'framer-motion';
import {BsArrowClockwise, BsArrowRight, BsGithub, BsX} from 'react-icons/bs';
import {playables} from '../data/playables';
import PlayablePhone from './PlayablePhone';

const slotMotion = {
    left: {
        x: 'calc(-50% - 188px)',
        y: '-50%',
        scale: 0.72,
        rotateY: 28,
        zIndex: 10,
        filter: 'brightness(0.55)',
        opacity: 0.92,
    },
    right: {
        x: 'calc(-50% + 188px)',
        y: '-50%',
        scale: 0.72,
        rotateY: -28,
        zIndex: 10,
        filter: 'brightness(0.55)',
        opacity: 0.92,
    },
};

const slotFor = (index, selected, total) => {
    const rel = (index - selected + total) % total;
    if (rel === 0) return 'center';
    if (rel === 1) return 'right';
    return 'left';
};

const PlayableShowcase = () => {
    const [selected, setSelected] = useState(0);
    const [interactive, setInteractive] = useState(false);
    const [theater, setTheater] = useState(false);
    const [frameKey, setFrameKey] = useState(0);
    const [mounted, setMounted] = useState(false);
    const [desktop, setDesktop] = useState(null);
    const inViewRef = useRef(true);
    const current = playables[selected];

    const select = (index) => {
        if (index === selected) return;
        setSelected(index);
        setInteractive(false);
        setTheater(false);
        setFrameKey((key) => key + 1);
    };

    const openTheater = () => {
        setInteractive(true);
        setTheater(true);
    };

    const closeTheater = () => {
        setTheater(false);
        setInteractive(false);
    };

    const restart = () => {
        setFrameKey((key) => key + 1);
        setInteractive(true);
    };

    useEffect(() => {
        setMounted(true);
        const media = window.matchMedia('(min-width: 1200px)');
        const sync = () => setDesktop(media.matches);
        sync();
        media.addEventListener('change', sync);
        return () => media.removeEventListener('change', sync);
    }, []);

    useEffect(() => {
        const onKey = (event) => {
            if (event.key === 'Escape') {
                setTheater(false);
                setInteractive(false);
            }
            if (!inViewRef.current) return;
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                const delta = event.key === 'ArrowRight' ? 1 : -1;
                setSelected((current) => (current + delta + playables.length) % playables.length);
                setInteractive(false);
                setTheater(false);
                setFrameKey((key) => key + 1);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    useEffect(() => {
        const node = document.querySelector('.band-playables');
        if (!node) return undefined;
        const observer = new IntersectionObserver(
            ([entry]) => {
                inViewRef.current = entry.isIntersecting;
            },
            {threshold: 0.35},
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex flex-col xl:flex-row xl:items-center gap-x-10 gap-y-8">
            <div className="text-center xl:text-left xl:w-[34%] order-2 xl:order-1">
                <motion.h2
                    initial={{opacity: 0, y: 40}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="h2 xl:mt-0 mb-3"
                >
                    Playables <span className="text-accent">.</span>
                </motion.h2>
                <p className="mb-4 max-w-[420px] mx-auto xl:mx-0">
                    Thirty seconds to feel like a real game. One HTML file.
                    Pick a demo, it is already running.
                </p>
                <motion.div
                    key={current.id}
                    initial={{opacity: 1, y: 8}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.35}}
                >
                    <div className="flex items-center justify-center xl:justify-start gap-3 mb-2">
                        <span className="text-accent uppercase tracking-[0.22em] text-xs">{current.tag}</span>
                        <span className="text-white/30">/</span>
                        <span className="text-white/50 text-xs">{current.session}</span>
                        <span className="text-white/30">/</span>
                        <span className="text-white/50 text-xs">{current.size}</span>
                    </div>
                    <h3
                        className="text-2xl xl:text-3xl font-semibold mb-2"
                        style={{color: current.glow}}
                    >
                        {current.title}
                    </h3>
                    <p className="max-w-[420px] mx-auto xl:mx-0 mb-4">{current.blurb}</p>
                    <div className="flex flex-wrap justify-center xl:justify-start gap-2 mb-4">
                        {current.stack.map((item) => (
                            <span key={item} className="px-3 py-1 rounded-full border border-white/15 text-xs text-white/70">
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center xl:justify-start gap-3">
                        <button
                            type="button"
                            onClick={openTheater}
                            className="btn rounded-full border border-white/50 max-w-[190px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                        >
                            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                Play full
                            </span>
                            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                        </button>
                        <a
                            href={current.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="source-btn"
                            aria-label={`${current.title} source on GitHub`}
                        >
                            <BsGithub />
                            Source
                        </a>
                        <button
                            type="button"
                            onClick={restart}
                            className="h-[52px] px-4 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-all"
                            aria-label="Restart demo"
                        >
                            <BsArrowClockwise className="text-xl" />
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="w-full xl:w-[66%] order-1 xl:order-2 pb-6 xl:pb-0">
                {desktop === null && (
                    <div className="h-[420px] xl:h-[500px]" aria-hidden />
                )}

                {desktop === true && (
                <div
                    className="playable-stage-wrap"
                    style={{'--glow': current.glow, '--glow-soft': current.glowSoft}}
                >
                    <div className="playable-stage flex">
                        <div className="playable-glow" />
                        {playables.map((playable, index) => {
                            const slot = slotFor(index, selected, playables.length);
                            if (slot === 'center') return null;
                            return (
                                <motion.div
                                    key={playable.id}
                                    className="playable-slot is-side"
                                    variants={slotMotion}
                                    initial={false}
                                    animate={slot}
                                    transition={{type: 'spring', stiffness: 260, damping: 28}}
                                    onClick={() => select(index)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter' || event.key === ' ') {
                                            event.preventDefault();
                                            select(index);
                                        }
                                    }}
                                >
                                    <PlayablePhone playable={playable} />
                                </motion.div>
                            );
                        })}
                        <div className="playable-slot is-center">
                            <PlayablePhone
                                key={`${current.id}-${frameKey}`}
                                playable={current}
                                live={!theater}
                                interactive={interactive && !theater}
                                onActivate={openTheater}
                            />
                        </div>
                    </div>
                    <div className="playable-picks">
                        {playables.map((playable, index) => (
                            <button
                                key={playable.id}
                                type="button"
                                onClick={() => select(index)}
                                className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.18em] border transition-all duration-300 ${
                                    index === selected
                                        ? 'border-transparent font-semibold'
                                        : 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'
                                }`}
                                style={index === selected ? {background: playable.glow, color: '#131424'} : undefined}
                            >
                                {playable.title}
                            </button>
                        ))}
                    </div>
                </div>
                )}

                {desktop === false && (
                <div className="flex flex-col items-center">
                    {!theater && (
                        <PlayablePhone
                            key={`${current.id}-${frameKey}`}
                            playable={current}
                            live
                            interactive={interactive}
                            compact
                            onActivate={openTheater}
                        />
                    )}
                    <div className="flex flex-wrap justify-center gap-3 mt-4">
                        {playables.map((playable, index) => (
                            <button
                                key={playable.id}
                                type="button"
                                onClick={() => select(index)}
                                className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.18em] border transition-all duration-300 ${
                                    index === selected
                                        ? 'border-transparent font-semibold'
                                        : 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'
                                }`}
                                style={index === selected ? {background: playable.glow, color: '#131424'} : undefined}
                            >
                                {playable.title}
                            </button>
                        ))}
                    </div>
                </div>
                )}
            </div>

            {mounted && createPortal(
                <AnimatePresence>
                    {theater && (
                        <motion.div
                            className="playable-theater"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            onClick={closeTheater}
                        >
                            <button
                                type="button"
                                className="playable-theater-close"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    closeTheater();
                                }}
                                aria-label="Close playable"
                            >
                                <BsX />
                                Close
                            </button>
                            <div
                                className="playable-theater-phone"
                                onClick={(event) => event.stopPropagation()}
                            >
                                <PlayablePhone
                                    key={`theater-${current.id}-${frameKey}`}
                                    playable={current}
                                    live
                                    interactive
                                    compact={desktop === false}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body,
            )}
        </div>
    );
};

export default PlayableShowcase;
