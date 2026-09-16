import {useEffect, useRef, useState} from 'react';

const SCREEN_W = 390;
const SCREEN_H = 844;

const Preview = ({type}) => {
    if (type === 'neon') {
        return (
            <div className="phone-preview preview-neon" aria-hidden>
                <span /><span /><span /><span /><span />
            </div>
        );
    }
    if (type === 'gate') {
        return (
            <div className="phone-preview preview-gate" aria-hidden>
                <div className="preview-gate-sky" />
                <div className="preview-gate-road" />
            </div>
        );
    }
    return (
        <div className="phone-preview preview-jelly" aria-hidden>
            <span /><span /><span /><span />
        </div>
    );
};

const PlayablePhone = ({playable, live = false, interactive = false, compact = false, onActivate}) => {
    const screenRef = useRef(null);
    const aliveRef = useRef(true);
    const [scale, setScale] = useState(0.5);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        aliveRef.current = true;
        const screen = screenRef.current;
        if (!screen) return undefined;

        let frame = 0;
        const fit = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                if (!aliveRef.current || !screen.isConnected) return;
                const next = screen.clientWidth / SCREEN_W;
                if (!next) return;
                setScale((prev) => (Math.abs(prev - next) < 0.002 ? prev : next));
            });
        };

        fit();
        if (!live) {
            return () => {
                aliveRef.current = false;
                cancelAnimationFrame(frame);
            };
        }

        const observer = new ResizeObserver(fit);
        observer.observe(screen);
        return () => {
            aliveRef.current = false;
            cancelAnimationFrame(frame);
            observer.disconnect();
        };
    }, [live]);

    useEffect(() => {
        if (!live) setReady(false);
    }, [live, playable.id]);

    return (
        <div
            className={`phone ${compact ? 'phone-compact' : ''} ${live ? 'phone-live' : ''}`}
            style={{'--glow': playable.glow, '--glow-soft': playable.glowSoft}}
        >
            <div className="phone-bezel">
                <span className="phone-btn phone-btn-top" />
                <span className="phone-btn phone-btn-mid" />
                <span className="phone-btn phone-btn-side" />
                <div ref={screenRef} className="phone-screen" style={{background: playable.screen}}>
                    {(!live || !ready) && <Preview type={playable.preview} />}
                    {live && (
                        <iframe
                            key={playable.id}
                            src={playable.src}
                            title={playable.title}
                            allow="autoplay; fullscreen"
                            className={`phone-frame ${interactive ? 'is-interactive' : ''} ${ready ? 'is-ready' : ''}`}
                            style={{
                                width: SCREEN_W,
                                height: SCREEN_H,
                                transform: `scale(${scale})`,
                            }}
                            onLoad={() => {
                                if (aliveRef.current) setReady(true);
                            }}
                        />
                    )}
                    {live && !interactive && (
                        <button type="button" className="phone-play" onClick={onActivate}>
                            <span>Tap to play</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlayablePhone;
