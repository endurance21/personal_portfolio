import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles, Code2, Database, HeartPulse, Share2, Rocket, Package, Github } from 'lucide-react';

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
    'DialWorks': <Share2 className="w-8 h-8 text-magic-spark" />,
    'TEJAS': <Database className="w-8 h-8 text-magic-spark" />,
    'Cure.link': <HeartPulse className="w-8 h-8 text-magic-spark" />,
    'Omni-Social': <Share2 className="w-8 h-8 text-magic-spark" />,
    'Propel': <Rocket className="w-8 h-8 text-magic-spark" />,
    'Firefly-react': <Sparkles className="w-8 h-8 text-magic-spark" />,
    'GSoC @ Google': <Github className="w-8 h-8 text-magic-spark" />,
  };

  return iconMap[title] || <Code2 className="w-8 h-8 text-magic-spark" />;
};

const ProjectCard = ({ title, description, iconUrl, tags, link, githubLink }: ProjectProps) => {
  const [showFallback, setShowFallback] = useState(!iconUrl);
  const projectIcon = getProjectIcon(title);

  return (
    <Card className="magic-card h-full overflow-hidden group hover:scale-[1.02] transition-all duration-300">
      <CardContent className="p-6 relative z-10">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-magic-navy/50 to-magic-violet/30 border border-magic-violet/30 flex items-center justify-center">
            {!showFallback && iconUrl ? (
              <img 
                src={iconUrl} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={() => setShowFallback(true)}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                {projectIcon}
              </div>
            )}
          </div>
          
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl text-magic-teal group-hover:text-magic-starlight transition-colors">
                {title}
                <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="h-4 w-4 text-magic-spark" />
                </span>
              </h3>
              <div className="flex gap-2">
                {link && (
                  <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-magic-violet hover:text-magic-teal transition-colors"
                    aria-label={`Visit ${title} website`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
                {githubLink && (
                  <a 
                    href={githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-magic-violet hover:text-magic-teal transition-colors"
                    aria-label={`View ${title} on GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
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
};

const Projects = () => {
  const projects = [
    {
      title: "DialWorks",
      description: "Uber for sales reps, powered by WebSockets for real-time communication.",
      // iconUrl: "/project-dialworks.png",
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
      // iconUrl: "/project-tejas.png",
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
      // iconUrl: "/project-curelink.png",
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
      // iconUrl: "/project-omnisocial.png",
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
      // iconUrl: "/project-propel.png",
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
    },
    {
      title: "GSoC @ Google",
      description: "Contributed to p5.sound with ES Module migration, test automation, and audio engine upgrade.",
      iconUrl: "/project-gsoc.png",
      tags: [
        "JavaScript",
        "Web Audio API",
        "ECMAScript Modules",
        "GitHub Actions",
        "HeadLess Testing using karma.js",
        "Open Source"
      ],
      link: "https://p5js.org/reference/#/libraries/p5.sound",
      githubLink: "https://github.com/processing/p5.js-sound"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-magic-deepPurple/20 relative backdrop-blur-sm">
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
