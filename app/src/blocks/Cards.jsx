import {colorVar, colsClass, Header, Html} from './common.jsx';

// `color` (a token: brand, blue, green…) highlights the title with that background and emphasises the first item.
// A card shows either `items` (bullets; [label, text] pairs get a bold label) or `lines` (line breaks).
function Card({title, dark, color, items, lines, impact}) {
    return (
        <div className={dark ? 'card dark' : 'card'} style={color ? {'--highlight-color': colorVar(color)} : undefined}>
            {title && <p><Html as="b" className={color ? 'highlight' : undefined} html={title}/></p>}
            {items && (
                <ul>
                    {items.map((item, i) => Array.isArray(item)
                        ? <li key={i}><b>{item[0]}</b> <Html html={item[1]}/></li>
                        : <Html as="li" key={i} html={item}
                            className={color && i === 0 ? 'lead' : undefined}/>)}
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
            {lead && <Html as="p" style={{margin: "0 0 .5em"}} html={lead}/>}
            <div className={colsClass(cards.length)}>
                {cards.map((card, i) => <Card key={i} {...card}/>)}
            </div>
            {footer && <Html as="p" html={footer}/>}
        </section>
    );
}
