import {useContext} from 'react';
import {DeckContext, Header, Html} from './common.jsx';
import {Score} from './AxisSlide.jsx';
import Radar from './Radar.jsx';

export default function AxesOverview({nav, tag, title, big, order}) {
    const {axes} = useContext(DeckContext);
    const listed = order ? order.map((id) => axes.find((a) => a.id === id)).filter(Boolean) : axes;
    return (
        <section>
            <Header nav={nav} tag={tag} title={title}/>
            <div className="cols">
                <div>
                    {big && <Html as="p" className="big" html={big}/>}
                    <ul className="axis-list">
                        {listed.map((axis) => <li key={axis.id}>{axis.label} <Score axis={axis}/></li>)}
                    </ul>
                </div>
                <Radar axes={axes}/>
            </div>
        </section>
    );
}
