import {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {AnimatePresence, motion} from 'framer-motion';
import {BsArrowRight, BsBoxArrowUpRight, BsGithub, BsX} from 'react-icons/bs';
import {slots} from '../data/slots';
import FjordPreview from './FjordPreview';

// The cabinet: a muted video loop of the real game, or a mock for slots without a demo yet.
const Cabinet = ({slot, onPlay, reducedMotion}) => {
    if (slot.preview === 'fjord') {
        return (
            <div className="slot-cabinet is-mock">
                <FjordPreview />
            </div>
        );
    }
    return (
        <button
            type="button"
            className="slot-cabinet"
            onClick={onPlay}
            aria-label={`Play ${slot.title}`}
        >
            <span className="slot-cabinet-screen">
                <video
                    key={slot.id}
                    src={slot.video}
                    poster={slot.poster}
                    autoPlay={!reducedMotion}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden
                />
            </span>
            <span className="slot-cabinet-base">
                <span className="slot-cabinet-play">
                    Play the demo
                    <BsArrowRight />
                </span>
                <span className="slot-cabinet-note">Runs in the browser, desktop or phone</span>
            </span>
        </button>
    );
};

const SlotShowcase = () => {
    const [selected, setSelected] = useState(0);
    const [theater, setTheater] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);
    const current = slots[selected];

    useEffect(() => {
        setMounted(true);
        const media = window.matchMedia('(prefers-reduced-motion: reduce)');
        const sync = () => setReducedMotion(media.matches);
        sync();
        media.addEventListener('change', sync);
        return () => media.removeEventListener('change', sync);
    }, []);

    useEffect(() => {
        if (!theater) return undefined;
        const onKey = (event) => {
            if (event.key === 'Escape') setTheater(false);
        };
        window.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [theater]);

    const select = (index) => {
        setSelected(index);
        setTheater(false);
    };

    return (
        <div className="flex flex-col xl:flex-row xl:items-center gap-x-10 gap-y-8">
            <div className="text-center xl:text-left xl:w-[40%] order-2 xl:order-1">
                <motion.h2
                    initial={{opacity: 0, y: 40}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="h2 xl:mt-0 mb-3"
                >
                    Slots <span className="text-accent">.</span>
                </motion.h2>
                <p className="mb-6 max-w-[440px] mx-auto xl:mx-0">
                    Reels, bonuses, the math and the server behind them. Three released at GOREEL, these are my own.
                </p>
                <motion.div
                    key={current.id}
                    initial={{opacity: 0, y: 8}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.35}}
                >
                    <p className="band-kicker" style={{color: current.glow}}>{current.kicker}</p>
                    <h3 className="text-2xl xl:text-3xl font-semibold mb-2" style={{color: current.glow}}>
                        {current.title}
                    </h3>
                    <p className="band-tagline">{current.tagline}</p>
                    <p className="max-w-[440px] mx-auto xl:mx-0 mb-3">{current.blurb}</p>
                    <p className="text-sm text-white/45 max-w-[440px] mx-auto xl:mx-0 mb-5">{current.hint}</p>
                    <ul className="band-tags justify-center xl:justify-start mb-6">
                        {current.stack.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <div className="flex flex-wrap items-center justify-center xl:justify-start gap-3">
                        {current.play && (
                            <button
                                type="button"
                                onClick={() => setTheater(true)}
                                className="btn rounded-full border border-white/50 max-w-[190px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                            >
                                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                    Play
                                </span>
                                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                            </button>
                        )}
                        {current.caseStudy && (
                            <a href={current.caseStudy} target="_blank" rel="noreferrer" className="source-btn">
                                <BsBoxArrowUpRight />
                                Case study
                            </a>
                        )}
                        {current.repo && (
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
                        )}
                    </div>
                </motion.div>
            </div>

            <div className="w-full xl:w-[60%] order-1 xl:order-2">
                <div className="slot-stage" style={{'--glow': current.glow, '--glow-soft': current.glowSoft}}>
                    <Cabinet slot={current} onPlay={() => setTheater(true)} reducedMotion={reducedMotion} />
                </div>
                {slots.length > 1 && (
                    <div className="flex flex-wrap justify-center gap-3 mt-6">
                        {slots.map((slot, index) => (
                            <button
                                key={slot.id}
                                type="button"
                                onClick={() => select(index)}
                                aria-pressed={index === selected}
                                className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.18em] border transition-all duration-300 ${
                                    index === selected
                                        ? 'border-transparent font-semibold'
                                        : 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'
                                }`}
                                style={index === selected ? {background: slot.glow, color: '#131424'} : undefined}
                            >
                                {slot.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {mounted && createPortal(
                <AnimatePresence>
                    {theater && current.play && (
                        <motion.div
                            className="playable-theater slot-theater"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            onClick={() => setTheater(false)}
                        >
                            <button
                                type="button"
                                className="playable-theater-close"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    setTheater(false);
                                }}
                                aria-label={`Close ${current.title}`}
                            >
                                <BsX />
                                Close
                            </button>
                            <div className="slot-theater-frame" onClick={(event) => event.stopPropagation()}>
                                <iframe
                                    src={current.play}
                                    title={current.title}
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
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

export default SlotShowcase;
