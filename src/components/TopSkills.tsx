import React from 'react';
import { Database, Server, Code2, Globe, Star, Coffee, Layers } from 'lucide-react';
import { Card } from "@/components/ui/card";

const TopSkills = () => {
  const mernStack = [
    {
      name: "MongoDB",
      icon: <Database className="w-12 h-12" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      name: "Express.js",
      icon: <Server className="w-12 h-12" />,
      color: "text-gray-400",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30"
    },
    {
      name: "React",
      icon: <Code2 className="w-12 h-12" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      name: "Node.js",
      icon: <Globe className="w-12 h-12" />,
      color: "text-green-600",
      bgColor: "bg-green-600/10",
      borderColor: "border-green-600/30"
    }
  ];

  const javaSpringStack = [
    {
      name: "Java",
      icon: <Coffee className="w-12 h-12" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30"
    },
    {
      name: "Spring Boot",
      icon: <Layers className="w-12 h-12" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    }
  ];

  const topSkills = [
    "Java", "Spring Boot", "MongoDB", "Express.js", "React", "Node.js", 
    "TypeScript", "JavaScript", "PostgreSQL", "Redis",
    "Kafka", "Docker", "AWS", "REST APIs", "GraphQL",
    "WebSockets", "Microservices", "System Design"
  ];

  return (
    <section id="top-skills" className="py-24 px-4 bg-magic-deepPurple/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-shimmer bg-200% opacity-10 animate-shimmer"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cosmic-glow">Top Skills</h2>
          <p className="text-magic-twilight max-w-2xl mx-auto">
            Master of MERN stack, Java Spring Boot, and modern web technologies
          </p>
          <div className="w-24 h-1 bg-magic-teal mx-auto rounded-full mt-4"></div>
        </div>

        {/* MERN Stack & Java Spring Boot Combined Banner */}
        <div className="mb-16">
          <div className="magic-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-magic-violet/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-magic-starlight mb-2">
                  Full-Stack Specializations
                </h3>
                <p className="text-magic-twilight">
                  Expert in both MERN stack and Java Spring Boot ecosystems
                </p>
              </div>
              
              {/* MERN Stack Section */}
              <div className="mb-8">
                <div className="text-center mb-4">
                  <h4 className="text-lg md:text-xl font-semibold text-magic-teal mb-2">
                    MERN Stack Specialist
                  </h4>
                  <p className="text-sm text-magic-twilight/80">
                    Full-stack expertise in MongoDB, Express, React, and Node.js
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {mernStack.map((tech, index) => (
                    <Card 
                      key={index}
                      className={`${tech.bgColor} ${tech.borderColor} border-2 p-6 hover:scale-105 transition-all duration-300 group cursor-pointer`}
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                          {tech.icon}
                        </div>
                        <h4 className="font-bold text-lg text-magic-starlight text-center">
                          {tech.name}
                        </h4>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center my-8">
                <div className="flex-grow h-px bg-magic-violet/30"></div>
                <div className="px-4 text-magic-twilight/50 text-sm">AND</div>
                <div className="flex-grow h-px bg-magic-violet/30"></div>
              </div>

              {/* Java Spring Boot Section */}
              <div>
                <div className="text-center mb-4">
                  <h4 className="text-lg md:text-xl font-semibold text-orange-400 mb-2">
                    Java Spring Boot Specialist
                  </h4>
                  <p className="text-sm text-magic-twilight/80">
                    Enterprise-grade backend development with Java and Spring Boot
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto">
                  {javaSpringStack.map((tech, index) => (
                    <Card 
                      key={index}
                      className={`${tech.bgColor} ${tech.borderColor} border-2 p-6 hover:scale-105 transition-all duration-300 group cursor-pointer`}
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                          {tech.icon}
                        </div>
                        <h4 className="font-bold text-lg text-magic-starlight text-center">
                          {tech.name}
                        </h4>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSkills;

