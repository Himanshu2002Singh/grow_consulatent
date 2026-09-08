export const COMPANY_INFO = {
  name: "GROW CONSULTANTS",
  legalName: "M/s GROW CONSULTANTS",
  legalStatus: "Partnership Firm under Indian Partnership Act, 1932",
  tagline: "Specialised Financial Structuring for Hospitality, F&B & Entertainment",
  shortIntro: "Grow Consultants is a specialised financial advisory and transaction facilitation firm focused on high-footfall businesses in hospitality, food & beverage, live entertainment and events.",
  email: import.meta.env.VITE_CONTACT_EMAIL || "contact@growconsultants.in",
  phoneDisplay: import.meta.env.VITE_CONTACT_PHONE_DISPLAY || "+91 98765 43210",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "919876543210",
  registeredOffice: {
    addressLine1: "Plot No. 60, Street No. 2 (Old Plot No. 3)",
    area: "Lalita Park, Laxmi Nagar",
    landmark: "Near Shiv Shakti Mandir",
    cityStateZip: "Delhi – 110092",
    country: "India"
  },
  partners: [
    { name: "Abhinav Bakshi", role: "Partner" },
    { name: "Abhinav Jain", role: "Partner" },
    { name: "Madhu Kansal", role: "Partner" }
  ],
  coreFocus: "Financial structuring and facilitation of funding (especially revenue discounting and advances against ticket sales) through third-party ticketing platforms for hospitality operators and performing artists.",
  roleClarification: "Independent financial consultant and transaction facilitator only. Does not lend money, does not act as talent manager or booking agent."
};

export const PLATFORMS = [
  { name: "District by Zomato", category: "Dining & Events", tag: "F&B & Live" },
  { name: "BookMyShow", category: "Live Events & Movies", tag: "Concerts & Comedy" },
  { name: "Swiggy Scenes", category: "Dining & Experiences", tag: "F&B Footfall" },
  { name: "MagicPin", category: "Local Discovery & Dining", tag: "High-Volume Retail" },
  { name: "EazyDiner", category: "Premium Table Bookings", tag: "Hospitality & Bars" },
  { name: "Skillbox", category: "Live Music & Festivals", tag: "Independent Artists" },
  { name: "Paytm Insider", category: "Events & Ticketing", tag: "Experiential Venues" }
];

export const VALUE_BOXES = [
  {
    id: "funding",
    title: "Structured Funding through Platforms",
    description: "Access advances, revenue discounting and receivable financing linked directly to leading ticketing and distribution networks."
  },
  {
    id: "protection",
    title: "Exclusive Facilitation & Deal Protection",
    description: "Operate under robust exclusivity and non-circumvention frameworks protecting commercial terms and business introductions."
  },
  {
    id: "sector",
    title: "Deep Sector Understanding",
    description: "Specialized knowledge of footfall dynamics, cash-flow rhythms and event monetisation across F&B, bars, lounges & live shows."
  }
];

export const ABOUT_CONTENT = {
  title: "At the Intersection of Operations and Capital",
  badge: "About Grow Consultants",
  p1: "Grow Consultants is a partnership firm specialised in financial structuring, commercial advisory and transaction facilitation for the hospitality, food & beverage, entertainment and live-events ecosystem in India.",
  p2: "We work at the intersection of operations and capital. Our focus is on helping restaurants, bars, lounges, multi-outlet hospitality groups, event venues and individual performing artists access structured funding solutions — particularly revenue discounting, advances against ticket sales and platform-linked financing offered by third-party ticketing platforms.",
  p3: "Unlike general financial advisors, we concentrate on the specific cash-flow patterns and monetisation models of high-footfall service businesses and live entertainment. We act purely as an independent consultant and facilitator. We do not lend money ourselves, nor do we act as talent managers or booking agents.",
  principle: "Introduce the right platform, structure the right commercial terms, protect the introduction, and ensure the client receives funds only when the transaction actually closes."
};

export const SERVICES = [
  {
    id: "service-1",
    num: "01",
    title: "Ticketing Platform Funding Facilitation",
    description: "We identify, introduce and facilitate funding arrangements available through major third-party platforms.",
    features: [
      "Revenue discounting structures",
      "Advances against ticket sales or bookings",
      "Ticketing-linked receivable financing",
      "Platform-based monetisation facilities"
    ]
  },
  {
    id: "service-2",
    num: "02",
    title: "Commercial Structuring & Negotiation Support",
    description: "Hands-on advisory to ensure commercial terms are structured favorably for your operating realities.",
    features: [
      "Evaluating platform term sheets & clauses",
      "Structuring bespoke commercial arrangements",
      "Preparing required financial & operational documentation",
      "Coordinating discussions until funds disbursement"
    ]
  },
  {
    id: "service-3",
    num: "03",
    title: "Exclusive Deal Protection",
    description: "Rigorous frameworks ensuring value creation and commercial rights are safeguarded throughout the transaction.",
    features: [
      "Exclusivity & non-circumvention protocols",
      "Protection of platform introductions",
      "Transparent fee governance aligned to success",
      "Safeguarded intellectual and commercial value"
    ]
  },
  {
    id: "service-4",
    num: "04",
    title: "Broader Advisory Support",
    description: "Strategic commercial guidance drawing from our core partnership objects in hospitality and live entertainment.",
    features: [
      "Structured finance advisory & roadmaps",
      "Event-linked financing considerations",
      "Platform collaboration strategies",
      "Growth-oriented commercial direction"
    ]
  }
];

