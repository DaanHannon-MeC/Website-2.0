
import { Project, Step } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Minimalist Furniture',
    category: 'Product Video',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://player.vimeo.com/external/515848529.sd.mp4?s=366078d285bfd74de542f22681e7c2c60416a117c32603cb7ac86fb4b0400577',
    aspectRatio: 'tall'
  },
  {
    id: '2',
    title: 'Gentse Straten',
    category: 'Lifestyle',
    thumbnail: 'https://images.unsplash.com/photo-1492691523567-6119e2aa1b09?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://player.vimeo.com/external/545026513.sd.mp4?s=e00b017d2ea942c7b0102a930379391a21a47e4f&profile_id=165',
    aspectRatio: 'wide'
  },
  {
    id: '3',
    title: 'Eco Branding',
    category: 'Corporate Content',
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://player.vimeo.com/external/564069129.sd.mp4?s=c91842dda5bd5317aaa2ecbc2bac83dec8e1a763&profile_id=165',
    aspectRatio: 'square'
  },
  {
    id: '4',
    title: 'The Modern Artisan',
    category: 'Testimonial',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://player.vimeo.com/external/537601418.sd.mp4?s=b1b125e07a2490cf87ec62e8518462f78aaa3f48&profile_id=165',
    aspectRatio: 'tall'
  },
  {
    id: '5',
    title: 'Tech Summit 2024',
    category: 'Event Recap',
    thumbnail: 'https://images.unsplash.com/photo-1505373630103-89d00c2a58e9?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://player.vimeo.com/external/537601249.sd.mp4?s=285561e8bcebc9b737854e78b97e0c21afe0f948&profile_id=165',
    aspectRatio: 'wide'
  },
  {
    id: '6',
    title: 'Industrial Flow',
    category: 'Product Video',
    thumbnail: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://player.vimeo.com/external/537601393.sd.mp4?s=12db03cde94f276d91b3513b73686bb6f06362ef&profile_id=165',
    aspectRatio: 'square'
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
  'https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=1000', // Cameraman B&W style
  'https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&q=80&w=1000', // Snow shoot style
  'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000', // Indoor warm light style
  'https://images.unsplash.com/photo-1598466173997-3490131e59bc?auto=format&fit=crop&q=80&w=1000', // Group snow shoot style
];

export const BRAND_LOGOS = [
  'VLAANDEREN', 'UNIZO', 'SABATO', 'MOOSE', 'LUMEN', 'GENT', 'ANTWERPEN', 'BRUSSEL'
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
