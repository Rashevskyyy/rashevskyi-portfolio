import {BsGithub} from 'react-icons/bs';
import {featured, lab} from '../data/more-work';

const FjordPreview = () => (
    <div className="fjord-preview" aria-hidden>
        <div className="fjord-preview-bar">
            <b>Fjordfall</b>
            <span>Daily seed</span>
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
        <div className="fridge-dock">
            <span className="is-live">Scan</span>
            <span>Cook</span>
            <span>Shop</span>
        </div>
    </div>
);

const LabPreview = ({id}) => {
    if (id === 'living-farm') {
        return (
            <div className="lab-preview lab-farm" aria-hidden>
                <span className="lab-sun" />
                <span className="lab-plot" />
                <span className="lab-plot" />
                <span className="lab-plot" />
            </div>
        );
    }

    return (
        <div className="lab-preview lab-ruins" aria-hidden>
            {Array.from({length: 12}).map((_, index) => (
                <span key={index} className={`lab-cell ${index === 4 || index === 7 ? 'is-unit' : ''}`} />
            ))}
        </div>
    );
};

const MoreWork = () => {
    const fjord = featured.fjordfall;
    const fridge = featured.fridge;

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
                        {fjord.repo && (
                            <a href={fjord.repo} target="_blank" rel="noreferrer" className="band-repo">
                                <BsGithub /> Source
                            </a>
                        )}
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
                        {fridge.repo && (
                            <a href={fridge.repo} target="_blank" rel="noreferrer" className="band-repo">
                                <BsGithub /> Source
                            </a>
                        )}
                    </div>
                </div>
            </section>

            <section className="band band-lab">
                <div className="container mx-auto">
                    <p className="band-index">04</p>
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
                                {item.repo && (
                                    <a href={item.repo} target="_blank" rel="noreferrer" className="band-repo">
                                        <BsGithub /> Source
                                    </a>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MoreWork;
