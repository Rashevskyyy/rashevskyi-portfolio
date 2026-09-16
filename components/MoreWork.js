import {BsGithub, BsTelegram} from 'react-icons/bs';
import {featured, lab} from '../data/more-work';

const SourceLink = ({href, label}) => (
    <a href={href} target="_blank" rel="noreferrer" className="source-btn">
        <BsGithub />
        Source
        <span className="sr-only">{label}</span>
    </a>
);

const LiveLink = ({href, label}) => (
    <a href={href} target="_blank" rel="noreferrer" className="source-btn">
        <BsTelegram />
        Open bot
        <span className="sr-only">{label}</span>
    </a>
);

const FjordPreview = () => (
    <div className="fjord-preview" aria-hidden>
        <div className="fjord-preview-bar">
            <b>Fjordfall</b>
            <span>Daily seed · 124 gold</span>
        </div>
        <div className="fjord-reels">
            {['⚡', '🪓', '🐺', '📯', '💰'].map((symbol, index) => (
                <div key={symbol} className="fjord-reel">
                    <div className="fjord-reel-strip" style={{animationDelay: `${index * -0.35}s`}}>
                        <span>⚡</span><span>🪓</span><span>🐺</span><span>📯</span><span>💰</span>
                        <span>⚡</span><span>🪓</span><span>🐺</span><span>📯</span><span>💰</span>
                    </div>
                </div>
            ))}
        </div>
        <div className="fjord-buildings">
            <article className="is-hero">
                <i>⚔️</i>
                <div>
                    <strong>Great Hall</strong>
                    <em>Raid</em>
                </div>
            </article>
            <article>
                <i>⚡</i>
                <div>
                    <strong>Berserker Hall</strong>
                    <em>Clan</em>
                </div>
            </article>
            <article>
                <i>🐍</i>
                <div>
                    <strong>Serpent Altar</strong>
                    <em>Boss</em>
                </div>
            </article>
        </div>
        <p className="demo-caption">Spin, draft, raid Valhalla</p>
        <div className="fjord-spin">Spin</div>
    </div>
);

const FridgeMock = () => (
    <div className="fridge-shell" aria-hidden>
        <span className="fridge-scan" />
        <div className="fridge-chrome">
            <span className="fridge-dot" />
            <strong>Fridge</strong>
            <span className="fridge-clock">12:41</span>
        </div>
        <div className="fridge-camera">
            <span className="fridge-barcode" />
            <em>Scan shelf</em>
        </div>
        <ul className="fridge-list">
            {featured.fridge.items.map((item, index) => (
                <li
                    key={item.name}
                    className={item.warn ? 'is-warn' : ''}
                    style={{animationDelay: `${index * 0.18}s`}}
                >
                    <div>
                        <b>{item.name}</b>
                        <em>{item.cat}</em>
                    </div>
                    <span>{item.left}</span>
                </li>
            ))}
        </ul>
        <p className="demo-caption">Scan the shelf, cook what's left</p>
        <div className="fridge-dock">
            <span className="is-live">Scan</span>
            <span>Cook</span>
            <span>Shop</span>
        </div>
    </div>
);

const RuinsPreview = () => (
    <div className="lab-preview lab-ruins" aria-hidden>
        <div className="lab-hud">
            <b>Ruins Nexus</b>
            <span>Round 3 · Explore</span>
        </div>
        <div className="hex-map">
            <div className="hex-row is-shift">
                <span className="hex is-start">🧬</span>
                <span className="hex is-fog">?</span>
            </div>
            <div className="hex-row">
                <span className="hex is-res"><i /></span>
                <span className="hex is-hub">◆</span>
                <span className="hex is-hunt">☠</span>
            </div>
            <div className="hex-row is-shift">
                <span className="hex is-fog">?</span>
                <span className="hex is-start">🔨</span>
            </div>
        </div>
        <div className="ruins-res">
            <span>🌿 4</span>
            <span>🧱 2</span>
            <span>🔷 1</span>
        </div>
        <p className="demo-caption">Explore, fight, gather</p>
    </div>
);

const FarmPreview = () => (
    <div className="lab-preview lab-farm" aria-hidden>
        <div className="lab-hud">
            <b>Living Farm</b>
            <span>Day 12</span>
        </div>
        <span className="lab-sun" />
        <div className="farm-field">
            <span className="lab-plot">🌱</span>
            <span className="lab-plot">🌾</span>
            <span className="lab-plot">🐄</span>
            <span className="farm-crate">📦</span>
        </div>
        <div className="farm-stats">
            <span>Wheat 18</span>
            <span>Milk 6</span>
            <span>Gold 42</span>
        </div>
        <p className="demo-caption">No Pixi in the sim</p>
    </div>
);

