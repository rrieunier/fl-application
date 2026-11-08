import {useMemo} from 'react';
import Deck from './Deck.jsx';
import {DeckContext} from './blocks/common.jsx';
import {axes} from './data/axes.js';
import {navSteps, slides} from './data/deck.js';
import {scoreAxes} from './model.js';

export default function App() {
    const scored = useMemo(() => scoreAxes(axes), [axes]);
    return (
        <DeckContext.Provider value={{axes: scored, navSteps}}>
            <img alt="Orange Business" className="brand-logo"
                 src="https://brand.orange.com/themes/custom/slimline/assets/images/logos/Master_Logo_RGB.png"/>
            <div className="brand-bar"/>
            <Deck slides={slides}/>
        </DeckContext.Provider>
    );
}
