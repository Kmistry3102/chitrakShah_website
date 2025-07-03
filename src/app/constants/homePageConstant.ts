import {
  Territory,
  RealEstateInterest,
  WhyImHereReason,
  PortfolioItem,
  Article,
  ConnectOption,
  AccessLink,
  RIDCardConstants,
  WhoAmIRole,
  HeroBadge,
  TimelineItem,
  GalleryItem,
} from "../types/homePageTypes";
import {
  FaMapMarkerAlt,
  FaBullseye,
  FaGlobe,
  FaHome,
  FaBuilding,
  FaChartLine,
  FaLightbulb,
  FaHandshake,
  FaRocket,
  FaSitemap,
  FaUniversity,
  FaGraduationCap,
  FaUserTie,
  FaVenus,
  FaFileAlt,
  FaUserFriends,
  FaDownload,
  FaPaperPlane,
  FaRegComments,
  FaUserPlus,
  FaQrcode,
  FaRegEnvelope,
} from "react-icons/fa";
import {
  FiUsers,
  FiCalendar,
  FiMapPin,
  FiStar,
  FiKey,
  FiCode,
  FiUser,
  FiHome,
} from "react-icons/fi";
import { FaRankingStar } from "react-icons/fa6";

export const TERRITORIES: Territory[] = [
  {
    icon: FaMapMarkerAlt,
    title: "Home Base",
    subtitle: "Ahmedabad, Gujarat",
    description: "Primary operational headquarters and development focus",
    status: "Active",
  },
  {
    icon: FaBullseye,
    title: "Interest Areas",
    subtitle: "Tier 1 & Tier 2 Cities",
    description: "Strategic expansion targets across India",
    status: "Exploring",
  },
  {
    icon: FaGlobe,
    title: "Global Vision",
    subtitle: "International Markets",
    description: "Future expansion through technology platform",
    status: "Planning",
  },
];

export const REAL_ESTATE_INTERESTS: RealEstateInterest[] = [
  {
    icon: FaHome,
    title: "Residential Development",
    subtitle: "Premium housing projects with modern amenities",
    description: "Luxury apartments, villas, and integrated townships",
  },
  {
    icon: FaBuilding,
    title: "Commercial Real Estate",
    subtitle: "Office spaces and retail developments",
    description: "Modern office complexes and strategic retail locations",
  },
  {
    icon: FaChartLine,
    title: "PropTech Innovation",
    subtitle: "Technology-driven real estate solutions",
    description:
      "Digital platforms, AI-driven analytics, and smart property management",
  },
  {
    icon: FiUsers,
    title: "Community Building",
    subtitle: "Creating sustainable living ecosystems",
    description:
      "Integrated communities with social infrastructure and amenities",
  },
];

export const WHY_IM_HERE_REASONS: WhyImHereReason[] = [
  {
    icon: FaLightbulb,
    title: "Share Vision",
    subtitle: "Transform real estate through systematic innovation",
    description:
      "Building identity-first, territory-aligned, and trust-led systems",
  },
  {
    icon: FaHandshake,
    title: "Connect & Collaborate",
    subtitle: "Partner with like-minded professionals and investors",
    description:
      "Joint ventures, strategic partnerships, and knowledge exchange",
  },
  {
    icon: FaRocket,
    title: "Drive Innovation",
    subtitle: "Pioneer the future of real estate technology",
    description: "R Universe platform and ecosystem development",
  },
  {
    icon: FaSitemap,
    title: "Build Network",
    subtitle: "Create a trusted community of real estate professionals",
    description: "Mentorship, education, and industry transformation",
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    icon: FaBuilding,
    title: "Shivalik Group",
    role: "CMD",
    description: "Iconic projects shaping Ahmedabad's skyline",
    info: "20+ Projects",
    infoType: "Projects",
    details:
      "Leading real estate development with 20+ premium projects across Ahmedabad, focusing on sustainable and innovative architecture.",
  },
  {
    icon: FaUniversity,
    title: "R Universe",
    role: "Creator & CMD",
    description: "India's Real Estate Operating System",
    info: "System Innovation",
    infoType: "Innovation",
    details:
      "Revolutionary platform transforming how real estate operates through identity-first, territory-aligned systems.",
  },
  {
    icon: FaUserTie,
    title: "Shivalik Fund",
    role: "CMD",
    description: "Capital for land- and rental-backed real estate growth",
    info: "Investment Fund",
    infoType: "Fund",
    details:
      "Strategic investment fund focusing on high-potential real estate opportunities with strong fundamentals.",
  },
  {
    icon: FaGraduationCap,
    title: "SIRE",
    role: "CMD",
    description: "Role-based learning ecosystem for real estate professionals",
    info: "1000+ Students",
    infoType: "Education",
    details:
      "Comprehensive education platform offering specialized courses for different roles in the real estate industry.",
  },
  {
    icon: FaLightbulb,
    title: "SHINE",
    role: "Founder",
    description: "Youth-led innovation platform for real estate",
    info: "Youth Focus",
    infoType: "Youth",
    details:
      "Empowering young professionals with innovative tools and mentorship in real estate.",
  },
  {
    icon: FaVenus,
    title: "WIRE",
    role: "Co-Founder",
    description: "Women in Real Estate platform",
    info: "Women Empowerment",
    infoType: "Women",
    details:
      "Supporting and empowering women professionals in the real estate industry through networking and opportunities.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "WorqHub",
    role: "Strategist",
    description: "Territory-based coworking ecosystem",
    info: "Coworking Spaces",
    infoType: "Coworking",
    details:
      "Creating flexible workspace solutions aligned with territory-based business models.",
  },
];

