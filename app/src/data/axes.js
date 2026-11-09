// The five axes, each with its nested actions.
//
// - baseline: illustrative self-assessment today (0–5)
// - actions[].impact: { <axisId>: gain } — an action can raise any axis, not only its own.
//   The 12-month target of every axis = baseline + sum of all impacts on it (capped at 5),
//   so the radar chart and the axis slides update as soon as you edit this file.
// - actions[].flagship: shown as the highlighted card on the axis slide.
// - color: a token from css/tokens.css (brand, blue, green, purple, yellow, pink).
// Strings may contain inline HTML (<b>, <em>, <u>…).

export const axes = [{
    id: 'retention',
    label: 'Talent Retention',
    color: 'brand',
    baseline: 2,
    outcome: 'lower attrition, higher engagement, no wasted effort.',
    actions: [{
        title: 'Listen, anticipate, grow',
        text: 'Consultant survey first, then act only on what people really want; regular 1:1s focused on ambitions and a visible growth path.',
        flagship: true,
        impact: {retention: 1, operations: 0.5},
    }, {
        text: 'Unofficial internal roles for better workload repartition, ownership and career signal',
        impact: {retention: 0.5, operations: 0.5},
    },],
}, {
    id: 'acquisition',
    label: 'Talent Acquisition',
    color: 'brand',
    baseline: 3,
    outcome: 'fresh practices, a balanced seniority pyramid.',
    actions: [{
        title: 'AI-native junior pipeline',
        text: 'Recruit juniors who started their careers with AI tooling; pair each with a senior in a two-way exchange.',
        flagship: true,
        impact: {acquisition: 0.5},
    },],
}, {
    id: 'operations',
    label: 'Operational Excellence',
    color: 'blue',
    baseline: 1,
    outcome: 'FLs time optimized for leadership and delivery.',
    actions: [{
        title: 'Know contracts terms',
        flagship: true,
        text: 'To anticipate turnover, change mission requests, etc.',
        impact: {operations: 0.5},
    }, {
        text: 'Use Faction Days to track and share ambitions progress.',
        impact: {operations: 0.5},
    },],
}, {
    id: 'business',
    label: 'Business Development',
    color: 'blue',
    baseline: 2,
    outcome: 'Unlock business opportunities, responsibilize consultants.',
    actions: [{
        title: 'Faction as a pre-sales asset',
        text: 'Reconnect with the Tribes, skill map of the faction, RFIs and RFPs.',
        flagship: true,
        impact: {business: 0.5},
    }, {
        text: 'Watchlist of the Orange offer (Cloud Avenue, Live Intelligence)',
        impact: {business: 0.5, expertise: 0.5},
    }, {
        text: 'Publish a guide to business acquisition', impact: {business: 0.5},
    },],
}, {
    id: 'expertise',
    label: 'Faction Expertise',
    color: 'green',
    baseline: 3,
    outcome: 'State of the art practices, stronger offering.',
    actions: [{
        title: 'Coordinate with the AI adoption squad',
        flagship: true,
        text: 'Increase a smart and responsible usage of AI in our delivery and R&amp;D',
        impact: {expertise: 0.5},
    },],
}, {
    id: 'community',
    label: 'Community Management',
    color: 'green',
    baseline: 2,
    outcome: 'Sense of belonging, increased satisfaction and self-confidence.',
    actions: [{
        title: 'The learning loop',
        text: 'Juniors and mediors regularly present a tech or method — 15 minutes, turning into discussion.',
        flagship: true,
        impact: {community: 0.5},
    }, {
        text: 'Status updates on the ambitions at each Faction Day', impact: {community: 0.5},
    }, {
        text: 'Narrowed faction monthly meetings, with personal/mission updates', impact: {community: 0.5, retention: 0.5},
    }, {
        text: 'Join the OB Thirsty Thursdays', impact: {community: 0.5},
    },],
},];
