
export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  aspectRatio: 'tall' | 'wide' | 'square';
}

export interface Step {
  number: string;
  title: string;
  description: string;
}
