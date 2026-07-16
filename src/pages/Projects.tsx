"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import clsx from "clsx";
import { projectData } from "../data/userData";

const Projects = ({ limit }: { limit?: number }) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const displayProjects = limit ? projectData.slice(0, limit) : projectData;

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Keyboard controls for modal and lightbox navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;

      if (e.key === "Escape") {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          setSelectedProject(null);
        }
      }

      const images = selectedProject.images || [];
      if (images.length === 0) return;

      if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, isLightboxOpen]);

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const images = selectedProject?.images || [];
    if (images.length === 0) return;
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const images = selectedProject?.images || [];
    if (images.length === 0) return;
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen text-foreground relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl"
      >
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tighter"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg lg:text-xl text-zinc-500 max-w-2xl mx-auto font-medium"
          >
            A collection of dashboards turning raw data into clear, decision-ready insight — built in Power BI and Excel.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto sm:px-0">
          {displayProjects.map((project) => {
            const hasImages = project.images && project.images.length > 0;

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="rounded-3xl p-6 border border-white/5 bg-white/[0.02] hover:border-blue-500/20 hover:bg-white/[0.04] transition-all duration-500 text-left flex flex-col h-full group relative"
              >
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-500 transition-colors">
                  {project.name}
                </h3>
                <p className="text-base text-zinc-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 text-xs mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-zinc-300 font-semibold tracking-tight"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors font-bold"
                    >
                      <Github size={18} /> Source
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-600 font-bold uppercase tracking-wider">
                      Coming soon
                    </span>
                  )}

                  <div className="flex items-center gap-4">
                    {hasImages && (
                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          setActiveImageIndex(0);
                        }}
                        className="text-sm font-black text-zinc-400 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-1.5"
                      >
                        <Eye size={16} /> Preview
                      </button>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-black text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-widest"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {limit && projectData.length > limit && (
          <div className="mt-16 flex justify-center">
            <a
              href="/projects"
              className="px-8 py-3.5 rounded-full border border-white/10 text-white font-black text-base transition-all duration-300 hover:bg-white/5 hover:border-white/30 flex items-center gap-2 group"
            >
              View More Projects
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        )}
      </motion.div>

      {/* Dynamic Project Preview Modal */}
      {typeof window !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-hidden">
              {/* Modal Backdrop overlay click */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 cursor-default"
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-black border border-blue-500/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(59,130,246,0.15)] flex flex-col z-10 scrollbar-thin scrollbar-thumb-white/10"
              >
                {/* Header */}
                <div className="p-6 md:p-8 flex justify-between items-start gap-4 border-b border-white/5">
                  <div>
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-1 block">
                      Project Showcase
                    </span>
                    <h3 className="text-xl md:text-3xl font-black text-white tracking-tighter">
                      {selectedProject.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-3 rounded-full border border-white/10 hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
                    title="Close Modal"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Large Image display */}
                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div className="space-y-3">
                      <div
                        onClick={() => setIsLightboxOpen(true)}
                        className="w-full aspect-[16/9] md:aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 relative bg-zinc-950 flex items-center justify-center cursor-zoom-in group"
                      >
                        <img
                          src={selectedProject.images[activeImageIndex]}
                          alt={`${selectedProject.name} screenshot ${activeImageIndex + 1}`}
                          className="max-w-full max-h-full object-contain"
                        />

                        {/* Navigation Overlays */}
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-4 p-3 rounded-full border border-white/10 bg-black/60 hover:bg-white/15 text-white transition-all opacity-100 md:opacity-0 group-hover:opacity-100 z-20"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-4 p-3 rounded-full border border-white/10 bg-black/60 hover:bg-white/15 text-white transition-all opacity-100 md:opacity-0 group-hover:opacity-100 z-20"
                        >
                          <ChevronRight size={20} />
                        </button>

                        {/* Zoom Badge */}
                        <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/80 border border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-400 backdrop-blur-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                          Click Image to Zoom
                        </div>
                      </div>

                      {/* Thumbnail Row */}
                      {selectedProject.images.length > 1 && (
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10">
                          {selectedProject.images.map((imgUrl: string, idx: number) => (
                            <div
                              key={idx}
                              onClick={() => setActiveImageIndex(idx)}
                              className={clsx(
                                "w-20 h-12 md:w-24 md:h-14 rounded-xl overflow-hidden border transition-all duration-300 flex-shrink-0 cursor-pointer",
                                idx === activeImageIndex
                                  ? "border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.3)]"
                                  : "border-white/10 opacity-50 hover:opacity-100 hover:border-white/30"
                              )}
                            >
                              <img
                                src={imgUrl}
                                alt="Thumbnail"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Details */}
                  <div className="space-y-4 pt-2">
                    <div className="space-y-2">
                      <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest">
                        Description
                      </h4>
                      <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                        {selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.approach && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest">
                          Approach
                        </h4>
                        <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                          {selectedProject.approach}
                        </p>
                      </div>
                    )}

                    {selectedProject.highlights && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest">
                          Highlights
                        </h4>
                        <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                          {selectedProject.highlights}
                        </p>
                      </div>
                    )}

                    <div className="space-y-2">
                      <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-1 text-xs">
                        {selectedProject.tech.map((t: string) => (
                          <span
                            key={t}
                            className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-zinc-300 font-semibold tracking-tight"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 md:p-8 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 mt-auto bg-zinc-950/20">
                  {selectedProject.github ? (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white font-black text-sm transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Github size={18} /> View Source
                    </a>
                  ) : (
                    <span className="px-6 py-3 rounded-full border border-white/5 text-zinc-600 font-black text-sm flex items-center justify-center gap-2 select-none cursor-not-allowed">
                      Code coming soon
                    </span>
                  )}

                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black text-sm transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl shadow-blue-500/20"
                    >
                      View Live
                      <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Lightbox / Zoom View */}
      {typeof window !== "undefined" && createPortal(
        <AnimatePresence>
          {isLightboxOpen && selectedProject && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 backdrop-blur-md overflow-hidden">
              {/* Backdrop click closes Lightbox */}
              <div className="absolute inset-0 cursor-default" onClick={() => setIsLightboxOpen(false)} />

              {/* Main Centered Image */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-[90vw] max-h-[85vh] z-10 flex items-center justify-center select-none"
              >
                <img
                  src={selectedProject.images[activeImageIndex]}
                  alt={`${selectedProject.name} zoom`}
                  onClick={() => setIsLightboxOpen(false)}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-zoom-out"
                />
              </motion.div>

              {/* Lightbox Controls */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 bg-black/40 hover:bg-white/10 text-white hover:text-blue-500 transition-all z-20"
                title="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 bg-black/40 hover:bg-white/10 text-white hover:text-blue-500 transition-all z-20"
                title="Next Image"
              >
                <ChevronRight size={24} />
              </button>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-3 rounded-full border border-white/10 bg-black/40 hover:bg-white/10 text-white transition-all z-20"
                title="Close Zoom"
              >
                <X size={22} />
              </button>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Projects;