export const MANDATORY_DISCLAIMER = {
  title: "Important Clarification & Regulatory Notice",
  text: "Grow Consultants acts solely as an independent financial consultant and transaction facilitator. We do not act as a lender, do not provide loans ourselves, and do not guarantee approval, quantum, timeline or commercial terms offered by any platform. Final decisions always rest with the client and the platform."
};

export const CLIENT_CATEGORIES = [
  {
    id: "hospitality",
    title: "Hospitality & Entertainment Operators",
    subtitle: "High-Footfall Dining, Nightlife & Venues",
    description: "Restaurants, bars, lounges, multi-outlet groups, franchises, partner-operated locations and venues that generate footfall and ticketed revenue. This includes concepts operating across food, alcohol, music and experiential formats.",
    bullets: [
      "Multi-outlet restaurant & bar chains seeking expansion liquidity",
      "High-footfall clubs & lounges with weekend event programming",
      "Experiential dining venues utilizing table-booking platforms",
      "Festival venues & event arenas scaling operational capital"
    ],
    platformUse: "Unlocking advances against platform table bookings, covers & event ticket revenue."
  },
  {
    id: "artists",
    title: "Performing Artists & Talent",
    subtitle: "Live Performers, Comedians & Musicians",
    description: "Individual artists, comedians, musicians and other performers who appear at live events, concerts, festivals, corporate shows and private events — along with their managers or management companies — who seek advances or structured funding against future ticket sales.",
    bullets: [
      "Touring musicians & bands seeking tour-financing advances",
      "Stand-up comedians planning multi-city auditorium specials",
      "Independent performance creators & theatrical productions",
      "Artist management agencies looking to structure upfront guarantees"
    ],
    platformUse: "Unlocking structured advances against verified upcoming ticketed tours & platform listings."
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Discussion & Understanding",
    desc: "We begin with a conversation to understand the client's business model, current funding needs, existing platform relationships (if any), and the nature of the opportunity."
  },
  {
    step: 2,
    title: "Platform Identification & Evaluation",
    desc: "We identify suitable third-party ticketing platforms that offer relevant funding or advance facilities and evaluate mutual fit."
  },
  {
    step: 3,
    title: "Introduction & Structuring",
    desc: "We introduce the client to the platform and assist in structuring the commercial terms of the proposed arrangement."
  },
  {
    step: 4,
    title: "Coordination & Documentation",
    desc: "We support the preparation and submission of required documents and coordinate discussions between the client and the platform."
  },
  {
    step: 5,
    title: "Closing & Disbursement",
    desc: "We stay involved until the transaction is concluded and funds are actually received by the client. Our success fee becomes payable only on actual receipt of funds."
  },
  {
    step: 6,
    title: "Ongoing Clarity",
    desc: "Where applicable, clear reporting and verification mechanisms are put in place for any agreed ongoing components."
  }
];

export const WHY_US_POINTS = [
  {
    title: "Sector Focus",
    desc: "We specialise in hospitality, F&B, bars, lounges and live entertainment — businesses whose cash flows are driven by footfall and ticketed events."
  },
  {
    title: "Platform Expertise",
    desc: "Deep familiarity with the funding products and criteria offered by leading ticketing and distribution platforms across India."
  },
  {
    title: "Clear Scope",
    desc: "Our engagement is tightly defined around third-party ticketing platform transactions. We do not claim rights over general management, bookings, sponsorships or unrelated financing."
  },
  {
    title: "Success-Based Alignment",
    desc: "Fees are linked directly to actual funds received by the client. We do not charge upfront retainers for platform facilitation."
  },
  {
    title: "Deal Protection",
    desc: "Structured exclusivity and non-circumvention provisions protect the introductions and the commercial work performed."
  },
  {
    title: "Independent Role",
    desc: "We act as a pure facilitator and advisor. We do not lend, do not bind the client, and do not take decisions on the client's behalf."
  }
];

export const APPROACH_PILLARS = [
  {
    title: "Clarity of Scope",
    desc: "We limit our role to the specific funding opportunities we introduce or facilitate through third-party ticketing platforms. Everything else remains outside our mandate unless mutually agreed in writing."
  },
  {
    title: "Protection of Introductions",
    desc: "When we bring a platform or structure a transaction, we protect that work through clear contractual frameworks so that the commercial value created is respected."
  },
  {
    title: "Client Decision Rights",
    desc: "The client always retains the sole right to accept or reject any proposal. We provide structuring support and coordination; the final commercial decision rests with the client."
  }
];

export const FAQS = [
  {
    q: "Is Grow Consultants a NBFC, Bank, or direct lender?",
    a: "No. Grow Consultants is an independent commercial advisory and facilitation firm. We do not lend money directly, nor do we issue credit. We connect eligible operators and artists with third-party ticketing platforms that offer structured funding and revenue discounting facilities."
  },
  {
    q: "How does 'Advances against Ticket Sales' work?",
    a: "Leading ticketing platforms often provide advance financing or revenue discounting against historical footfall, verified ticket demand, or scheduled upcoming event dates. We structure and facilitate these commercial agreements so you receive upfront capital on optimal terms."
  },
  {
    q: "When is your facilitation fee payable?",
    a: "Our engagement operates on a success-based model. Facilitation fees become payable only upon the actual closing of the transaction and disbursement of funds to your account."
  },
  {
    q: "Do you take control over our artist management or restaurant equity?",
    a: "Never. Our scope is strictly limited to facilitating specific platform-linked funding facilities. We do not take equity, nor do we act as booking agents or talent managers."
  }
];
