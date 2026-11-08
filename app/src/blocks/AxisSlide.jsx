import {useContext} from 'react';
import {fmt} from '../model.js';
import {colorVar, DeckContext, Html} from './common.jsx';

export function Score({axis}) {
    return <span className="score">{fmt(axis.baseline)} → <b>{fmt(axis.target)}</b></span>;
}

// "+0.5 Talent Retention" chips for each axis an action raises.
function Impacts({impact}) {
    const {axes} = useContext(DeckContext);
    return Object.entries(impact ?? {}).map(([id, gain]) => {
        const axis = axes.find((a) => a.id === id);
        return <span key={id} className="chip" style={{borderColor: colorVar(axis?.color)}}>+{fmt(gain)} {axis?.label ?? id}</span>;
    });
}

// Generated for each axis of data/axes.js by the { type: 'axes' } block.
export default function AxisSlide({axis, index}) {
    const flagship = axis.actions.find((a) => a.flagship);
    const others = axis.actions.filter((a) => a !== flagship);
    const fromOthers = axis.contributions.filter((c) => c.from.id !== axis.id);
    return (
        <section className="axis-slide" style={{'--axis-color': colorVar(axis.color)}}>
            <span className="tag">AXIS {index + 1}</span>
            <h2>{axis.label} <Score axis={axis}/></h2>
            {flagship && (
                <div className="card">
                    <b>Flagship: <Html html={flagship.title}/>.</b> <Html html={flagship.text}/> <Impacts impact={flagship.impact}/>
                </div>
            )}
            <ul style={{fontSize: '.85em'}}>
                {others.map((action, i) => <li key={i}><Html html={action.text}/> <Impacts impact={action.impact}/></li>)}
            </ul>
            {fromOthers.length > 0 && (
                <p className="muted">
                    Also raised by: {fromOthers.map((c, i) => <span key={i}>{i > 0 && ' • '}<Html html={c.action.title ?? c.action.text}/> ({c.from.label}, +{fmt(c.gain)})</span>)}
                </p>
            )}
            <div className="impact">Impact: <Html html={axis.outcome}/></div>
        </section>
    );
}
