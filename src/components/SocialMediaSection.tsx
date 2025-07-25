import React from 'react';
import { Instagram, Youtube, Twitter, Linkedin, Facebook } from 'lucide-react';

const SocialMediaSection = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/company',
      gradient: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:shadow-pink-500/25'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@company',
      gradient: 'from-red-500 to-red-600',
      hoverColor: 'hover:shadow-red-500/25'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/company',
      gradient: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:shadow-blue-500/25'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/company',
      gradient: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:shadow-blue-600/25'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/company',
      gradient: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:shadow-blue-500/25'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-card/20 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl floating"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl floating-delayed"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="space-y-8 fade-blur-in">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Connect With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow us on social media for the latest updates, insights, and behind-the-scenes content from our team.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 bg-gradient-to-br ${social.gradient} rounded-xl hover-lift transition-all duration-500 hover:scale-125 ${social.hoverColor} hover:shadow-2xl glow-effect animate-scale-in-bounce`}
                  style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                >
                  <IconComponent className="h-8 w-8 text-white group-hover:animate-pulse transition-transform group-hover:scale-110" />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:scale-110">
                    <div className="bg-background border border-primary/20 px-3 py-1 rounded-lg shadow-lg animate-scale-in">
                      <span className="text-sm font-medium text-foreground">{social.name}</span>
                    </div>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white blur-sm"></div>
                </a>
              );
            })}
          </div>

          {/* Additional Social Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-primary/20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="text-center hover-lift animate-stagger-in transition-all duration-300">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Instagram Followers</div>
            </div>
            <div className="text-center hover-lift animate-stagger-in transition-all duration-300">
              <div className="text-2xl font-bold text-primary">25K+</div>
              <div className="text-sm text-muted-foreground">YouTube Subscribers</div>
            </div>
            <div className="text-center hover-lift animate-stagger-in transition-all duration-300">
              <div className="text-2xl font-bold text-primary">15K+</div>
              <div className="text-sm text-muted-foreground">Twitter Followers</div>
            </div>
            <div className="text-center hover-lift animate-stagger-in transition-all duration-300">
              <div className="text-2xl font-bold text-primary">100K+</div>
              <div className="text-sm text-muted-foreground">Total Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;