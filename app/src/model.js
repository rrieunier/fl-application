// Derives scores from the axes/actions data. Pure functions, no React.
export const MAX_SCORE = 5;

const round = (n) => Math.round(n * 100) / 100;

// Returns one entry per axis: { ...axis, gain, target, contributions }
// where contributions lists every action (from any axis) that raises this axis.
export function scoreAxes(axes) {
    const known = new Set(axes.map((a) => a.id));
    for (const axis of axes) {
        for (const action of axis.actions) {
            for (const id of Object.keys(action.impact ?? {})) {
                if (!known.has(id)) console.warn(`Unknown axis "${id}" in impact of an action under "${axis.id}"`);
            }
        }
    }
    return axes.map((axis) => {
        const contributions = axes.flatMap((from) =>
            from.actions
                .filter((action) => action.impact?.[axis.id])
                .map((action) => ({action, from, gain: action.impact[axis.id]})),
        );
        const gain = round(contributions.reduce((sum, c) => sum + c.gain, 0));
        return {...axis, gain, target: Math.min(MAX_SCORE, round(axis.baseline + gain)), contributions};
    });
}

export const fmt = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(1).replace(/\.0$/, ''));
