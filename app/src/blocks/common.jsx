import {createContext, useContext} from 'react';

export const DeckContext = createContext({axes: [], navSteps: []});

// Renders a trusted HTML string from the data files (allows <b>, <em>, <br>…).
export function Html({as: Tag = 'span', html, ...rest}) {
    return <Tag {...rest} dangerouslySetInnerHTML={{__html: html}}/>;
}

export const colorVar = (color = 'brand') => `var(--orange-${color})`;

export function Nav({current}) {
    const {navSteps} = useContext(DeckContext);
    if (!current) return null;
    return (
        <nav className="w-nav">
            {navSteps.map((step) => <span key={step} className={step === current ? 'on' : undefined}>{step}</span>)}
        </nav>
    );
}

// Shared top of a content slide: nav strip or tag, then title.
export function Header({nav, tag, title}) {
    return (
        <>
            <Nav current={nav}/>
            {tag && <span className="tag">{tag}</span>}
            {title && <Html as="h2" html={title}/>}
        </>
    );
}

const COLS = {2: 'cols', 3: 'cols three', 4: 'cols four', 5: 'cols five'};
export const colsClass = (n) => COLS[n] ?? 'cols';
