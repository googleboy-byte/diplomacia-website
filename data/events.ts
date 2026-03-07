export interface EventSession {
    title: string;
    date?: string;
    description: string;
    poster: string;
    videoUrl?: string;
    problemStatementUrl?: string;
    certificates?: string[];
}

export interface FeaturedEvent {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    thumbnail: string;
    sessions: EventSession[];
    customCTAs?: {
        label: string;
        href: string;
        primary?: boolean;
    }[];
}

export const featuredEvents: FeaturedEvent[] = [
    {
        slug: "minds-in-motion",
        title: "Minds in Motion",
        subtitle: "A Perspective Forum",
        description: "Our flagship debate series exploring diverse geopolitical themes, policy challenges, and social narratives through high-impact discourse.",
        thumbnail: "/assets/featured_events/minds_in_motion/session3/MIM.png",
        sessions: [
            // ... (previous sessions)
            {
                title: "Geopolitics & National Security",
                description: "An intensive discussion on India's Kashmir policy and the evolving landscape of national security in the 21st century.",
                poster: "/assets/featured_events/minds_in_motion/session1/iitm_diplomacia-29-01-2026-0001.jpg",
                videoUrl: "https://drive.google.com/file/d/1HjTidJuzZ6knvk0OowdfG1f_yj3LJEm7/view",
            },
            {
                title: "Sunlight on Demand",
                description: "Continuation of our deep dive into policy frameworks, focusing on regional stability and diplomatic strategies.",
                poster: "/assets/featured_events/minds_in_motion/session2/iitm_diplomacia-29-01-2026-0002.webp",
                videoUrl: "https://drive.google.com/file/d/1pZhHyLaeQJ26ZNPp2xSIt76bgSEelC1R/view",
                problemStatementUrl: "https://raw.githubusercontent.com/googleboy-byte/diplomacia-assets-public/7bbd33da1e34760b1d5ba9242cccf8a7b58c38a6/MiM%20Problem%20Statements/Minds_in_Motion_Session_2%20Problem%20Statement.pdf",
            },
            {
                title: "Feminism Without Colonialism (Part 1)",
                description: "Questioning historical narratives and exploring the intersection of gender, heritage, and decolonial thought.",
                poster: "/assets/featured_events/minds_in_motion/session3/MIM.png",
                videoUrl: "https://youtu.be/rwjdAGODG64",
                problemStatementUrl: "https://raw.githubusercontent.com/googleboy-byte/diplomacia-assets-public/7bbd33da1e34760b1d5ba9242cccf8a7b58c38a6/MiM%20Problem%20Statements/Mind%20in%20Motion%20Session%203.pdf",
            },
            {
                title: "Feminism Without Colonialism (Part 2)",
                description: "Concluding our exploration into decolonial feminism with a focus on contemporary leadership and social change.",
                poster: "/assets/featured_events/minds_in_motion/session3_part2/MIM Feminism part 2.png",
                problemStatementUrl: "https://raw.githubusercontent.com/googleboy-byte/diplomacia-assets-public/7bbd33da1e34760b1d5ba9242cccf8a7b58c38a6/MiM%20Problem%20Statements/Mind%20in%20Motion%20Session%203.pdf",
            },
            {
                title: "UGC Guidelines & Equity in Higher Education",
                description: "Unpacking the UGC Guidelines (2026) and what equity in higher education really means. Is inclusion at odds with merit — or can both coexist?",
                poster: "/assets/featured_events/minds_in_motion/session4/session4_poster.png",
                videoUrl: "https://youtu.be/KxVZwjQW1BY",
                problemStatementUrl: "https://raw.githubusercontent.com/googleboy-byte/diplomacia-assets-public/7bbd33da1e34760b1d5ba9242cccf8a7b58c38a6/MiM%20Problem%20Statements/Minds%20in%20Motion%20Session%204%20%20Problem%20Statement.pdf",
                certificates: [
                    "/assets/featured_events/minds_in_motion/session4/certificates/1stposition.png",
                    "/assets/featured_events/minds_in_motion/session4/certificates/2ndposition.png",
                    "/assets/featured_events/minds_in_motion/session4/certificates/1.png",
                    "/assets/featured_events/minds_in_motion/session4/certificates/2.png",
                    "/assets/featured_events/minds_in_motion/session4/certificates/5.png",
                    "/assets/featured_events/minds_in_motion/session4/certificates/6.png",
                ]
            },
            {
                title: "AI-Powered Phone Tracking",
                date: "28th February 2026",
                description: "Security as Protection or Surveillance Overreach? Exploring the ethical and security implications of AI-driven phone tracking in the modern age.",
                poster: "/assets/featured_events/minds_in_motion/session5/poster.jpeg",
                videoUrl: "https://www.youtube.com/watch?v=L2d2GNLVzFY",
                problemStatementUrl: "https://raw.githubusercontent.com/googleboy-byte/diplomacia-assets-public/7bbd33da1e34760b1d5ba9242cccf8a7b58c38a6/MiM%20Problem%20Statements/Minds%20in%20Motion%20session5%20problem%20statement.pdf",
                certificates: [
                    "/assets/featured_events/minds_in_motion/session5/certificates/1stposition.png",
                    "/assets/featured_events/minds_in_motion/session5/certificates/2ndposition.png",
                    "/assets/featured_events/minds_in_motion/session5/certificates/1.png",
                    "/assets/featured_events/minds_in_motion/session5/certificates/2.png",
                    "/assets/featured_events/minds_in_motion/session5/certificates/3.png",
                    "/assets/featured_events/minds_in_motion/session5/certificates/4.png",
                    "/assets/featured_events/minds_in_motion/session5/certificates/5.png",
                    "/assets/featured_events/minds_in_motion/session5/certificates/6.png",
                    "/assets/featured_events/minds_in_motion/session5/certificates/7.png",
                ]
            },
        ],
    },
    {
        slug: "position-paper-archive",
        title: "Position Paper Archive",
        subtitle: "The Vault of Strategic Thought",
        description: "A comprehensive repository of scholarly research, formal policy statements, and strategic insights crafted by our diplomatic community of thinkers at IITM BS.",
        thumbnail: "/assets/featured_events/ppa/thumbnail.png",
        sessions: [],
        customCTAs: [
            {
                label: "View Archive",
                href: "/events/ppa-archive",
            },
            {
                label: "Submit Paper",
                href: "/events/position-paper-submit",
                primary: true,
            },
        ],
    },
];
