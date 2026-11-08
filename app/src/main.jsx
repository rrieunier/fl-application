import {createRoot} from 'react-dom/client';
import 'reveal.js/reset.css';
import 'reveal.js/reveal.css';
import '../../css/tokens.css';
import '../../css/theme.css';
import './app.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(<App/>);
