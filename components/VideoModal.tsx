import React, { useEffect, useRef } from 'react';
import { Project } from '../types';

interface VideoModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ project, isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 bg-brand-black/95 backdrop-blur-lg z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-[110] text-brand-cream hover:text-brand-green transition-colors group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className="relative w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-brand-black rounded-lg overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            src={project.videoUrl}
            controls
            autoPlay
            className="w-full"
          />
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs tracking-widest uppercase text-brand-green font-bold mb-2">
            {project.category}
          </p>
          <h3 className="font-serif text-3xl md:text-4xl text-brand-cream mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-brand-cream/60">
            Klik buiten de video of druk op ESC om te sluiten
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