export const ARTICLES: Article[] = [
  {
    title: " Legacy Through Real Clarity",
    description:
      "Legacy isn't built on chaos — it's built on clear processes, deep understanding, and honest advice. This is a call to all advisors in real estate: lead with clarity, and the respect will follow.",
    image: "/article-1.png",
    url: "https://www.linkedin.com/posts/chitrakshivalik_be-a-builder-of-systems-not-just-a-seller-activity-7338184267576848384-ATuw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFvbzN4BzQ2_CFeRhvAmkPiWV8uQ2FhdTkQ",
  },
  {
    title: "Paracetamol or Painkiller?",
    description:
      "Are you offering surface-level solutions, or solving deep problems? Real success comes from listening, diagnosing, and serving with intent — not rushing with a pitch.",
    image: "/article-2.png",
    url: "https://www.linkedin.com/posts/chitrakshivalik_chitrakshah-realestate-realestateinvesting-activity-7337819782546702336-tAl3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFvbzN4BzQ2_CFeRhvAmkPiWV8uQ2FhdTkQ",
  },
  {
    title: "Learn Early. Act Early.",
    description:
      "The biggest cost in real estate isn't money — it's delay. Every missed chance started with hesitation. The next opportunity is waiting. Are you?",
    image: "/article-3.png",
    url: "https://www.linkedin.com/posts/chitrakshivalik_realestate-investmentmindset-chitrakshah-activity-7342166740195291136-mrkO?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFvbzN4BzQ2_CFeRhvAmkPiWV8uQ2FhdTkQ ",
  },
  {
    title: "Real Estate. Real Capital.",
    description:
      "This is not speculative money. It's strategic. Rooted in experience. Directed toward growth zones like Ognaj. More deployments coming.",
    image: "/article-4.png",
    url: "https://www.linkedin.com/posts/chitrakshivalik_realestate-realestateinvestment-chitrakshah-activity-7337093304410423296-zDMf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFvbzN4BzQ2_CFeRhvAmkPiWV8uQ2FhdTkQ",
  },
  {
    title: "Learn. Build. Lead. Repeat.",
    description:
      "This isn't just a course — it's a journey from student to site. With 11 structured modules, real-world exposure, and real industry transformation, we're not teaching real estate. We're building the people who'll lead it.",
    image: "/article-5.png",
    url: "https://www.linkedin.com/posts/chitrakshivalik_realestate-realestatelearning-chitrakshah-activity-7329122814668570624-hWLG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFvbzN4BzQ2_CFeRhvAmkPiWV8uQ2FhdTkQ",
  },
  {
    title: "Solve the System, First",
    description:
      "If something keeps breaking, don't fix the person — fix the system. True scale starts where ownership meets clarity",
    image: "/article-6.png",
    url: "https://www.linkedin.com/posts/chitrakshivalik_chitrakshah-leadership-realestate-activity-7326946664328400896-eWiT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFvbzN4BzQ2_CFeRhvAmkPiWV8uQ2FhdTkQ",
  },
  
];

export const CONNECT_OPTIONS: ConnectOption[] = [
  {
    icon: FaRegComments,
    title: "Connect",
    subtitle: "Proposal /\nMeeting / Speaking",
  },
  {
    icon: FaUserPlus,
    title: "Join My Circle",
    subtitle: "Intent-based\nrequest form",
  },
  {
    icon: FaQrcode,
    title: "Add R ID",
    subtitle: "Save via QR / vCard",
  },
  {
    icon: FaRegEnvelope,
    title: "Get Email Updates",
    subtitle: "Email opt-in",
  },
];

