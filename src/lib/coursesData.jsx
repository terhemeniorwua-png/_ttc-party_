// lib/coursesData.js
import { Landmark, Vote, PieChart } from "lucide-react";

export const COURSES_MAP = {
  "understanding-government": {
    slug: "understanding-government",
    title: "Understanding Government",
    description:
      "Explore the foundational architecture of the state, separation of powers, and local council administration.",
    instructor: {
      name: "Dr. Farida Bello",
      role: "Senior Fellow, Public Governance Institute",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=1200",
    lessons: [
      {
        id: "01",
        key: "gov-01",
        title: "What Government Does",
        duration: "8 mins",
        summary:
          "Government exists to maintain order, provide public goods, protect human rights, and enforce laws for collective societal welfare.",
        takeaways: [
          "Definition and primary duties of sovereign governance",
          "Public goods vs private services",
          "The social contract between citizens and leadership",
        ],
      },
      {
        id: "02",
        key: "gov-02",
        title: "Executive Branch",
        duration: "10 mins",
        summary:
          "The executive implements and enforces legislation passed by elected representatives.",
        takeaways: [
          "Presidency, ministries, and civil service structure",
          "Execution of public policies and executive orders",
          "Accountability mechanisms and checks on executive authority",
        ],
      },
      {
        id: "03",
        key: "gov-03",
        title: "Legislature",
        duration: "12 mins",
        summary:
          "The legislative assembly drafts laws, oversees government spending, and represents constituency interests.",
        takeaways: [
          "Bicameral assembly dynamics (Senate & House of Representatives)",
          "How a bill becomes law from draft to assent",
          "Constituency advocacy and public hearing participation",
        ],
      },
      {
        id: "04",
        key: "gov-04",
        title: "Judiciary",
        duration: "9 mins",
        summary:
          "An independent judiciary interprets the constitution and resolves disputes impartially.",
        takeaways: [
          "Hierarchical court structures from Magistrates to Supreme Court",
          "Judicial review and constitutional interpretation",
          "Ensuring equal access to justice and legal aid",
        ],
      },
      {
        id: "05",
        key: "gov-05",
        title: "Local Government",
        duration: "11 mins",
        summary:
          "Local councils form the frontline tier of grassroots delivery for basic amenities and ward administration.",
        takeaways: [
          "LG Council responsibilities: primary care, markets, local roads",
          "Grassroots citizen oversight and ward development committees",
          "Demanding financial autonomy for municipal bodies",
        ],
      },
    ],
  },
  "understanding-elections": {
    slug: "understanding-elections",
    title: "Understanding Elections",
    description:
      "Master electoral systems, voter registration rules, polling day procedures, and result collation.",
    instructor: {
      name: "Tunde Williams",
      role: "Electoral Reform Specialist & Advocate",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=1200",
    lessons: [
      {
        id: "01",
        key: "elec-01",
        title: "What Elections Are",
        duration: "7 mins",
        summary:
          "Elections serve as the democratic mechanism for peaceful transfer of power and representative mandate.",
        takeaways: [
          "The democratic imperative for periodic free elections",
          "Direct vs indirect representative elections",
          "Building voter trust through transparent administration",
        ],
      },
      {
        id: "02",
        key: "elec-02",
        title: "Electoral Systems",
        duration: "10 mins",
        summary:
          "Analyze First-Past-The-Post, Proportional Representation, and majoritarian voting systems.",
        takeaways: [
          "Plurality systems vs proportional seat allocations",
          "Impact of electoral system design on minority representation",
          "Electoral law reform benchmarks",
        ],
      },
      {
        id: "03",
        key: "elec-03",
        title: "Voter Registration",
        duration: "8 mins",
        summary:
          "Step-by-step guidance on voter eligibility, biometrics, continuous voter registration, and PVC collection.",
        takeaways: [
          "Qualifications for voter registration eligibility",
          "Biometric capture and voter roll audits",
          "Protecting your vote starting from PVC verification",
        ],
      },
      {
        id: "04",
        key: "elec-04",
        title: "Voting Process",
        duration: "11 mins",
        summary:
          "Navigating polling units on election day: accreditation, secret ballot casting, and dispute handling.",
        takeaways: [
          "Standard polling unit accreditation procedure",
          "Secret balloting rights and assistance for vulnerable voters",
          "Identifying and reporting election day irregularities",
        ],
      },
      {
        id: "05",
        key: "elec-05",
        title: "Election Results",
        duration: "12 mins",
        summary:
          "Understanding public result announcement, ward collation, electronic transmission, and election petitions.",
        takeaways: [
          "Form EC8A polling unit result signing protocols",
          "Electronic transmission of result sheets",
          "Legal timelines for challenging flawed election outcomes",
        ],
      },
    ],
  },
  "understanding-public-budgets": {
    slug: "understanding-public-budgets",
    title: "Understanding Public Budgets",
    description:
      "Demystify public revenues, government spending, fiscal deficit, and open budget monitoring.",
    instructor: {
      name: "Chidinma Osei",
      role: "Public Finance Policy Lead",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    },
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    lessons: [
      {
        id: "01",
        key: "budg-01",
        title: "What Is a Budget?",
        duration: "8 mins",
        summary:
          "A government budget is an annual plan estimating revenues and allocating expenditures across sectors.",
        takeaways: [
          "The annual budget cycle: formulation, enactment, execution, audit",
          "Distinguishing Capital Expenditure from Recurrent Expenditure",
          "Why budget allocation reflects real political priorities",
        ],
      },
      {
        id: "02",
        key: "budg-02",
        title: "Government Revenue",
        duration: "9 mins",
        summary:
          "How public money is generated through taxation, crude/commodity sales, duties, and sovereign borrowing.",
        takeaways: [
          "Federation account allocation framework",
          "Tax revenue sources: VAT, personal income tax, corporate tax",
          "Managing debt sustainability and fiscal risk",
        ],
      },
      {
        id: "03",
        key: "budg-03",
        title: "Public Spending",
        duration: "10 mins",
        summary:
          "Tracing public expenditure from treasury release down to sector procurement and project sites.",
        takeaways: [
          "Prioritizing human capital investments (education & health)",
          "Procurement laws and public tender guidelines",
          "Identifying inflated contracts and budget constituency projects",
        ],
      },
      {
        id: "04",
        key: "budg-04",
        title: "Budget Accountability",
        duration: "11 mins",
        summary:
          "Tools for citizens, civil society, and journalists to track public money and audit releases.",
        takeaways: [
          "Reading public budget documents and portal data",
          "Conducting physical community project audits",
          "Filing Freedom of Information requests for spending records",
        ],
      },
    ],
  },
};