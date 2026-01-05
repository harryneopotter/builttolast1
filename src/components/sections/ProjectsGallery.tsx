import { useState } from 'react';
import { MapPin, Maximize2 } from 'lucide-react';
import { projects } from '../../data/projects';

export function ProjectsGallery() {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial'>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects = projects.filter((p) =>
    filter === 'all' ? true : p.category === filter
  );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-heading">Our Construction Projects</h2>
          <p className="section-subheading">
            Built with precision, quality, and trust, ensuring your dream home is crafted to perfection.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {(['all', 'residential', 'commercial'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${filter === f
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button
                  onClick={() => setSelectedProject(project.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/40"
                >
                  <Maximize2 className="w-5 h-5 text-white" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                    {project.crn}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <span>{project.sqft.toLocaleString()} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="max-w-4xl w-full">
              <img
                src={projects.find((p) => p.id === selectedProject)?.imageUrl}
                alt="Project"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
