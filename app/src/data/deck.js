// The deck, as an ordered list of parameterized blocks.
// Each entry is { type, ...props }; `type` picks a component in src/blocks/index.js.
// { type: 'stack', slides: [...] } groups slides vertically (down arrow in reveal.js).
// { type: 'axes' } expands to one slide per axis from data/axes.js.
// `nav` highlights a step of the top navigation strip (steps listed in `navSteps`).
// Strings may contain inline HTML.

export const navSteps = ['Who am I', 'My vision', 'The actions', 'The plan', 'Why me'];

export const slides = [{
    type: 'cover',
    tag: 'APPLICATION',
    title: 'Faction Lead<br><span>Data Ops Engineering</span>',
    subtitle: 'Data Chapter • Orange Business • Roman RIEUNIER',
}, {
    type: 'cards',
    nav: 'Who am I',
    title: 'Who am I',
    lead: 'Roman, for <b>Data Ops Engineering</b> faction lead.',
    cards: [{
        title: 'Me',
        items: [['Role', 'Senior data ops consultant'], ['Experience', '8y of Data Ops/Engineering, full stack'], ['Customers', 'Paradigm, Danone, Allianz Benelux'], ['Highlights', '1<sup>st</sup> Data Ops domain manager at Amaris'], ['Interests', 'coaching, recruiting, pre-sales'], ['Strengths', 'creative, honest, cold-blooded, responsible, hardworker'],],
    }, {
        title: 'The faction',
        dark: true,
        items: [['Profiles', 'Data, DevOps engineering + architecture'], ['Team', '10-15 consultants, balanced seniority'], ['Expectations', 'more impact, community, business perspectives'], ['I bring', 'similar experience, fresh ideas, inspiration, knowledge of the faction and other entities'],],
        impact: 'My goal: a faction of augmented engineers who are more conscious of their environment, grow fast and want to stay.',
    },],
}, {
    type: 'cards',
    nav: 'My vision',
    title: 'My vision',
    cards: [{
        title: 'Community',
        color: 'green',
        items: ['Introduce company culture', 'Build synergy within the faction', 'Make contact with OB']
    }, {
        title: 'Consultants',
        color: 'brand',
        items: ['Better and better AI usage', 'Engaged', 'Tailored challenges']
    }, {
        title: 'Business',
        color: 'blue',
        items: ['Connected to the tribes', 'Active contributor to RFP/I', 'Aware of the Orange ecosystem']
    },],
}, {
    type: 'stack', slides: [{
        type: 'axesOverview',
        nav: 'The actions',
        title: 'The actions',
        big: 'Listen first, then act, along <em>six subaxes</em>:', // display order of the list (radar keeps the order of data/axes.js); omit to use data order
        order: ['retention', 'acquisition', 'operations', 'business', 'expertise', 'community'],
    }, {type: 'axes'},],
}, {
    type: 'phases',
    nav: 'The plan',
    title: 'The plan',
    big: 'From <em>Jan 1<sup>st</sup> 2026</em>: a 6-months plan, then a 12-month target.', // compact: true,
    fragments: true,
    phases: [{
        title: 'Months 1–3',
        subtitle: 'Listen',
        color: 'brand',
        items: ['Review contracts', '1:1 with every consultant', 'Review ambitions', 'Launch expectations survey']
    }, {
        title: 'Months 3-5',
        subtitle: 'Diagnose',
        color: 'blue',
        items: ['Share findings back', 'Align on the team priorities', 'Gather Social Champion(s)', 'Draft joint faction strategy']
    }, {
        title: 'Months 5-6',
        subtitle: 'Launch',
        color: 'green',
        items: ['Set up new Faction Days', 'Reverse-buddying pilot (if applicable)', 'Informal roles assigned', 'Map skills &amp; staffing']
    }, {title: 'Month 12', subtitle: 'Measure against the target', color: 'purple'},],
}, {
    type: 'pitch',
    nav: 'Why me',
    title: 'Not a bet on potential only:<br>a lead who has <span>been leading</span>.',
    fragments: true,
    proofs: [{
        value: '4',
        label: 'values',
        text: 'Responsible, caring, bold and excellence-driven.'
    }, {
        value: '1<sup>st</sup>',
        label: 'Domain manager',
        text: 'First Data Ops domain manager at Amaris IS&amp;D: I\'ve led similar missions before.'
    }, {
        value: '3',
        label: 'Key accounts',
        text: 'Paradigm, Danone, Allianz Benelux: I know what customers expect.'
    }, {
        value: 'Day 1',
        label: 'Ready to lead',
        text: 'I already know the people, the faction and most other entities. No ramp-up.'
    },],
    punchline: 'The faction keeps a consultant who gets it, and gains a manager who knows how to lead with creativity.',
}, {
    type: 'stack', slides: [{
        type: 'cover',
        title: "Let's build an <span>augmented</span> faction.",
        subtitle: 'Thank you — questions &amp; discussion',
    },],
},];