export const ACCESS_LINKS: AccessLink[] = [
  {
    icon: FaFileAlt,
    title: "PDF",
    label: "Chitrak Shah Profile",
    url: "/PDF Chitrak Shah.pdf",
  },
  {
    icon: FaBuilding,
    title: "Site",
    label: "Shivalik Group",
    url: "https://shivalikgroup.com",
  },
  {
    icon: FaGraduationCap,
    title: "Courses",
    label: "SIRE",
    url: "https://www.shivalik.institute/",
  },
  {
    icon: FaFileAlt,
    title: "Deck",
    label: "Shivalik Fund",
    url: "https://shivalikgroup.com/ecosystem/fund",
  },
  {
    icon: FaUserFriends,
    title: "Join (Coming Soon)",
    label: "R Universe Waitlist",
    url: "/",
  },
  {
    icon: FaPaperPlane,
    title: "Submit",
    label: "JV Proposal Form",
    url: "https://forms.gle/CddpePdp7mSxSV3k6",
  },
  {
    icon: FaDownload,
    title: "Template",
    label: "Pitch Format",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeXE9v5EwPOyK7ghsaiFef6HK_7HC5HlXUcUkrTBYle92VDZQ/viewform",
  },
];

export const RID_CARD_CONSTANTS: RIDCardConstants = {
  TITLE: "RID Card",
  LEFT: [
    {
      icon: FiKey,
      label: "R ID",
      value: "CS-R-001",
      valueClass: "text-white",
    },
    {
      icon: FiStar,
      label: "Trust Score",
      value: "92 / 100",
      valueClass: "text-gray-200",
    },
    {
      icon: FaRankingStar,
      label: "Tier",
      value: "Verified – Tier 1",
      valueClass: "text-white",
    },
  ],
  RIGHT: [
    {
      icon: FiCalendar,
      label: "Valid Till",
      value: "Dec 2026",
      valueClass: "text-white",
    },
    {
      icon: FiMapPin,
      label: "Territories",
      value: "VD01, SH01, GC01",
      valueClass: "text-white",
    },
    {
      icon: FiKey,
      label: "Blockchain ID",
      value: "0x4C17R4k...a872",
      valueClass: "text-gray-300 font-mono",
    },
  ],
  PORTAL_LABEL: "R ID Portal",
  PORTAL_DESC: "Click Card to know details",
};

export const WHO_AM_I_ROLES: WhoAmIRole[] = [
  {
    icon: FaBuilding,
    title: "Real Estate Developer",
    caption: "Urban spaces. Timeless landmarks.",
  },
  {
    icon: FiCode,
    title: "Tech Owner & Innovator",
    caption: "Reimagining real estate with code.",
  },
  {
    icon: FaUserTie,
    title: "Fund Manager",
    caption: "Strategic capital in motion.",
  },
  {
    icon: FiUser,
    title: "Industry Leader",
    caption: "Guiding the next evolution.",
  },
];

export const CS_Image = "/chitrak-shah.jpg";
export const HERO_HEADING = "CHITRAK SHAH";
export const Description = "Real Estate Ecosystem Architect";
export const HERO_SUBTITLE = "Powering India's Real Estate Operating System";
export const TAGLINE_ITEMS = ["One ID", "One System", "One Universe"];
export const HERO_BADGES: HeroBadge[] = [
  { icon: FiMapPin, label: "Ahmedabad, India" },
  { icon: FiHome, label: "Real Estate Tech" },
  { icon: FiStar, label: "Trust Score : ", value: "92/100" },
];

export const TIMELINE: TimelineItem[] = [
  { year: "1980", text: "Born in Ahmedabad" },
  { year: "2001", text: "Entered real estate professionally" },
  { year: "2006", text: "Launched first major project" },
  { year: "2012", text: "Formalized Shivalik Group" },
  { year: "2018", text: "Founded SIRE" },
  { year: "2020", text: "Formed Shivalik Fund" },
  { year: "2023", text: "Designed Real Estate Operating System" },
  { year: "2024", text: "Formed R Universe" },
  { year: "2025", text: "Territory execution begins" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: "Gift City Development Talk",
    image: "/podcast-1.jpg", // replace with giftCityImg
    link: "https://www.youtube.com/watch?v=nN3ZAM24g60",
  },
  {
    title: "Tech Expo Speaker Insights",
    image: "/podcast-2.2.webp", // replace with techExpoImg
    link: "https://www.youtube.com/watch?v=9sRItjQgfUY",
  },
  {
    title: "Future of Real Estate",
    image: "/podcast-3.2.avif", // replace with futurePodcastImg
    link: "https://www.youtube.com/watch?v=g50yDcyfugg",
  },
  {
    title: "Sanjay Raval Show",
    image: "/podcast-4.jpg", // replace with sanjayRavalImg
    link: "https://www.youtube.com/watch?v=WPYCLdaHZjc",
  },
  {
    title: "Gujarati Entrepreneur Interview",
    image: "/podcast-5.png", // replace with gujaratiInterviewImg
    link: "https://youtu.be/oT4HvqIcseY",
  },
  {
    title: "The Person Within with Ojas Rawal",
    image: "/podcast-6.png", // replace with gujaratiInterviewImg
    link: "https://www.youtube.com/watch?v=MGFhrDETogE",
  },
  {
    title: "How To Start-Up in Real Estate",
    image: "/podcast-7.avif", // replace with gujaratiInterviewImg
    link: "https://www.youtube.com/watch?v=ocpARhntF_I",
  },
];
