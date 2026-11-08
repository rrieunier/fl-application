// The five axes, each with its nested actions.
//
// - baseline: illustrative self-assessment today (0–5)
// - actions[].impact: { <axisId>: gain } — an action can raise any axis, not only its own.
//   The 12-month target of every axis = baseline + sum of all impacts on it (capped at 5),
//   so the radar chart and the axis slides update as soon as you edit this file.
// - actions[].flagship: shown as the highlighted card on the axis slide.
// - color: a token from css/tokens.css (brand, blue, green, purple, yellow, pink).
// Strings may contain inline HTML (<b>, <em>, <u>…).

export const axes = [
    {
        id: 'acquisition',
        label: 'Talent Acquisition',
        color: 'brand',
        baseline: 2,
        outcome: 'faster ramp-up, fresh practices, a balanced seniority pyramid.',
        actions: [
            {
                title: 'AI-native junior pipeline',
                text: 'Recruit juniors who started their careers with AI tooling; pair each with a senior in a two-way exchange.',
                flagship: true,
                impact: {acquisition: 0.5},
            },
            {
                text: 'Redesign buddying as <b>reverse-mentoring</b>: AI workflows ↔ domain &amp; technical knowledge',
                impact: {acquisition: 0.5},
            },
            {
                text: 'Referral loop: consultants become the first recruiting channel',
                impact: {acquisition: 0.5},
            },
        ],
    },
    {
        id: 'retention',
        label: 'Talent Retention',
        color: 'blue',
        baseline: 2.5,
        outcome: 'lower attrition, higher engagement, no wasted effort.',
        actions: [
            {
                title: 'Listen, anticipate, grow',
                text: 'Consultant survey first, then act only on what people really want; regular 1:1s focused on ambitions and a visible growth path.',
                flagship: true,
                impact: {retention: 0.5},
            },
            {
                text: 'Know contract terms to <b>anticipate requests</b> (raises, evolutions, mobility) before they become resignations',
                impact: {retention: 0.5},
            },
            {
                text: 'Unofficial roles for mediors/seniors = ownership and career signal',
                impact: {retention: 0.5},
            },
        ],
    },
    {
        id: 'business',
        label: 'Business Development',
        color: 'green',
        baseline: 2,
        outcome: 'faster, sharper proposals; better staffing fit; growth aligned with the market.',
        actions: [
            {
                title: 'Faction as a pre-sales asset',
                text: 'Skill map of the faction, ready for staffing requests, RFIs and RFPs.',
                flagship: true,
                impact: {business: 0.5},
            },
            {
                text: "Reusable offer &amp; reference sheets built from consultants' missions",
                impact: {business: 0.5},
            },
            {
                text: 'Consultants invited into client conversations and solution design',
                impact: {business: 0.5},
            },
            {
                text: 'Close the loop with sales on pipeline vs. skills to develop',
                impact: {acquisition: 0.5},
            },
        ],
    },
    {
        id: 'operations',
        label: 'Operational Excellence',
        color: 'purple',
        baseline: 2.5,
        outcome: 'less bench time and overload, my time freed for leadership and delivery.',
        actions: [
            {
                title: 'Workload &amp; staffing cockpit',
                text: 'Use Faction Lead meetings to balance load and match skills to ambitions; shared view of availability, upcoming ends of mission and ambitions.',
                flagship: true,
                impact: {operations: 0.5},
            },
            {
                text: 'Delegate initiatives (ambition follow-up, internal workshops, knowledge manager link) to mediors/seniors',
                impact: {operations: 0.5},
            },
            {
                text: 'Light rituals: fewer, better follow-ups',
                impact: {operations: 0.5},
            },
        ],
    },
    {
        id: 'expertise',
        label: 'Faction Expertise',
        color: 'yellow',
        baseline: 3,
        outcome: 'shared technical level, visible expertise, stronger offering.',
        actions: [
            {
                title: 'The learning loop',
                text: 'Juniors and mediors regularly present a tech or method — 15 minutes, turning into discussion.',
                flagship: true,
                impact: {expertise: 0.5},
            },
            {
                text: 'Topics driven by the strategy: Databricks, Snowflake, Terraform, Airflow, K8s, AI-assisted engineering',
                impact: {expertise: 0.5},
            },
            {
                text: 'Presentation skills grow as a by-product',
                impact: {retention: 0.5},
            },
            {
                text: 'Field experience fed back into the offering',
                impact: {expertise: 0.5},
            },
        ],
    },
];
