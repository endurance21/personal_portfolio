import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code2, Database, HeartPulse, Share2, Rocket, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  iconUrl?: string;
  tags: string[];
  link?: string;
  githubLink?: string;
}

const getProjectIcon = (title: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'DialWorks': <Share2 className="w-6 h-6 text-blue-400" />,
    'TEJAS': <Database className="w-6 h-6 text-blue-400" />,
    'Cure.link': <HeartPulse className="w-6 h-6 text-blue-400" />,
    'Omni-Social': <Share2 className="w-6 h-6 text-blue-400" />,
    'Propel': <Rocket className="w-6 h-6 text-blue-400" />,
    'Firefly-react': <Code2 className="w-6 h-6 text-blue-400" />,
  };

  return iconMap[title] || <Code2 className="w-6 h-6 text-blue-400" />;
};

const ProjectCard = ({ title, description, iconUrl, tags, link, githubLink }: ProjectProps) => {
  const [showFallback, setShowFallback] = useState(!iconUrl);
  const projectIcon = getProjectIcon(title);

  return (
    <Card className="professional-card h-full group hover:scale-[1.02] transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
            {!showFallback && iconUrl ? (
              <img 
                src={iconUrl} 
                alt={title} 
                className="w-full h-full object-cover rounded-lg"
                onError={() => setShowFallback(true)}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                {projectIcon}
              </div>
            )}
          </div>
          
          <div className="flex-grow min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-display font-semibold text-lg text-slate-50 group-hover:text-blue-400 transition-colors">
                {title}
              </h3>
              <div className="flex gap-2 flex-shrink-0">
                {link && (
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-500 hover:text-blue-400 transition-colors"
                    aria-label={`Visit ${title} website`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {githubLink && (
                  <a 
                    href={githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-500 hover:text-blue-400 transition-colors"
                    aria-label={`View ${title} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              className="bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700/50 text-xs font-normal px-2.5 py-0.5"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "DialWorks",
      description: "Uber for sales reps, powered by WebSockets for real-time communication.",
      tags: [
        "WebSockets", 
        "Express.js",
        "MongoDB",
        "Redis",
        "Socket.io",
        "AWS",
        "Docker",
        "Microservices"
      ],
      link: "https://dialworks.io/",
      githubLink: "https://github.com/yourusername/dialworks"
    },
    {
      title: "TEJAS",
      description: "Bi-directional sync system using Kafka, Redis, MySQL for seamless data flow.",
      tags: [
        "Apache Kafka", 
        "Redis", 
        "MySQL",
        "Spring Boot",
        "Java",
        "Docker",
        "Kubernetes"
      ],
      link: "https://www.nobrokerhood.com/",
      githubLink: "https://github.com/yourusername/tejas"
    },
    {
      title: "Cure.link",
      description: "Healthcare comms infrastructure with reliable async backend processing.",
      tags: [
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "AWS Lambda",
        "Serverless",
        "HIPAA Compliance"
      ],
      link: "https://www.cure.link/",
      githubLink: "https://github.com/yourusername/cure-link"
    },
    {
      title: "Omni-Social",
      description: "Node.js dashboard integrating all social platforms into one unified interface.",
      tags: [
        "React",
        "TypeScript",
        "MongoDB",
        "OAuth2",
        "REST APIs",
        "Webhooks",
        "Rate Limiting"
      ],
      link: "https://omnisocialapp.com/",
      githubLink: "https://github.com/yourusername/omni-social"
    },
    {
      title: "Propel",
      description: "Clean scalable SaaS backend architecture designed for growth and flexibility.",
      tags: [
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Kubernetes",
        "CI/CD"
      ],
      link: "https://www.trypropel.ai/?utm_source=linkedin&utm_medium=OfficialHandle&utm_campaign=WebsiteLink",
      githubLink: "https://github.com/yourusername/propel"
    },
    {
      title: "Firefly-react",
      description: "npm package for magical React animations that delight users.",
      iconUrl: "/project-firefly.png",
      tags: [
        "React",
        "TypeScript",
        "CSS-in-JS",
        "Webpack",
        "Jest",
        "Storybook",
        "Open Source"
      ],
      link: "https://www.npmjs.com/package/firefly-react",
      githubLink: "https://github.com/yourusername/firefly-react"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Each project represents a journey into solving real-world problems with technical excellence and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
