// The deck, as an ordered list of parameterized blocks.
// Each entry is { type, ...props }; `type` picks a component in src/blocks/index.js.
// { type: 'stack', slides: [...] } groups slides vertically (down arrow in reveal.js).
// { type: 'axes' } expands to one slide per axis from data/axes.js.
// `nav` highlights a step of the top navigation strip (steps listed in `navSteps`).
// Strings may contain inline HTML.

export const navSteps = ['Who am I', 'My vision', 'The actions', 'The plan'];

export const slides = [
    {
        type: 'cover',
        tag: 'APPLICATION',
        title: 'Faction Lead<br><span>Data Ops Engineering</span>',
        subtitle: 'Data Chapter • Orange Business • Roman RIEUNIER',
    },
    {
        type: 'cards',
        nav: 'Who am I',
        title: 'Who am I',
        big: 'Roman RIEUNIER,',
        lead: 'for <em>Data Ops Engineering</em> faction lead.',
        cards: [
            {
                title: 'Me',
                items: [
                    ['Role', 'Senior data ops consultant'],
                    ['Experience', '8y of Data Ops/Engineering, full stack'],
                    ['Customers', 'Paradigm, Danone, Allianz Benelux'],
                    ['Highlights', '1<sup>st</sup> Data Ops domain manager at Amaris'],
                    ['Interests', 'coaching, recruiting, pre-sales'],
                    ['Strengths', 'creative, honest, cold-blooded, responsible, hardworker'],
                ],
            },
            {
                title: 'The faction',
                dark: true,
                items: [
                    ['Profiles', 'Data, DevOps engineering + architecture'],
                    ['Team', '10-15 consultants, balanced seniority'],
                    ['Expectations', 'more impact, community, business perspectives'],
                    ['I bring', 'similar experience, fresh ideas, inspiration, knowledge of the faction and other entities'],
                ],
                impact: 'My goal: a faction of augmented engineers who are more conscious of their environment, grow fast and want to stay.',
            },
        ],
    },
    {
        type: 'cards',
        nav: 'My vision',
        title: 'My vision',
        cards: [
            {title: 'Community', items: ['<u>Better speech skills, culture</u>', 'Introduce challenges', 'Build synergy']},
            {title: 'Consultants', items: ['<u>Better and better AI usage</u>', 'Focus on the essential', 'More engagement']},
            {title: 'Business', items: ['<u>A connection with the tribe</u>', 'Faction contribution to RFP/I', 'Orange ecosystem awareness']},
        ],
    },
    {
        type: 'stack',
        slides: [
            {
                type: 'axesOverview',
                nav: 'The actions',
                title: 'The actions',
                big: 'Listen first, then act, along <em>five axes</em>:',
                // display order of the list (radar keeps the order of data/axes.js); omit to use data order
                order: ['retention', 'expertise', 'business', 'operations', 'acquisition'],
            },
            {type: 'axes'},
        ],
    },
    {
        type: 'phases',
        nav: 'The plan',
        title: 'The plan',
        big: 'From <em>[start date]</em>: a 100-day plan, then a 12-month target.',
        compact: true,
        phases: [
            {title: 'Days 1–30', subtitle: 'Listen', color: 'brand'},
            {title: 'Days 31–60', subtitle: 'Diagnose', color: 'blue'},
            {title: 'Days 61–100', subtitle: 'Launch', color: 'green'},
            {title: 'Month 12', subtitle: 'Measure against the target', color: 'purple'},
        ],
        note: 'Detailed in Part 3.',
    },
    {
        type: 'stack',
        slides: [
            {
                type: 'phases',
                tag: 'PART 3',
                title: 'My first 100 days',
                fragments: true,
                phases: [
                    {title: 'Days 1–30', subtitle: 'Listen', color: 'brand', items: ['1:1 with every consultant', 'Review contracts &amp; ambitions', 'Align with Chapter Lead &amp; other FLs', 'Map skills &amp; staffing']},
                    {title: 'Days 31–60', subtitle: 'Diagnose', color: 'blue', items: ['Launch expectations survey', 'Share findings back', 'Pick 3 priorities with the team', 'Draft faction strategy']},
                    {title: 'Days 61–100', subtitle: 'Launch', color: 'green', items: ['Tech talk rhythm live', 'Reverse-mentoring pilot', 'Informal roles assigned', 'Recruitment plan &amp; first offer sheets']},
                ],
            },
            {
                type: 'bullets',
                title: 'Day 100: what success looks like',
                items: [
                    'Every consultant met, heard and with a clear next step',
                    'Strategy co-built and validated with the Chapter Lead',
                    '3 rituals running: tech talks, ambition follow-up, workload review',
                    'Recruitment pipeline &amp; reverse-mentoring pilot started',
                    'A baseline to measure each axis from day 100',
                ],
            },
            {
                type: 'cover',
                title: "Let's build an <span>augmented</span> faction.",
                subtitle: 'Thank you — questions &amp; discussion',
            },
        ],
    },
];
