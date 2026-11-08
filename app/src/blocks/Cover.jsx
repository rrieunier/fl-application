import {Html} from './common.jsx';

export default function Cover({tag, title, subtitle}) {
    return (
        <section className="cover" data-background-color="#000000">
            {tag && <span className="tag">{tag}</span>}
            <Html as="h1" html={title}/>
            {subtitle && <Html as="p" className="sub" html={subtitle}/>}
        </section>
    );
}
