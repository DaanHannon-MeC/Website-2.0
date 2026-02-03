
import { Project, Step } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Agentschap Inburgering & Integratie',
    category: 'Commercial Campaign',
    thumbnail: '/assets/thumbnails/Thumb Agentschap inburgering.png',
    videoUrl: '/assets/videos/Agentschap Inburgering & Integratie_Comercial Campaign.mp4',
    aspectRatio: 'wide'
  },
  {
    id: '2',
    title: 'Thuis',
    category: 'Social Content',
    thumbnail: '/assets/thumbnails/Thumb Thuis.png',
    videoUrl: '/assets/videos/Thuis - Social Content.mp4',
    aspectRatio: 'wide'
  },
  {
    id: '3',
    title: 'NIO Documentary',
    category: 'Documentary',
    thumbnail: '/assets/thumbnails/Thumb Nio.png',
    videoUrl: '/assets/videos/NIO Documentary.mp4',
    aspectRatio: 'wide'
  },
  {
    id: '4',
    title: 'Albert Heijn Nieuwjaarsduik',
    category: 'Event Recap',
    thumbnail: '/assets/thumbnails/Thumb Albert Heijn.png',
    videoUrl: '/assets/videos/AH_NIEUWJAARSDUIK_Social media Content.mp4',
    aspectRatio: 'wide'
  },
  {
    id: '5',
    title: 'Stad Mechelen Campagne',
    category: 'Commercial Campaign',
    thumbnail: '/assets/thumbnails/Thumb Mechelen.png',
    videoUrl: '/assets/videos/Stad Mechelen Campagne.mp4',
    aspectRatio: 'wide'
  },
  {
    id: '6',
    title: 'IMPACT',
    category: 'Commercial',
    thumbnail: '/assets/thumbnails/Thumb Impact.png',
    videoUrl: '/assets/videos/IMPACT - Commercial.mp4',
    aspectRatio: 'wide'
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    number: '01',
    title: "Zeget'is",
    description: 'Geen ellenlange vergaderingen. We zitten 30 minuten samen, jij vertelt wat je nodig hebt, wij zeggen hoe we het gaan aanpakken. Direct, eerlijk, op maat van je budget.'
  },
  {
    number: '02',
    title: 'De Draaidag',
    description: 'Ik kom langs met compact, professioneel materiaal. Geen gedoe met tussenpersonen. Jij houdt de controle, ik zorg voor de cinematic magic.'
  },
  {
    number: '03',
    title: 'De Oplevering',
    description: 'Je krijgt je content sneller dan je gewend bent. Klaar om je merk naar een hoger niveau te tillen. Zonder agency markup.'
  }
];

export const BTS_PHOTOS = [
  { image: '/assets/bts/Bts - Agentschap Inburgering en Integratie.jpg', project: 'Agentschap Inburgering' },
  { image: '/assets/bts/bts 1 - Agentschap Inburgering en Integratie.jpg', project: 'Agentschap Inburgering' },
  { image: '/assets/bts/bts 2 - Agentschap Inburgering en Integratie.jpg', project: 'Agentschap Inburgering' },
  { image: '/assets/bts/Bts - Deloitte.jpg', project: 'Deloitte' },
  { image: '/assets/bts/BTS_LIDL-286.jpg', project: 'Lidl Campaign' },
  { image: '/assets/bts/BTS_LIDL-518.jpg', project: 'Lidl Campaign' },
  { image: '/assets/bts/BTS_LIDL-666.jpg', project: 'Lidl Campaign' },
  { image: '/assets/bts/BTS_TEJOCAMPAGNE-3.jpg', project: 'Tejo Campaign' },
  { image: '/assets/bts/Bts STERK 2.jpg', project: 'STERK Project' },
  { image: '/assets/bts/Bts sterk.jpg', project: 'STERK Project' },
];

export const BRAND_LOGOS = [
  { name: 'NIO', image: '/assets/logos/NIO_logo.svg.png', className: '' },
  { name: 'Albert Heijn', image: '/assets/logos/Albert_Heijn_Logo.svg.png', className: '' },
  { name: 'Stad Mechelen', image: '/assets/logos/mechelen.png', className: 'h-8 md:h-12 w-auto object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all mix-blend-multiply' },
  { name: 'Agentschap Inburgering', image: '/assets/logos/Agentschap inburgering.jpeg', className: 'h-8 md:h-12 w-auto object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all mix-blend-multiply' },
  { name: 'KU Leuven', image: '/assets/logos/KU-Leuven-logo.png', className: 'h-8 md:h-12 w-auto object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all mix-blend-multiply' },
  { name: 'Thuis', image: '/assets/logos/ThuisLogo2025.png', className: '' },
  { name: 'ELGi', image: '/assets/logos/ELGi_Equipments_Logo_(2020).png', className: 'h-8 md:h-12 w-auto object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all mix-blend-multiply' },
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
