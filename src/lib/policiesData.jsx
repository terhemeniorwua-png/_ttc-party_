export const POLICY_CATEGORIES = [
  "All",
  "Healthcare",
  "Education",
  "Economy",
  "Agriculture",
  "Infrastructure",
  "Technology",
  "Youth",
  "Environment",
  "Governance"
];

export const POLICIES_DATA = [
  {
    slug: "healthcare-transformation",
    title: "Universal Primary Healthcare & LGA Clinic Modernization",
    category: "Healthcare",
    summary: "A decentralized funding and oversight framework to rebuild Primary Health Centers across all 774 Local Government Areas.",
    lastUpdated: "September 2026",
    introduction: "Access to quality primary healthcare remains severely restricted in rural and peri-urban wards. This policy framework establishes direct ward-level healthcare funding paired with real-time audit mechanisms.",
    problem: "Over 65% of local Primary Health Centers suffer from persistent drug stockouts, insufficient medical staff, and unreliable power supply, forcing citizens to pay out-of-pocket at private clinics.",
    approach: "Decentralize healthcare equipment procurement to state-level health trusts while mandating community health oversight boards at every primary health facility.",
    keyProposals: [
      "Ring-fence 15% of state allocations specifically for Primary Healthcare Centers (PHCs).",
      "Deploy solar micro-grids to ensure 24/7 power supply for cold-chain vaccine storage.",
      "Establish citizen ward health committees with direct authority to sign off on drug delivery receipts."
    ],
    expectedOutcomes: [
      "Reduction of infant mortality rates by 28% within 36 months.",
      "100% operational uptime for vaccine storage in rural wards.",
      "Complete elimination of ghost drug delivery inventories."
    ],
    framework: "Phased rollout starting across 12 pilot states in Q1 2027, followed by nationwide expansion by Q4 2028.",
    faqs: [
      {
        question: "How will the solar micro-grid installations be funded?",
        answer: "Through a combination of public infrastructure bonds and reallocated emergency energy subsidies."
      },
      {
        question: "Who sits on the citizen ward health committee?",
        answer: "Elected local community leaders, health workers, and independent civil society representatives."
      }
    ]
  },
  {
    slug: "agricultural-value-chain",
    title: "Agro-Industrial Hubs & Smallholder Credit Access",
    category: "Agriculture",
    summary: "Establishing localized processing zones to reduce post-harvest losses and grant low-interest micro-loans to smallholder farmers.",
    lastUpdated: "August 2026",
    introduction: "Post-harvest losses swallow over 40% of food produced in Nigeria. This policy establishes ward-level storage infrastructure and direct agricultural credit.",
    problem: "Smallholder farmers lack access to cold storage, commercial processing, and affordable financing, leaving them vulnerable to middleman exploitation.",
    approach: "Construct localized processing hubs at agrarian ward clusters and provide single-digit interest credit directly to verified farm cooperatives.",
    keyProposals: [
      "Construct solar-powered grain and produce storage silos in major farming LGAs.",
      "Caps agricultural micro-loan interest rates at 5% per annum for registered cooperatives.",
      "Deploy digital soil-testing kits to boost crop yield efficiency."
    ],
    expectedOutcomes: [
      "Reduction of post-harvest crop losses by 35%.",
      "500,000 smallholder farmers integrated into formal credit channels.",
      "Increased local food security and price stabilization."
    ],
    framework: "Co-managed by state ministries of agriculture and vetted agricultural cooperatives.",
    faqs: [
      {
        question: "How do farmers register for single-digit interest loans?",
        answer: "Through biometric registration at verified ward agricultural cooperative offices."
      }
    ]
  },
  {
    slug: "open-governance-audit",
    title: "Open Fiscal Data & Mandatory LGA Procurement Publishing",
    category: "Governance",
    summary: "Mandating public disclosure of all government procurement contracts exceeding ₦5 Million on open digital ledgers.",
    lastUpdated: "July 2026",
    introduction: "Public corruption thrives in opaque procurement pipelines. This legislation guarantees open access to contract terms, vendors, and disbursement schedules.",
    problem: "Over 30% of local infrastructure funds disappear into abandoned or inflated contracts due to non-public procurement bidding.",
    approach: "Legislate real-time digital publishing of all government tenders, awarded amounts, and contractor identities.",
    keyProposals: [
      "Launch a centralized Open Contracting Portal with mandatory reporting within 48 hours of award.",
      "Whistleblower cash incentives for reporting contract inflation.",
      "Public project tracking boards installed physically at every infrastructure site."
    ],
    expectedOutcomes: [
      "Save an estimated ₦120 Billion annually in inflated procurement costs.",
      "Boost public trust in local government project delivery.",
      "Increase project completion rates by 45%."
    ],
    framework: "Enforced by the National Public Procurement Commission with civil society auditing rights.",
    faqs: [
      {
        question: "What happens if an agency fails to publish contract details?",
        answer: "Budget disbursements for that agency are automatically frozen until compliance is restored."
      }
    ]
  },
  {
    slug: "tech-education-skills",
    title: "Digital Youth Academy & LGA Tech Hub Initiative",
    category: "Technology",
    summary: "Constructing solar-powered technology training centers in every federal constituency to build global digital skills.",
    lastUpdated: "September 2026",
    introduction: "To transition into a high-wage digital economy, Nigeria's youth must have universal access to internet infrastructure and modern software training.",
    problem: "Millions of young citizens lack access to high-speed internet, electricity, and structured technical training required for global tech employment.",
    approach: "Transform underutilized public buildings into fully equipped, solar-powered tech hubs offering accredited software engineering and data science training.",
    keyProposals: [
      "Build 360 constituency tech hubs equipped with fiber optic internet and solar power.",
      "Offer tuition-free 6-month bootcamps in web development, AI, and digital marketing.",
      "Establish remote work matching pipelines with international employers."
    ],
    expectedOutcomes: [
      "Train 250,000 young software engineers annually.",
      "Inject $500 Million in foreign digital remittances into the domestic economy.",
      "Reduce youth unemployment in urban and peri-urban centers."
    ],
    framework: "Public-private partnership with global tech firms and local educational trusts.",
    faqs: [
      {
        question: "Is the training completely free for participants?",
        answer: "Yes, fully sponsored through public education technology funds."
      }
    ]
  }
];