const GourmetPreview = () => (
    <div className="gourmet-shell" aria-hidden>
        <div className="gourmet-bar">
            <b>Gourmet</b>
            <span>Mini app</span>
        </div>
        <ul className="gourmet-list">
            {featured.gourmet.books.map((book, index) => (
                <li
                    key={book.title}
                    className={book.status === 'busy' ? 'is-out' : ''}
                    style={{animationDelay: `${index * 0.18}s`, '--cover': book.color}}
                >
                    <i />
                    <div>
                        <b>{book.title}</b>
                        <em>{book.author}</em>
                    </div>
                    <span>{book.status === 'busy' ? 'Out' : 'Free'}</span>
                </li>
            ))}
        </ul>
        <p className="demo-caption">Pass a book, tap when it is back</p>
        <div className="gourmet-ask">Ask in chat</div>
    </div>
);

const LabPreview = ({id}) => (id === 'living-farm' ? <FarmPreview /> : <RuinsPreview />);

const MoreWork = () => {
    const fjord = featured.fjordfall;
    const fridge = featured.fridge;
    const gourmet = featured.gourmet;

    return (
        <div className="more-work">
            <section className="band band-fjord">
                <div className="container mx-auto band-grid">
                    <div>
                        <p className="band-index">02</p>
                        <p className="band-kicker" style={{color: fjord.glow}}>{fjord.kicker}</p>
                        <h3 className="band-title" style={{color: fjord.glow}}>{fjord.title}</h3>
                        <p className="band-tagline">{fjord.tagline}</p>
                        <p className="mb-4">{fjord.blurb}</p>
                        <p className="text-sm text-white/45 mb-6">{fjord.hint}</p>
                        <ul className="band-tags">
                            {fjord.stack.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                        {fjord.repo && <SourceLink href={fjord.repo} label="Fjordfall source on GitHub" />}
                    </div>
                    <FjordPreview />
                </div>
            </section>

            <section className="band band-fridge">
                <div className="container mx-auto band-grid band-grid-flip">
                    <FridgeMock />
                    <div>
                        <p className="band-index">03</p>
                        <p className="band-kicker" style={{color: fridge.glow}}>{fridge.kicker}</p>
                        <h3 className="band-title" style={{color: fridge.glow}}>{fridge.title}</h3>
                        <p className="band-tagline">{fridge.tagline}</p>
                        <p className="mb-4">{fridge.blurb}</p>
                        <p className="text-sm text-white/45 mb-6">{fridge.hint}</p>
                        <ul className="band-tags">
                            {fridge.stack.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                        {fridge.repo && <SourceLink href={fridge.repo} label="Fridge source on GitHub" />}
                    </div>
                </div>
            </section>

            <section className="band band-gourmet">
                <div className="container mx-auto band-grid">
                    <div>
                        <p className="band-index">04</p>
                        <p className="band-kicker" style={{color: gourmet.glow}}>{gourmet.kicker}</p>
                        <h3 className="band-title" style={{color: gourmet.glow}}>{gourmet.title}</h3>
                        <p className="band-tagline">{gourmet.tagline}</p>
                        <p className="mb-4">{gourmet.blurb}</p>
                        <p className="text-sm text-white/45 mb-6">{gourmet.hint}</p>
                        <ul className="band-tags">
                            {gourmet.stack.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                        <div className="band-actions">
                            {gourmet.live && <LiveLink href={gourmet.live} label="Open Gourmet on Telegram" />}
                            {gourmet.repo && <SourceLink href={gourmet.repo} label="Gourmet source on GitHub" />}
                        </div>
                    </div>
                    <GourmetPreview />
                </div>
            </section>

            <section className="band band-lab">
                <div className="container mx-auto">
                    <p className="band-index">05</p>
                    <h3 className="band-title mb-8">Lab <span className="text-white/30">.</span></h3>
                    <div className="lab-grid">
                        {lab.map((item) => (
                            <article key={item.id} className="lab-card" style={{'--glow': item.glow}}>
                                <LabPreview id={item.id} />
                                <p className="band-kicker" style={{color: item.glow}}>{item.tag}</p>
                                <h4>{item.title}</h4>
                                <p>{item.blurb}</p>
                                <ul className="band-tags">
                                    {item.stack.map((tag) => <li key={tag}>{tag}</li>)}
                                </ul>
                                {item.repo && <SourceLink href={item.repo} label={`${item.title} source on GitHub`} />}
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MoreWork;
