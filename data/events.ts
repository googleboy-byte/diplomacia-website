export interface EventSession {
    title: string;
    date?: string;
    description: string;
    poster: string;
    videoUrl?: string;
}

export interface FeaturedEvent {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    thumbnail: string;
    sessions: EventSession[];
}

export const featuredEvents: FeaturedEvent[] = [
    {
        slug: "minds-in-motion",
        title: "Minds in Motion",
        subtitle: "A Perspective Forum",
        description: "Our flagship debate series exploring diverse geopolitical themes, policy challenges, and social narratives through high-impact discourse.",
        thumbnail: "/assets/featured_events/minds_in_motion/session3/MIM.png",
        sessions: [
            {
                title: "Session 1: Geopolitics & National Security",
                description: "An intensive discussion on India's Kashmir policy and the evolving landscape of national security in the 21st century.",
                poster: "/assets/featured_events/minds_in_motion/session1/iitm_diplomacia-29-01-2026-0001.jpg",
            },
            {
                title: "Session 2: National Security Policy",
                description: "Continuation of our deep dive into policy frameworks, focusing on regional stability and diplomatic strategies.",
                poster: "/assets/featured_events/minds_in_motion/session2/iitm_diplomacia-29-01-2026-0002.webp",
            },
            {
                title: "Session 3: Feminism Without Colonialism (Part 1)",
                description: "Questioning historical narratives and exploring the intersection of gender, heritage, and decolonial thought.",
                poster: "/assets/featured_events/minds_in_motion/session3/MIM.png",
                videoUrl: "https://youtu.be/rwjdAGODG64",
            },
            {
                title: "Session 3: Feminism Without Colonialism (Part 2)",
                description: "Concluding our exploration into decolonial feminism with a focus on contemporary leadership and social change.",
                poster: "/assets/featured_events/minds_in_motion/session3_part2/MIM Feminism part 2.png",
            },
            {
                title: "Session 4: UGC Guidelines & Equity in Higher Education",
                description: "Unpacking the UGC Guidelines (2026) and what equity in higher education really means. Is inclusion at odds with merit — or can both coexist?",
                poster: "/assets/featured_events/minds_in_motion/session4/session4_poster.png",
                videoUrl: "https://youtu.be/KxVZwjQW1BY",
            },
        ],
    },
];
