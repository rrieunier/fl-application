import {colsClass, Header, Html} from './common.jsx';

// A card shows either `items` (bullets; [label, text] pairs get a bold label) or `lines` (line breaks).
function Card({title, dark, items, lines, impact}) {
    return (
        <div className={dark ? 'card dark' : 'card'}>
            {title && <p><Html as="b" html={title}/></p>}
            {items && (
                <ul>
                    {items.map((item, i) => Array.isArray(item)
                        ? <li key={i}><b>{item[0]}</b> <Html html={item[1]}/></li>
                        : <Html as="li" key={i} html={item}/>)}
                </ul>
            )}
            {lines && <Html as="p" html={lines.join('<br>')}/>}
            {impact && <Html className="impact" as="div" html={impact}/>}
        </div>
    );
}

export default function Cards({nav, tag, title, big, lead, cards, footer}) {
    return (
        <section>
            <Header nav={nav} tag={tag} title={title}/>
            {big && <Html as="p" className="big" html={big}/>}
            {lead && <Html as="p" html={lead}/>}
            <div className={colsClass(cards.length)}>
                {cards.map((card, i) => <Card key={i} {...card}/>)}
            </div>
            {footer && <Html as="p" html={footer}/>}
        </section>
    );
}
