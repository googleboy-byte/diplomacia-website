export interface CertCategory {
  categoryId: string;
  title: string;
  description?: string;
  certificates: {
    path: string;
    type: 'image' | 'pdf';
    label?: string;
  }[];
}

export const certCategories: CertCategory[] = [
  {
    categoryId: 'core-members',
    title: 'Core Members',
    description: 'Certificates of Accreditation and core diplomatic standing for our foundational leadership and council.',
    certificates: [
      { path: '/assets/certs/core_member_certs/core certificates-1.pdf', type: 'pdf', label: 'Member 1' },
      { path: '/assets/certs/core_member_certs/core certificates-2.pdf', type: 'pdf', label: 'Member 2' },
      { path: '/assets/certs/core_member_certs/core certificates-3.pdf', type: 'pdf', label: 'Member 3' },
      { path: '/assets/certs/core_member_certs/core certificates-4.pdf', type: 'pdf', label: 'Member 4' },
      { path: '/assets/certs/core_member_certs/core certificates-5.pdf', type: 'pdf', label: 'Member 5' },
      { path: '/assets/certs/core_member_certs/core certificates-6.pdf', type: 'pdf', label: 'Member 6' },
    ]
  },
  {
      categoryId: 'minds-in-motion-session5',
      title: 'Minds in Motion: Session 5',
      description: 'Awards and certificates of merit bridging diplomacy and technology on AI Tracking Systems.',
      certificates: [
          { path: "/assets/certs/minds_in_motion_session5/1stposition.png", type: 'image' },
          { path: "/assets/certs/minds_in_motion_session5/2ndposition.png", type: 'image' },
          { path: "/assets/certs/minds_in_motion_session5/1.png", type: 'image' },
          { path: "/assets/certs/minds_in_motion_session5/2.png", type: 'image' },
          { path: "/assets/certs/minds_in_motion_session5/3.png", type: 'image' },
          { path: "/assets/certs/minds_in_motion_session5/4.png", type: 'image' },
          { path: "/assets/certs/minds_in_motion_session5/5.png", type: 'image' },
          { path: "/assets/certs/minds_in_motion_session5/6.png", type: 'image' },
          { path: "/assets/certs/minds_in_motion_session5/7.png", type: 'image' },
      ]
  },
  {
      categoryId: 'minds-in-motion-session4',
      title: 'Minds in Motion: Session 4',
      description: 'Recognizing discourse surrounding the UGC Guidelines and Equity in Higher Education.',
      certificates: [
          { path: "/assets/certs/minds_in_motion_session4/1stposition.png", type: 'image' },
          { path: "/assets/certs/minds_in_motion_session4/2ndposition.png", type: 'image' },
          { path: "/assets/certs/minds_in_motion_session4/1.png", type: 'image' },
          { path: "/assets/certs/minds_in_motion_session4/2.png", type: 'image' },
          { path: "/assets/certs/minds_in_motion_session4/5.png", type: 'image' },
          { path: "/assets/certs/minds_in_motion_session4/6.png", type: 'image' },
      ]
  }
];
