// Registry of slide blocks: the `type` of an entry in data/deck.js picks one of these.
import AxesOverview from './AxesOverview.jsx';
import Bullets from './Bullets.jsx';
import Cards from './Cards.jsx';
import Cover from './Cover.jsx';
import Phases from './Phases.jsx';

export {default as AxisSlide} from './AxisSlide.jsx';

export const blocks = {cover: Cover, cards: Cards, bullets: Bullets, phases: Phases, axesOverview: AxesOverview};
