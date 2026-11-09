import {Header, Html} from './common.jsx';

// Full-bleed black "why me" slide: headline, proof tiles ({value, label, text}), punchline.
export default function Pitch({nav, tag, title, proofs, punchline, fragments}) {
    const cls = fragments ? 'proof fragment' : 'proof';
    return (
        <section className="pitch" data-background-color="var(--orange-black)">
            <Header nav={nav} tag={tag} title={title}/>
            <div className="proofs">
                {proofs.map((p, i) => (
                    <div key={i} className={cls}>
                        <Html as="div" className="proof-value" html={p.value}/>
                        <Html as="div" className="proof-label" html={p.label}/>
                        {p.text && <Html as="p" html={p.text}/>}
                    </div>
                ))}
            </div>
            {punchline && <Html as="p" className={fragments ? 'punchline fragment' : 'punchline'} html={punchline}/>}
        </section>
    );
}
