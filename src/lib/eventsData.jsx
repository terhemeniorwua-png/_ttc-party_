export const EVENT_CATEGORIES = [
  "All",
  "Town Hall",
  "Summit",
  "Workshop",
  "Rally",
  "Youth Forum"
];

export const EVENT_LOCATIONS = [
  "All Locations",
  "Lagos",
  "Abuja",
  "Kano",
  "Port Harcourt",
  "Enugu",
  "Virtual"
];

export const EVENTS_DATA = [
  {
    slug: "national-grassroots-policy-summit-2026",
    title: "National Grassroots Governance & Policy Summit",
    category: "Summit",
    location: "Abuja",
    venue: "International Conference Centre, Central Business District",
    date: "October 18, 2026",
    time: "09:00 AM - 04:00 PM WAT",
    isUpcoming: true,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    description: "A nationwide gathering bringing together ward leaders, policy analysts, and youth delegates to formulate non-partisan reform blueprints.",
    agenda: [
      { time: "09:00 AM - 10:00 AM", topic: "Delegate Registration & Welcome Keynote" },
      { time: "10:00 AM - 12:00 PM", topic: "Panel: LGA Primary Healthcare Modernization" },
      { time: "12:00 PM - 01:00 PM", topic: "Networking & Community Exhibition" },
      { time: "01:00 PM - 03:00 PM", topic: "Breakout Sessions: Agriculture & Credit Access" },
      { time: "03:00 PM - 04:00 PM", topic: "Declaration of Ward Action Commitments" }
    ],
    speakers: [
      {
        name: "Dr. Amina Bello",
        role: "Lead Healthcare Policy Strategist",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"
      },
      {
        name: "Chidi Okonkwo",
        role: "Youth Technology Initiative Lead",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
      }
    ]
  },
  {
    slug: "lagos-digital-youth-bootcamp-launch",
    title: "Lagos Youth Tech Academy Town Hall & Orientation",
    category: "Youth Forum",
    location: "Lagos",
    venue: "Innovation Hub, Yaba Tech Zone",
    date: "November 05, 2026",
    time: "10:00 AM - 02:00 PM WAT",
    isUpcoming: true,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
    description: "Orientation session for admitted applicants to the digital skills scholarship program across southwestern federal constituencies.",
    agenda: [
      { time: "10:00 AM - 11:00 AM", topic: "Program Briefing & Technical Tracks Overview" },
      { time: "11:00 AM - 01:00 PM", topic: "Mentor Matchmaking & Hardware Allocation" },
      { time: "01:00 PM - 02:00 PM", topic: "Q&A with Industry Partners" }
    ],
    speakers: [
      {
        name: "Tunde Bakare",
        role: "Grassroots Tech Coordinator",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300"
      }
    ]
  },
  {
    slug: "kano-agri-cooperative-workshop",
    title: "Northern Agrarian Credit & Grain Storage Workshop",
    category: "Workshop",
    location: "Kano",
    venue: "Farmers Union Hall, Dawanau Market Zone",
    date: "December 02, 2026",
    time: "09:30 AM - 01:30 PM WAT",
    isUpcoming: true,
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1200",
    description: "Practical workshop teaching cooperative managers how to register for single-digit agricultural credit and utilize communal solar storage.",
    agenda: [
      { time: "09:30 AM - 11:00 AM", topic: "Biometric Cooperative Onboarding" },
      { time: "11:00 AM - 01:30 PM", topic: "Post-Harvest Waste Reduction Training" }
    ],
    speakers: [
      {
        name: "Ibrahim Musa",
        role: "Agrarian Reform Lead",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300"
      }
    ]
  },
  {
    slug: "port-harcourt-coastal-environment-forum",
    title: "South-South Coastal Preservation & Oil Spill Response Forum",
    category: "Town Hall",
    location: "Port Harcourt",
    venue: "Civic Centre, Port Harcourt City",
    date: "May 14, 2026",
    time: "10:00 AM - 03:00 PM WAT",
    isUpcoming: false,
    image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80&w=1200",
    description: "A community town hall convened to review environmental protection legislation and community compensation frameworks.",
    agenda: [
      { time: "10:00 AM - 12:30 PM", topic: "Environmental Impact Assessment Review" },
      { time: "12:30 PM - 03:00 PM", topic: "Drafting Legislative Recommendations" }
    ],
    speakers: [
      {
        name: "Dr. Kemi Adebayo",
        role: "Environmental Legislation Advisor",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300"
      }
    ]
  }
];