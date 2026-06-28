export const TOPIC_DATA = {
  "employment-support": {
    slug: "employment-support",
    name: "Employment support",
    description: "Advice on finding work, workplace adjustments, and your rights as a disabled employee.",
    intro:
      "Finding and keeping work when you have a disability or health condition can come with extra challenges. Whether you're entering the job market, returning after ill health, or dealing with difficulties in your current role, our guides can help.",
    guideCount: 4,
    showBenefitsChecker: true,
    relatedTopics: ["benefits-and-entitlements", "your-rights", "mental-health-and-wellbeing"],
    articles: [
      {
        slug: "finding-work",
        title: "Finding work as a disabled person",
        summary: "Practical steps to searching for jobs, writing applications, and preparing for interviews.",
        readTime: 8,
        updatedDate: "March 2025",
      },
      {
        slug: "workplace-adjustments",
        title: "Reasonable adjustments at work",
        summary: "What adjustments employers are legally required to make, and how to ask for them.",
        readTime: 6,
        updatedDate: "February 2025",
      },
      {
        slug: "access-to-work",
        title: "Access to Work: what it is and how to claim",
        summary: "The government grant that can help cover the extra costs of working with a disability.",
        readTime: 5,
        updatedDate: "January 2025",
      },
      {
        slug: "disability-confident-employer",
        title: "What 'Disability Confident' means for you",
        summary: "How to spot employers who have committed to inclusive hiring practices.",
        readTime: 4,
        updatedDate: "December 2024",
      },
    ],
  },

  "sign-language-services": {
    slug: "sign-language-services",
    name: "Sign language services",
    description: "BSL and SLSL interpreting, community classes, and deaf awareness resources.",
    intro:
      "AbilityAction offers British Sign Language (BSL) and Sri Lankan Sign Language (SLSL) interpreting, community classes, and deaf awareness training. Whether you are deaf, hard of hearing, or a hearing person wanting to connect, we have something for you.",
    guideCount: 4,
    showBenefitsChecker: false,
    relatedTopics: ["employment-support", "your-rights", "mental-health-and-wellbeing"],
    articles: [
      {
        slug: "what-is-bsl",
        title: "What is British Sign Language (BSL)?",
        summary: "An introduction to BSL, the visual language of the UK Deaf community.",
        readTime: 4,
        updatedDate: "March 2025",
      },
      {
        slug: "slsl-services",
        title: "Sri Lankan Sign Language (SLSL) support",
        summary: "Our unique SLSL interpreting and community support services.",
        readTime: 5,
        updatedDate: "February 2025",
      },
      {
        slug: "booking-an-interpreter",
        title: "Booking a BSL or SLSL interpreter",
        summary: "How to arrange an interpreter for appointments, interviews, or everyday situations.",
        readTime: 4,
        updatedDate: "January 2025",
      },
      {
        slug: "deaf-awareness-training",
        title: "Deaf awareness training for workplaces",
        summary: "How employers and colleagues can better support deaf and hard of hearing staff.",
        readTime: 6,
        updatedDate: "November 2024",
      },
    ],
  },

  "housing-support": {
    slug: "housing-support",
    name: "Housing support",
    description: "Guidance on accessible housing, home adaptations, grants, and tenant rights.",
    intro:
      "Where you live has a huge impact on your independence and wellbeing. Our housing guides help disabled people find accessible homes, fund adaptations, and understand their rights as tenants and homeowners.",
    guideCount: 3,
    showBenefitsChecker: false,
    relatedTopics: ["benefits-and-entitlements", "your-rights", "employment-support"],
    articles: [
      {
        slug: "finding-accessible-housing",
        title: "Finding accessible and adapted housing",
        summary: "How to search for accessible properties through local authorities and housing associations.",
        readTime: 7,
        updatedDate: "February 2025",
      },
      {
        slug: "home-adaptations-grants",
        title: "Home adaptations and Disabled Facilities Grants",
        summary: "How to apply for a grant to adapt your home to meet your disability needs.",
        readTime: 6,
        updatedDate: "January 2025",
      },
      {
        slug: "tenant-rights",
        title: "Your rights as a disabled tenant",
        summary: "What landlords must and cannot do under the Equality Act and housing law.",
        readTime: 5,
        updatedDate: "December 2024",
      },
    ],
  },

  "mental-health-and-wellbeing": {
    slug: "mental-health-and-wellbeing",
    name: "Mental health and wellbeing",
    description: "Counselling, peer support, and wellbeing resources for disabled people.",
    intro:
      "Living with a disability can affect your mental health, and mental health conditions are themselves recognised as disabilities. Our guides help you access the right support, without stigma.",
    guideCount: 3,
    showBenefitsChecker: false,
    relatedTopics: ["employment-support", "your-rights", "benefits-and-entitlements"],
    articles: [
      {
        slug: "accessing-counselling",
        title: "Accessing counselling and mental health support",
        summary: "How to find a counsellor or therapist, including free and low-cost options.",
        readTime: 7,
        updatedDate: "March 2025",
      },
      {
        slug: "peer-support",
        title: "Peer support: connecting with others who understand",
        summary: "How peer support groups can help, and how to find ones near you.",
        readTime: 5,
        updatedDate: "February 2025",
      },
      {
        slug: "mental-health-at-work",
        title: "Managing your mental health at work",
        summary: "Practical strategies and your legal rights when mental health affects your ability to work.",
        readTime: 6,
        updatedDate: "January 2025",
      },
    ],
  },

  "benefits-and-entitlements": {
    slug: "benefits-and-entitlements",
    name: "Benefits and entitlements",
    description: "Clear guides on PIP, Universal Credit, ESA, and the benefits you may be owed.",
    intro:
      "Navigating the benefits system can be overwhelming. Our guides break it down clearly — helping you understand what you are entitled to, how to apply, and what to do if you are refused.",
    guideCount: 4,
    showBenefitsChecker: true,
    relatedTopics: ["employment-support", "your-rights", "housing-support"],
    articles: [
      {
        slug: "pip-guide",
        title: "Personal Independence Payment (PIP): a complete guide",
        summary: "Who qualifies for PIP, how to apply, and what to do if your claim is refused.",
        readTime: 10,
        updatedDate: "March 2025",
      },
      {
        slug: "universal-credit-and-disability",
        title: "Universal Credit and disability: what you need to know",
        summary: "How Universal Credit works for disabled people and those with health conditions.",
        readTime: 8,
        updatedDate: "February 2025",
      },
      {
        slug: "esa-guide",
        title: "Employment and Support Allowance (ESA) explained",
        summary: "Understanding contribution-based and income-related ESA, and how to claim.",
        readTime: 7,
        updatedDate: "January 2025",
      },
      {
        slug: "disability-premiums",
        title: "Disability premiums and benefit top-ups",
        summary: "Extra amounts you may be able to add to your existing benefits if you have a disability.",
        readTime: 5,
        updatedDate: "December 2024",
      },
    ],
  },

  "your-rights": {
    slug: "your-rights",
    name: "Your rights",
    description: "Understanding the Equality Act 2010, discrimination law, and how to take action.",
    intro:
      "The law protects disabled people from discrimination in work, housing, education, and services. Our guides explain what those protections mean in practice and what to do if your rights are violated.",
    guideCount: 3,
    showBenefitsChecker: false,
    relatedTopics: ["employment-support", "benefits-and-entitlements", "housing-support"],
    articles: [
      {
        slug: "equality-act-explained",
        title: "The Equality Act 2010: what it means for you",
        summary: "A plain-English guide to your legal protections as a disabled person.",
        readTime: 8,
        updatedDate: "March 2025",
      },
      {
        slug: "disability-discrimination",
        title: "Types of disability discrimination and what to do",
        summary: "How to identify direct, indirect, and other forms of disability discrimination.",
        readTime: 7,
        updatedDate: "February 2025",
      },
      {
        slug: "making-a-complaint",
        title: "How to make a formal complaint or claim",
        summary: "Step-by-step guidance on raising complaints, using employment tribunals, or contacting the EHRC.",
        readTime: 9,
        updatedDate: "January 2025",
      },
    ],
  },
};

// Flat list of all articles — used for the search feature
export const ALL_ARTICLES = Object.entries(TOPIC_DATA).flatMap(
  ([topicSlug, topic]) =>
    topic.articles.map((article) => ({
      ...article,
      topicSlug,
      topicName: topic.name,
    }))
);

export const TOPIC_SLUGS = Object.keys(TOPIC_DATA);
