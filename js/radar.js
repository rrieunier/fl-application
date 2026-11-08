// Radar chart — edit AXES / BASELINE / TARGET below. Colours are read from CSS tokens.
const AXES = ['Talent Acquisition', 'Talent Retention', 'Business Development', 'Operational Excellence', 'Faction Expertise'];
const BASELINE = [2, 2.5, 2, 2.5, 3];     // illustrative self-assessment (0–5)
const TARGET = [4, 4.5, 3.5, 4, 4.5];   // target at 12 months

function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function alpha(hex, a) {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${n >> 16}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

function buildRadar(canvasId) {
    const orange = token('--orange-brand'), grey = token('--orange-grey-dark');
    return new Chart(document.getElementById(canvasId), {
        type: 'radar',
        data: {
            labels: AXES, datasets: [
                {
                    label: 'Baseline (illustrative)',
                    data: BASELINE,
                    borderColor: grey,
                    backgroundColor: alpha(grey, .15),
                    pointBackgroundColor: grey
                },
                {
                    label: 'Target – 12 months',
                    data: TARGET,
                    borderColor: orange,
                    backgroundColor: alpha(orange, .3),
                    pointBackgroundColor: orange,
                    borderWidth: 3
                }
            ]
        },
        options: {
            maintainAspectRatio: false, animation: false,
            font: {family: token('--orange-font')},
            scales: {
                r: {
                    min: 0,
                    max: 5,
                    ticks: {stepSize: 1, backdropColor: 'transparent'},
                    pointLabels: {font: {size: 16, weight: 'bold'}}
                }
            },
            plugins: {legend: {position: 'bottom', labels: {font: {size: 16}}}}
        }
    });
}
