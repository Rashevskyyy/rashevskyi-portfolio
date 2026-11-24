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

export default FjordPreview;
