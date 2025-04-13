import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { QuoteIcon } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  companyIcon?: string;
  testimonial: string;
  avatarUrl: string;
}

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

const getGradientColor = (name: string) => {
  const colors = [
    ['#FF6B6B', '#FF8E8E'],
    ['#4ECDC4', '#45B7AF'],
    ['#45B7D1', '#3CA3BC'],
    ['#96CEB4', '#88BBA3'],
    ['#FFEEAD', '#E6D79E'],
    ['#D4A5A5', '#C09595'],
    ['#9B59B6', '#8C4AA5']
  ];
  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[index % colors.length];
};

const TestimonialCard = ({ name, role, company, companyIcon, testimonial, avatarUrl }: TestimonialProps) => {
  const initials = getInitials(name);
  const [gradientStart, gradientEnd] = getGradientColor(name);

  return (
    <Card className="magic-card overflow-hidden h-full">
      <CardContent className="p-6 flex flex-col h-full relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div 
            className="w-16 h-16 rounded-full overflow-hidden border-2 border-magic-spark shadow-md flex items-center justify-center flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`,
            }}
          >
            {avatarUrl ? (
              <img 
                src={avatarUrl} 
                alt={name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.classList.add('flex');
                }}
              />
            ) : null}
            <span className="text-2xl font-bold text-white tracking-tight">
              {initials}
            </span>
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-lg text-magic-starlight">{name}</h3>
            <p className="text-sm text-magic-twilight">{role}</p>
            <div className="flex items-center gap-2 mt-1">
              {companyIcon && (
                <img 
                  src={companyIcon} 
                  alt={company} 
                  className="h-6 w-6 object-contain opacity-90"
                />
              )}
              <p className="text-xs text-magic-twilight/70">{company}</p>
            </div>
          </div>
        </div>
        
        <Separator className="bg-magic-twilight/20 my-3" />
        
        <div className="relative">
          <QuoteIcon className="h-8 w-8 text-magic-twilight/10 absolute -top-1 -left-1" />
          <p className="italic text-magic-twilight flex-grow pt-2 pl-3">{testimonial}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jason Sigal",
      role: "Senior Software Engineer",
      company: "Spotify",
      companyIcon: "/personal_portfolio/spotify_dp.svg",
      testimonial: "Divyanshu improved the p5.sound library with modern architecture and seamless feature integration. Thoughtful, smart, and driven to make a real difference.",
      avatarUrl: "/testimonial-jason.png"
    },
    {
      name: "Mayank",
      role: "Co-founder & CTO",
      company: "Propel",
      companyIcon: "/personal_portfolio/propel_dp.svg",
      testimonial: "Brings architectural clarity, ships on time, and deeply cares.",
      avatarUrl: "/testimonial-mayank.png"
    },
    {
      name: "Aman Singhla",
      role: "Founder",
      company: "Cure.link",
      companyIcon: "/personal_portfolio/cure_link_dp.jpg",
      testimonial: "Backend systems built with precision. Doesn't disappear after delivery — stays to make it better.",
      avatarUrl: "/testimonial-aman.png"
    },
    {
      name: "Omar Siha",
      role: "Founder",
      company: "Omni-Social",
      companyIcon: "/personal_portfolio/omni_social_dp.webp",
      testimonial: "Integrated complex social APIs with zero fuss. Fast, clean, and reliable.",
      avatarUrl: "/testimonial-omar.png"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cosmic-glow">What Clients Say</h2>
          <div className="w-24 h-1 bg-magic-spark mx-auto rounded-full"></div>
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
