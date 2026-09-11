// Central, editable source of truth for the Work page and case studies.
// Add a new project by adding an object here — no other file needs to change
// for it to show up in the filter bar, the showcase, and /work/<slug>.
//
// Numbers you haven't verified yet should stay `null` — the UI renders a
// placeholder instead of a fabricated figure.

export const INDUSTRIES = [
  { key: 'all',        label: 'All' },
  { key: 'law',         label: 'Law' },
  { key: 'healthcare', label: 'Healthcare' },
  { key: 'nonprofit',  label: 'Nonprofit' },
]

export const PLATFORMS = ['TikTok', 'Instagram', 'Facebook']

export const PROJECTS = [
  {
    slug: 'aronov-associates',
    name: 'Aronov & Associates',
    industry: 'Personal Injury Law',
    industryKey: 'law',
    platforms: ['TikTok', 'Instagram', 'Facebook'],
    personality: 'fast', // fast | fun | cinematic — drives the visual treatment
    layout: 'media-left',
    logo: '/aronov-law-logo.png',
    headline: 'Making legal content impossible to scroll past.',
    description: 'We transformed everyday legal questions into fast, curiosity-driven social content designed to educate, entertain and earn attention.',
    heroStats: [
      { value: '2M+',   label: 'TikTok Video Views' },
      { value: '168K+', label: 'Instagram Views' },
      { value: '+1151',  label: 'Instagram Followers' },
    ],
    secondaryStat: '9,663 TikTok Profile Views',
    hoverStat: { value: 2046383, label: 'Views' },
    contentPieces: [
      { label: 'Can You Sue?', featured: true },
      { label: 'Is It Legal?' },
      { label: 'Top 5 Things People Don’t Know' },
      { label: 'Legal Q&A' },
      { label: 'Case Scenarios' },
    ],
    hasCaseStudy: true,
    linkLabel: 'View Case Study',
    caseStudy: {
      client: 'Aronov & Associates is a personal injury law firm — the kind of business most people only think about after something has already gone wrong.',
      challenge: 'Legal content is usually either dry and ignored, or clickbait that erodes trust. Aronov needed content that stopped the scroll without cheapening the brand.',
      idea: 'Turn the questions people actually search for — "can you sue for this?", "is this legal?" — into fast, curiosity-driven videos that educate first and brand second.',
      contentNote: 'A steady mix of legal Q&A, "is it legal" scenarios, and case breakdowns, published consistently across TikTok, Instagram and Facebook.',
      results: [
        { value: '2,046,383', label: 'Measured TikTok Video Views', period: 'Lifetime to date' },
        { value: '9,663',     label: 'TikTok Profile Views',        period: 'Lifetime to date' },
        { value: '58,751',    label: 'TikTok Likes',                period: 'Lifetime to date' },
        { value: '168,372',   label: 'Instagram Views',             period: 'Reporting period' },
        { value: '130,933',   label: 'Instagram Unique Viewers',    period: 'Reporting period' },
        { value: '+1151',      label: 'Instagram Net Followers',     period: 'Reporting period' },
        { value: '99.1%',     label: 'Instagram Views From Non-Followers', period: 'Reporting period' },
        { value: '83.1%',     label: 'U.S. Instagram Audience',     period: 'Reporting period' },
      ],
      standoutReel: { views: '260K', follows: '1033' },
      disclaimers: [
        'Figures reflect different reporting periods per platform and are not directly additive across platforms.',
        'This campaign has not yet produced verified leads, cases, or revenue figures — results shown are content and attention metrics only.',
      ],
      learned: 'Question-driven hooks consistently outperformed polished, promotional content — curiosity earns the first three seconds; clarity earns the follow.',
    },
  },
  {
    slug: 'healthy-pharmacy',
    name: 'Healthy Pharmacy',
    industry: 'Pharmacy / Healthcare',
    industryKey: 'healthcare',
    platforms: ['TikTok', 'Instagram'],
    personality: 'fun',
    layout: 'info-left',
    logo: '/healthy-pharmacy-logo.png',
    headline: 'We Made A Pharmacy Entertaining.',
    description: 'Relatable pharmacy content turned an everyday local business into a short-form content engine reaching millions.',
    heroStats: [
      { value: '4.13M', label: 'TikTok Views — 90 Days' },
      { value: '407K',  label: 'TikTok Likes — 90 Days' },
      { value: '61.1K', label: 'TikTok Shares — 90 Days' },
    ],
    secondaryStat: '294.5K Instagram Views — 60 Days',
    hoverStat: null,
    contentPieces: [
      { label: 'Pharmacy POVs' },
      { label: 'Customer Moments' },
      { label: 'Medication Humor' },
      { label: 'Pharmacy Education' },
    ],
    hasCaseStudy: true,
    linkLabel: 'View Case Study',
  },
  {
    slug: 'jewish-nonprofit-lecture-brand',
    name: 'Jewish Nonprofit / Lecture Brand',
    industry: 'Education / Nonprofit',
    industryKey: 'nonprofit',
    platforms: ['TikTok', 'Instagram'],
    personality: 'cinematic',
    layout: 'full-bleed',
    headline: 'Turning meaningful ideas into content built for today’s attention span.',
    description: 'Transforming long-form Jewish lectures, philosophy and educational ideas into compelling social-first content that reaches people where they already are.',
    heroStats: null,
    secondaryStat: null,
    hoverStat: null,
    contentPieces: [{}, {}, {}, {}],
    hasCaseStudy: true,
    linkLabel: 'View Project',
    caseStudy: {
      client: 'A nonprofit built around Jewish education — hour-long lectures full of ideas worth spreading, previously reaching only the people already in the room.',
      challenge: 'Long-form lecture content almost never survives the cut to short-form without losing what made it meaningful.',
      idea: 'Find the single moment of insight inside each lecture and let it stand alone — cinematic, quote-driven clips built for a feed, not a classroom.',
      contentNote: 'Clips built around a speaker, a quote, and a moment of stillness — designed to feel meaningful even at seven seconds.',
      results: [],
      standoutReel: null,
      disclaimers: [],
      learned: null,
    },
  },
  {
    slug: 'ruach-breslov',
    name: 'Ruach Breslov',
    industry: 'Jewish Education / Nonprofit',
    industryKey: 'nonprofit',
    platforms: ['Instagram', 'TikTok'],
    personality: 'fast',
    layout: 'media-left',
    headline: 'Turning long-form Jewish teachings into short-form social growth.',
    description: 'We transformed long-form spiritual and philosophical lectures into engaging short-form content designed for Instagram and TikTok — helping Ruach Breslov reach audiences far beyond its existing community.',
    heroStats: [
      { value: '56.6K+', label: 'Known Views' },
      { value: '752',    label: 'Combined Followers' },
      { value: '86%+',   label: 'Discovery Traffic' },
    ],
    secondaryStat: '357 Known Net Followers Gained',
    hoverStat: null,
    contentPieces: [
      { label: 'Happiness', featured: true },
      { label: 'Trauma' },
      { label: 'Money' },
      { label: 'Relationships' },
      { label: 'Personal Growth' },
    ],
    hasCaseStudy: true,
    linkLabel: 'View Case Study',
  },
]

export const getProjectBySlug = (slug) => PROJECTS.find((p) => p.slug === slug)
