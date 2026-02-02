
import { Project, Step } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'NIO Documentary',
    category: 'Documentary',
    thumbnail: '/assets/bts/Frame - Portfolio.jpg',
    videoUrl: '/assets/videos/NIO Documentary.mp4',
    aspectRatio: 'wide'
  },
  {
    id: '2',
    title: 'Stad Mechelen Campagne',
    category: 'Commercial Campaign',
    thumbnail: '/assets/bts/Bts.jpg',
    videoUrl: '/assets/videos/Stad Mechelen Campagne.mp4',
    aspectRatio: 'wide'
  },
  {
    id: '3',
    title: 'Agentschap Inburgering & Integratie',
    category: 'Commercial Campaign',
    thumbnail: '/assets/bts/bts 1.jpg',
    videoUrl: '/assets/videos/Agentschap Inburgering & Integratie_Comercial Campaign.mp4',
    aspectRatio: 'wide'
  },
  {
    id: '4',
    title: 'Albert Heijn Nieuwjaarsduik',
    category: 'Social Media Content',
    thumbnail: '/assets/bts/bts 2.jpg',
    videoUrl: '/assets/videos/AH_NIEUWJAARSDUIK_Social media Content.mp4',
    aspectRatio: 'wide'
  },
  {
    id: '5',
    title: 'IMPACT',
    category: 'Commercial',
    thumbnail: '/assets/bts/daan-story.jpg',
    videoUrl: '/assets/videos/IMPACT - Commercial.mp4',
    aspectRatio: 'wide'
  },
  {
    id: '6',
    title: 'Daphne Paelinck - Christine',
    category: 'Music Video',
    thumbnail: '/assets/bts/Frame - Portfolio.jpg',
    videoUrl: '/assets/videos/Daphne Paelinck - Christine Edit V2.mp4',
    aspectRatio: 'wide'
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    number: '01',
    title: 'De Babbel',
    description: 'Geen ellenlange vergaderingen. We zitten 30 minuten samen, jij vertelt wat je nodig hebt, wij zeggen hoe we het gaan flikken. Direct en eerlijk.'
  },
  {
    number: '02',
    title: 'De Draaidag',
    description: 'We komen langs met een kleine, high-end crew. Geen gedoe met tussenpersonen. Jij behoudt de controle, wij zorgen voor de cinematic magic.'
  },
  {
    number: '03',
    title: 'De Oplevering',
    description: 'Je krijgt je content sneller dan je gewend bent. Klaar om je merk naar een hoger niveau te tillen. Zonder agency markup.'
  }
];

export const BTS_PHOTOS = [
  '/assets/bts/Bts.jpg',
  '/assets/bts/bts 1.jpg',
  '/assets/bts/bts 2.jpg',
  '/assets/bts/daan-story.jpg',
];

export const BRAND_LOGOS = [
  { name: 'NIO', image: '/assets/logos/NIO_logo.svg.png' },
  { name: 'Albert Heijn', image: '/assets/logos/Albert_Heijn_Logo.svg.png' },
  { name: 'Stad Mechelen', image: '/assets/logos/mechelen.png' },
  { name: 'Agentschap Inburgering', image: '/assets/logos/Agentschap inburgering.jpeg' },
  { name: 'KU Leuven', image: '/assets/logos/KU-Leuven-logo.png' },
  { name: 'Thuis', image: '/assets/logos/ThuisLogo2025.png' },
  { name: 'ELGi', image: '/assets/logos/ELGi_Equipments_Logo_(2020).png' },
];

export const POSTAL_DATA = [
  { code: '2800', city: 'Mechelen' },
  { code: '2810', city: 'Muizen' },
  { code: '2811', city: 'Hombeek' },
  { code: '2812', city: 'Muizen' },
  { code: '2820', city: 'Bonheiden' },
  { code: '2830', city: 'Willebroek' },
  { code: '2840', city: 'Rumst' },
  { code: '2845', city: 'Niel' },
  { code: '2850', city: 'Boom' },
  { code: '2860', city: 'Sint-Katelijne-Waver' },
  { code: '2870', city: 'Puurs-Sint-Amands' },
  { code: '2880', city: 'Bornem' },
  { code: '2890', city: 'Lippelo' }
];

export const POSTAL_CODES = POSTAL_DATA.map(d => d.code);
