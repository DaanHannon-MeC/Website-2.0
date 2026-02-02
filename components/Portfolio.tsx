import React, { useRef, useState, useEffect } from 'react';
import VideoModal from './VideoModal';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const PortfolioItem: React.FC<{
  project: Project;
  depth: number;
  onHover: (hovering: boolean) => void;
  mousePos: { x: number, y: number };
  onClick: () => void;
}> = ({ project, depth, onHover, mousePos, onClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoAspect, setVideoAspect] = useState<number>(16 / 9);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        const aspect = video.videoWidth / video.videoHeight;
        setVideoAspect(aspect);
      };
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Parallax calculation
  const getParallaxStyle = () => {
    const factorX = (mousePos.x - window.innerWidth / 2) * (depth * 0.02);
    const factorY = (mousePos.y - window.innerHeight / 2) * (depth * 0.02);
    return {
      transform: `translate3d(${factorX}px, ${factorY}px, 0)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  return (
    <div
      ref={containerRef}
      className={`relative group cursor-pointer mb-16 md:mb-0`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={getParallaxStyle()}
    >
      <div
        className={`relative overflow-hidden rounded-lg transition-all duration-700 ease-in-out ${isHovered ? 'scale-105 shadow-2xl' : 'scale-100 shadow-xl'}`}
        style={{ aspectRatio: videoAspect }}
      >
        {/* Thumbnail */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className={`w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          loading="lazy"
        />

        {/* Video overlay */}
        <div className={`absolute inset-0 z-10 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="absolute bottom-0 left-0 p-4 md:p-6 z-20 pointer-events-none transition-transform duration-500 group-hover:translate-x-2 bg-gradient-to-t from-brand-black/80 via-brand-black/40 to-transparent w-full">
          <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-brand-green mb-1 font-bold">{project.category}</p>
          <h3 className="font-serif text-lg md:text-2xl italic">{project.title}</h3>

          {/* Click to play indicator - mobile only */}
          <div className="md:hidden mt-2 flex items-center gap-2 text-brand-cream/60">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-brand-green" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="text-xs">Tik om te bekijken</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringItem, setIsHoveringItem] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Wanda style: items are scattered with different depths
  const depths = [1, 3, 2, 4, 1.5, 2.5];

  return (
    <div className="relative min-h-screen bg-brand-black py-20 md:py-40 overflow-hidden px-4 md:px-8 lg:px-20">
      {/* Custom Mouse Indicator - Hidden on mobile */}
      <div
        className="hidden md:flex custom-cursor items-center justify-center pointer-events-none"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          opacity: isHoveringItem ? 1 : 0
        }}
      >
        <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-2xl scale-75 group">
           <svg viewBox="0 0 24 24" className="w-8 h-8 fill-brand-cream ml-1" xmlns="http://www.w3.org/2000/svg">
             <path d="M8 5v14l11-7z" />
           </svg>
           <div className="absolute inset-0 border border-brand-cream/30 rounded-full animate-ping scale-150"></div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Item 1 */}
        <div className="md:col-span-6 md:translate-y-12">
          <PortfolioItem
            project={PROJECTS[0]}
            depth={depths[0]}
            onHover={setIsHoveringItem}
            mousePos={mousePos}
            onClick={() => handleProjectClick(PROJECTS[0])}
          />
        </div>

        {/* Item 2 */}
        <div className="md:col-span-5 md:col-start-8">
          <PortfolioItem
            project={PROJECTS[1]}
            depth={depths[1]}
            onHover={setIsHoveringItem}
            mousePos={mousePos}
            onClick={() => handleProjectClick(PROJECTS[1])}
          />
        </div>

        {/* Item 3 */}
        <div className="md:col-span-4 md:translate-x-12">
          <PortfolioItem
            project={PROJECTS[2]}
            depth={depths[2]}
            onHover={setIsHoveringItem}
            mousePos={mousePos}
            onClick={() => handleProjectClick(PROJECTS[2])}
          />
        </div>

        {/* Item 4 */}
        <div className="md:col-span-7 md:translate-y-24">
          <PortfolioItem
            project={PROJECTS[3]}
            depth={depths[3]}
            onHover={setIsHoveringItem}
            mousePos={mousePos}
            onClick={() => handleProjectClick(PROJECTS[3])}
          />
        </div>

        {/* Item 5 */}
        <div className="md:col-span-5">
          <PortfolioItem
            project={PROJECTS[4]}
            depth={depths[4]}
            onHover={setIsHoveringItem}
            mousePos={mousePos}
            onClick={() => handleProjectClick(PROJECTS[4])}
          />
        </div>

        {/* Item 6 */}
        <div className="md:col-span-4 md:col-start-8 md:-translate-y-32">
          <PortfolioItem
            project={PROJECTS[5]}
            depth={depths[5]}
            onHover={setIsHoveringItem}
            mousePos={mousePos}
            onClick={() => handleProjectClick(PROJECTS[5])}
          />
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Portfolio;
