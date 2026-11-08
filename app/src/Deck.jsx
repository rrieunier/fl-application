import {useContext, useEffect, useRef} from 'react';
import Reveal from 'reveal.js';
import {DeckContext} from './blocks/common.jsx';
import {AxisSlide, blocks} from './blocks/index.js';

const CONFIG = {hash: true, width: 1280, height: 720, margin: .06, transition: 'fade', slideNumber: 'c/t', controlsTutorial: false};

function renderSlide(slide, key, axes) {
    if (slide.type === 'stack') return <section key={key}>{slide.slides.map((s, i) => renderSlide(s, `${key}.${i}`, axes))}</section>;
    if (slide.type === 'axes') return axes.map((axis, i) => <AxisSlide key={`${key}.${axis.id}`} axis={axis} index={i}/>);
    const Block = blocks[slide.type];
    if (!Block) throw new Error(`Unknown slide type "${slide.type}" (see src/blocks/index.js)`);
    return <Block key={key} {...slide}/>;
}

export default function Deck({slides}) {
    const {axes} = useContext(DeckContext);
    const root = useRef(null);
    const deck = useRef(null);

    useEffect(() => {
        const reveal = new Reveal(root.current, CONFIG);
        reveal.initialize();
        deck.current = reveal;
        return () => {
            reveal.destroy();
            deck.current = null;
        };
    }, []);

    // after any re-render (e.g. hot reload of the data), let reveal.js pick up added/removed slides
    useEffect(() => {
        const reveal = deck.current;
        if (!reveal?.isReady()) return;
        const {h, v, f} = reveal.getIndices();
        reveal.sync();
        reveal.slide(h, v, f);
    });

    return (
        <div className="reveal" ref={root}>
            <div className="slides">{slides.map((s, i) => renderSlide(s, String(i), axes))}</div>
        </div>
    );
}
