
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface TestimonialProps {
  name: string;
  role: string;
  testimonial: string;
  avatarUrl: string;
}

const TestimonialCard = ({ name, role, testimonial, avatarUrl }: TestimonialProps) => (
  <Card className="ghibli-card overflow-hidden h-full">
    <CardContent className="p-6 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-ghibli-yellow bg-ghibli-cream shadow-md">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-ghibli-darkbrown/70">{role}</p>
        </div>
      </div>
      
      <Separator className="bg-ghibli-lightbrown/30 my-3" />
      
      <p className="italic text-ghibli-darkbrown flex-grow">"{testimonial}"</p>
    </CardContent>
  </Card>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mayank",
      role: "Co-founder & CTO at Propel",
      testimonial: "Brings architectural clarity, ships on time, and deeply cares.",
      avatarUrl: "/testimonial-mayank.png"
    },
    {
      name: "Aman Singhla",
      role: "Founder at Cure.link",
      testimonial: "Backend systems built with precision. Doesn't disappear after delivery — stays to make it better.",
      avatarUrl: "/testimonial-aman.png"
    },
    {
      name: "Omar Siha",
      role: "Founder of Omni-Social",
      testimonial: "Integrated complex social APIs with zero fuss. Fast, clean, and reliable.",
      avatarUrl: "/testimonial-omar.png"
    },
    {
      name: "Jason Sigal",
      role: "Spotify / GSoC Mentor",
      testimonial: "Divyanshu improved the p5.sound library with modern architecture and testing tools. Thoughtful, smart, and driven to make a real difference.",
      avatarUrl: "/testimonial-jason.png"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <div className="w-24 h-1 bg-ghibli-yellow mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="transform hover:-translate-y-2 transition-transform duration-300">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
