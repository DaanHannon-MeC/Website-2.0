import { post1Content } from './blog-content/post1';
import { post2Content } from './blog-content/post2';
import { post3Content } from './blog-content/post3';

export interface InsightsPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  date: string;
  image: string;
  category: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      content: string;
    }[];
  };
  seo: {
    keywords: {
      primary: string;
      secondary: string[];
    };
    schema: {
      headline: string;
      description: string;
      datePublished: string;
      author: string;
      publisher: string;
    };
  };
}

export const insightsPosts: InsightsPost[] = [
  {
    id: '1',
    slug: 'bedrijfsvideo-mechelen-kosten-prijzen-2026',
    title: 'Bedrijfsvideo Mechelen: Kosten & Prijzen 2026',
    excerpt: 'Wat kost een bedrijfsvideo in Mechelen echt? Transparante prijzen van €1.750 tot €5.000+. Geen agency markup, direct met de filmmaker.',
    metaDescription: 'Wat kost een bedrijfsvideo in Mechelen? Transparante prijzen €1.750-€5.000+. Geen agency markup. Direct met filmmaker.',
    date: '2026-01-15',
    image: '/assets/insights/bedrijfsvideo-mechelen-kosten-prijzen-filmmaker.jpg',
    category: 'Prijzen & Kosten',
    content: post1Content,
    seo: {
      keywords: {
        primary: 'bedrijfsvideo Mechelen',
        secondary: ['videoproductie Mechelen', 'bedrijfsvideo kosten', 'videograaf Mechelen']
      },
      schema: {
        headline: 'Bedrijfsvideo Mechelen: Kosten & Prijzen 2026',
        description: 'Wat kost een bedrijfsvideo in Mechelen? Transparante prijzen €1.750-€5.000+. Geen agency markup. Direct met filmmaker.',
        datePublished: '2026-01-15',
        author: 'Daan Hannon',
        publisher: "Zeget'is"
      }
    }
  },
  {
    id: '2',
    slug: 'productfotografie-video-een-dag-besparing',
    title: 'Productfotografie + Video in Één Dag | Bespaar €3.000+',
    excerpt: 'Waarom twee shoots boeken en betalen? Combineer productfotografie en video in één dag. Efficiënter, goedkoper en consistenter voor je brand.',
    metaDescription: 'Waarom twee shoots? Foto\'s én video in één productie. Efficiënter, goedkoper, consistenter.',
    date: '2026-01-08',
    image: '/assets/insights/productfotografie-video-een-dag-mechelen.jpg',
    category: 'Strategie & Efficiëntie',
    content: post2Content,
    seo: {
      keywords: {
        primary: 'productfotografie video',
        secondary: ['bedrijfsfotografie Mechelen', 'visual content package']
      },
      schema: {
        headline: 'Productfotografie + Video in Één Dag | Bespaar €3.000+',
        description: 'Waarom twee shoots? Foto\'s én video in één productie. Efficiënter, goedkoper, consistenter.',
        datePublished: '2026-01-08',
        author: 'Daan Hannon',
        publisher: "Zeget'is"
      }
    }
  },
  {
    id: '3',
    slug: 'videograaf-kiezen-7-essentiële-vragen',
    title: 'Videograaf Kiezen? 7 Vragen Die Niemand Vertelt',
    excerpt: 'Iedereen toont showreels. Maar niemand legt uit hoe ze werken. Ontdek de 7 vragen die échte kwaliteit onthullen, van een filmmaker met 10 jaar ervaring.',
    metaDescription: 'Iedereen toont reels. Niemand legt uit hoe ze werken. 7 vragen die kwaliteit onthullen. Van filmmaker met 10 jaar ervaring.',
    date: '2025-12-28',
    image: '/assets/insights/videograaf-kiezen-mechelen-tips.jpg',
    category: 'Gids & Advies',
    content: post3Content,
    seo: {
      keywords: {
        primary: 'videograaf kiezen',
        secondary: ['beste videograaf', 'professionele videoproductie']
      },
      schema: {
        headline: 'Videograaf Kiezen? 7 Vragen Die Niemand Vertelt',
        description: 'Iedereen toont reels. Niemand legt uit hoe ze werken. 7 vragen die kwaliteit onthullen. Van filmmaker met 10 jaar ervaring.',
        datePublished: '2025-12-28',
        author: 'Daan Hannon',
        publisher: "Zeget'is"
      }
    }
  }
];
