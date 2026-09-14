// Every number and line of copy for the Healthy Pharmacy case study lives
// here — edit this file to update the page. `display` strings drive the
// count-up animation (see CountStat.jsx) and are also the literal final value
// shown, so keep them exactly as you want them to read.

export const HP = {
  hero: {
    period: 'TikTok • June 12–September 9, 2026',
    metrics: [
      { display: '4.13M',   label: 'TikTok Views' },
      { display: '407K',    label: 'TikTok Likes' },
      { display: '61.1K',   label: 'TikTok Shares' },
      { display: '10,975',  label: 'TikTok Profile Views' },
    ],
  },

  challenge: {
    headline: 'How Do You Make People Care About A Pharmacy On TikTok?',
    body: "Most people think about their pharmacy when they need medication, not when they're scrolling for entertainment. The challenge was to make Healthy Pharmacy feel less like a business posting advertisements and more like a social account people would actually choose to watch.",
  },

  idea: {
    headline: ["Don't Advertise The Pharmacy.", 'Make The Pharmacy Entertaining.'],
    body: 'Instead of building the content strategy around promotional videos, Empower focused on situations people instantly recognize: pharmacy workplace moments, customer behavior, medication humor and short POV scenarios. The business became the setting for the entertainment rather than the advertisement interrupting it.',
  },

  contentFormats: [
    { title: 'Pharmacy POVs',      desc: 'Relatable employee and workplace situations.', poster: '/healthy-pharmacy-povs.jpg', link: 'https://www.instagram.com/p/Dc1-ORWTGeC/' },
    { title: 'Relatable Content',  desc: 'Funny or recognizable interactions inspired by everyday pharmacy life.', poster: '/healthy-pharmacy-relatable-content.jpg', link: 'https://www.tiktok.com/@healthypharmacy/video/7665380858425134367' },
    { title: 'Medication Humor',   desc: 'Familiar medication and health situations turned into entertaining short-form content.', poster: '/healthy-pharmacy-medication-humor.jpg', link: 'https://www.tiktok.com/@healthypharmacy/video/7654650348468063519' },
    { title: 'Pharmacy Education', desc: 'Useful information presented in the same fast, social-first style.', poster: '/healthy-pharmacy-education.jpg', link: 'https://www.tiktok.com/@healthypharmacy/video/7641668179185487118' },
    { title: 'Services',           desc: 'Content introducing prescription transfers, delivery, blister packaging and other pharmacy services.', poster: '/healthy-pharmacy-services.jpg', link: 'https://www.tiktok.com/@healthypharmacy/video/7649170170891701534' },
  ],

  results: {
    period: 'TikTok • 90-Day Snapshot (June 12–September 9, 2026)',
    lines: ['4.13 Million Views.', 'For A Pharmacy.'],
    body: "More importantly, the performance wasn't built around one lucky viral post. Healthy Pharmacy repeatedly produced breakout distribution across multiple content cycles.",
    metrics: [
      { display: '4,130,000+', label: 'TikTok Views' },
      { display: '407,064',    label: 'Likes' },
      { display: '61,119',     label: 'Shares' },
      { display: '10,975',     label: 'Profile Views' },
      { display: '2.7K',       label: 'TikTok Followers' },
    ],
  },

  graph: {
    headline: ['Not One Viral Moment.', 'A Repeatable Content Engine.'],
    body: 'Healthy Pharmacy experienced major distribution spikes across multiple content cycles, evidence that the creative approach could repeatedly earn attention rather than relying on one isolated hit.',
    spikes: ['Late June', 'Late July', 'Late August'],
    peak: { display: '~224.8K', label: 'Views In A Single Day', date: 'August 27' },
    caption: 'Illustrative 90-day trend built around verified performance highlights.',
  },

  momentum: {
    periodLabel: 'Latest 60 Days',
    body: "People weren't just watching. They were sending the content to other people.",
    stats: [
      { display: '2.8M',   label: 'TikTok Views', delta: '+50.0%' },
      { display: '280.4K', label: 'Likes',         delta: '+51.7%' },
      { display: '44.4K',  label: 'Shares',        delta: '+126.4%', emphasize: true },
    ],
  },

  instagram: {
    headline: 'The Content Traveled.',
    period: 'Instagram • 60-Day Insights Window',
    body: "Instagram became another discovery engine, with nearly all measured views coming from people who didn't already follow Healthy Pharmacy.",
    stats: [
      { display: '294,513', label: 'Instagram Views' },
      { display: '188,607', label: 'Unique Viewers' },
      { display: '~17K',    label: 'Interactions' },
      { display: '+235',    label: 'Net Followers' },
      { display: '98.4%',   label: 'Views From Non-Followers' },
    ],
  },

  audience: {
    headline: 'Who Was Watching?',
    body: 'The strategy built particular traction with younger adults—an audience well suited to relatable health, medication, convenience and pharmacy-workplace content.',
    stats: [
      { display: '67.3%', label: 'Ages 18–34' },
      { display: '43.4%', label: 'Ages 25–34' },
      { display: '62%',   label: 'Female' },
    ],
  },

  conversion: {
    headline: 'Attention: Solved. Conversion: Next.',
    body: 'The content proved Healthy Pharmacy could earn attention at scale. The next challenge is turning more of that attention into measurable pharmacy actions.',
    funnel: [
      { stage: 'Attention',   detail: '2.8M TikTok views + 294.5K Instagram views in the supplied 60-day snapshots' },
      { stage: 'Interest',    detail: '6.5K TikTok profile views · 1,169 Instagram profile visits' },
      { stage: 'Intent',      detail: '17 Instagram bio-link taps' },
      { stage: 'Lead',        detail: 'Tracking being implemented', pending: true },
      { stage: 'Conversion',  detail: 'Completed prescription transfers', pending: true },
    ],
    tapRate: { display: '1.45%', label: 'Instagram Profile → Bio-Link Tap Rate' },
    closingBody: 'Millions of views proved the creative works. Now the focus shifts toward making the path from viewer to patient easier to see, easier to track and easier to optimize.',
  },

  takeaways: {
    headline: "Viral Isn't The Finish Line.",
    items: [
      { num: '01', title: 'Keep The Entertainment', desc: 'The relatable pharmacy content remains the primary reach engine.' },
      { num: '02', title: 'Layer In The Business',  desc: 'Instead of replacing entertaining content with advertisements, introduce prescription transfers, free delivery, blister packaging and other services within and around formats that already perform.' },
      { num: '03', title: 'Track What Happens Next', desc: 'Measure transfer-page visits, calls, DMs, transfer starts and completed prescription transfers originating from social.' },
    ],
  },

  nextKPI: {
    label: 'The Number We Want To Move Next:',
    value: 'Prescription Transfers Per 100,000 Views.',
    body: "Reach built the audience. Now we're building the measurement system that connects attention to business outcomes.",
  },

  whatWeDid: [
    'Content Strategy', 'Creative Concepts', 'Short-Form Video', 'TikTok',
    'Instagram Reels', 'Social Strategy', 'Performance Analysis', 'Conversion Strategy',
  ],
}
