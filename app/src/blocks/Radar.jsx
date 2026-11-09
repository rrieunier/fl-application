import {useEffect, useRef} from 'react';
import Chart from 'chart.js/auto';
import {MAX_SCORE} from '../model.js';

const token = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

function alpha(hex, a) {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${n >> 16}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

// Baseline vs computed 12-month target, one point per axis (in data order).
export default function Radar({axes}) {
    const canvas = useRef(null);
    const chart = useRef(null);

    useEffect(() => {
        const orange = token('--orange-brand'), grey = token('--orange-grey-dark');
        chart.current = new Chart(canvas.current, {
            type: 'radar',
            data: {
                labels: [],
                datasets: [
                    {label: 'Baseline (illustrative)', data: [], borderColor: grey, backgroundColor: alpha(grey, .15), pointBackgroundColor: grey},
                    {label: 'Target – 12 months', data: [], borderColor: orange, backgroundColor: alpha(orange, .3), pointBackgroundColor: orange, borderWidth: 3},
                ],
            },
            options: {
                maintainAspectRatio: false, animation: false,
                font: {family: token('--orange-font')},
                scales: {r: {min: 0, max: MAX_SCORE, ticks: {stepSize: 1, backdropColor: 'transparent'}, pointLabels: {font: {size: 16, weight: 'bold'}, color: token('--orange-white'), backdropPadding: {top: 4, bottom: 4, left: 8, right: 8}}}},
                plugins: {legend: {position: 'bottom', labels: {font: {size: 16}}}},
            },
        });
        return () => chart.current.destroy();
    }, []);

    useEffect(() => {
        const c = chart.current;
        c.data.labels = axes.map((a) => a.label);
        // each label is highlighted with its axis colour (same style as the vision cards)
        const colors = axes.map((a) => token(`--orange-${a.color ?? 'brand'}`));
        c.options.scales.r.pointLabels.backdropColor = (ctx) => colors[ctx.index];
        c.data.datasets[0].data = axes.map((a) => a.baseline);
        c.data.datasets[1].data = axes.map((a) => a.target);
        c.update();
    }, [axes]);

    return <div className="chart-box"><canvas ref={canvas}/></div>;
}
