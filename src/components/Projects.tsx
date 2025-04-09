
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  iconUrl: string;
  tags: string[];
  link?: string;
}

const ProjectCard = ({ title, description, iconUrl, tags, link }: ProjectProps) => (
  <Card className="magic-card h-full overflow-hidden group hover:scale-[1.02] transition-all duration-300">
    <CardContent className="p-6 relative z-10">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-magic-navy/50 border border-magic-violet/30">
          <img src={iconUrl} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl text-magic-teal group-hover:text-magic-starlight transition-colors">
              {title}
              <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="h-4 w-4 text-magic-spark" />
              </span>
            </h3>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-magic-violet hover:text-magic-teal transition-colors">
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
          <p className="text-magic-twilight mt-2 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} className="bg-magic-deepPurple text-magic-twilight hover:bg-magic-violet/30 transition-colors border border-magic-violet/20">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Projects = () => {
  const projects = [
    {
      title: "DialWorks",
      description: "Uber for sales reps, powered by WebSockets for real-time communication.",
      iconUrl: "/project-dialworks.png",
      tags: ["WebSockets", "Real-time", "Node.js"]
    },
    {
      title: "TEJAS",
      description: "Bi-directional sync system using Kafka, Redis, MySQL for seamless data flow.",
      iconUrl: "/project-tejas.png",
      tags: ["Kafka", "Redis", "MySQL", "Sync"]
    },
    {
      title: "Cure.link",
      description: "Healthcare comms infrastructure with reliable async backend processing.",
      iconUrl: "/project-curelink.png",
      tags: ["Healthcare", "Async", "Backend"]
    },
    {
      title: "Omni-Social",
      description: "Node.js dashboard integrating all social platforms into one unified interface.",
      iconUrl: "/project-omnisocial.png",
      tags: ["Node.js", "API Integration", "Dashboard"]
    },
    {
      title: "Propel",
      description: "Clean scalable SaaS backend architecture designed for growth and flexibility.",
      iconUrl: "/project-propel.png",
      tags: ["SaaS", "Architecture", "Scalable"]
    },
    {
      title: "Firefly-react",
      description: "npm package for magical React animations that delight users.",
      iconUrl: "/project-firefly.png",
      tags: ["npm", "React", "Animations"]
    },
    {
      title: "GSoC @ Google",
      description: "Contributed to p5.sound with ES Module migration, test automation, and audio engine upgrade.",
      iconUrl: "/project-gsoc.png",
      tags: ["Open Source", "ES Modules", "Testing"]
    }
  ];

  return (
    <section className="py-24 px-4 bg-magic-deepPurple/20 relative backdrop-blur-sm">
      <div className="absolute inset-0 bg-shimmer bg-200% opacity-10 animate-shimmer"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cosmic-glow">Projects</h2>
          <p className="text-magic-twilight max-w-2xl mx-auto">
            Each project is a journey into a unique world, built with care and technical excellence.
          </p>
          <div className="w-24 h-1 bg-magic-teal mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
