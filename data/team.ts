export interface TeamMember {
    name: string;
    role: string;
    image: string;
    socials: {
        linkedin?: string;
        instagram?: string;
        github?: string;
        email?: string;
    };
}

export const team: TeamMember[] = [
    {
        name: "Piyush Duggal",
        role: "Founder",
        image: "/assets/team/founders/piyush_duggal/profile.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/piyush-duggal/",
            instagram: "https://www.instagram.com/piyush_duggal/",
            github: "https://www.github.com/piyushduggal-source/",
        },
    },
    {
        name: "Rupkatha Suter",
        role: "Founder",
        image: "/assets/team/founders/rupkatha_suter/profile.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/rupkatha-suter-00b4a4253/",
        },
    },
    {
        name: "Arka Banerjee",
        role: "Founder",
        image: "/assets/team/founders/arka_banerjee/profile.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/arka-banerjee-440641241/",
            instagram: "https://www.instagram.com/ravenclaw_iitm/",
        },
    },
    {
        name: "Ansh",
        role: "Secretary",
        image: "/assets/team/sec/ansh/profile.enc", // Placeholder as no image was found in assets
        socials: {
            linkedin: "http://www.linkedin.com/in/ansh-662013298",
            email: "24f1100041@es.study.iitm.ac.in",
        },
    },
];
