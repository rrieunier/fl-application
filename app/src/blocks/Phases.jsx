import {colorVar, colsClass, Header, Html} from './common.jsx';

// compact: title + one line per phase; otherwise title, subtitle and a bullet list.
export default function Phases({nav, tag, title, big, phases, compact, fragments, note}) {
    return (
        <section>
            <Header nav={nav} tag={tag} title={title}/>
            {big && <Html as="p" className="big" html={big}/>}
            <div className={colsClass(phases.length)}>
                {phases.map((p, i) => (
                    <div key={i} className={fragments ? 'phase fragment' : 'phase'} style={{borderColor: colorVar(p.color)}}>
                        {compact
                            ? <><Html as="h3" html={p.title}/><Html html={p.subtitle}/></>
                            : <Html as="h3" html={`${p.title}<br>${p.subtitle}`}/>}
                        {p.items && <ul>{p.items.map((item, j) => <Html as="li" key={j} html={item}/>)}</ul>}
                    </div>
                ))}
            </div>
            {note && <Html as="p" className="muted" html={note}/>}
        </section>
    );
}
