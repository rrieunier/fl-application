import {Header, Html} from './common.jsx';

// items: strings, or [parent, ...children] for one nested level.
export default function Bullets({nav, tag, title, big, items, fragments, note}) {
    const cls = fragments ? 'fragment' : undefined;
    return (
        <section>
            <Header nav={nav} tag={tag} title={title}/>
            {big && <Html as="p" className="big" html={big}/>}
            <ul>
                {items.map((item, i) => Array.isArray(item)
                    ? (
                        <li key={i} className={cls}>
                            <Html html={item[0]}/>
                            <ul>{item.slice(1).map((child, j) => <Html as="li" key={j} html={child}/>)}</ul>
                        </li>
                    )
                    : <Html as="li" key={i} className={cls} html={item}/>)}
            </ul>
            {note && <Html as="p" className="muted" html={note}/>}
        </section>
    );
}
