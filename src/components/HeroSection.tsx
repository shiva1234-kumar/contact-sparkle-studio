import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';
import classroom1 from '@/assets/classroom-1.png';
import classroom2 from '@/assets/classroom-2.png';
import classroom3 from '@/assets/classroom-3.png';
import classroom4 from '@/assets/classroom-4.png';

const HeroSection = () => {
  const classroomImages = [classroom1, classroom2, classroom3, classroom4];
  const [currentImage, setCurrentImage] = useState(classroomImages[0]);

  useEffect(() => {
    // Randomly select an image on component mount (page refresh)
    const randomIndex = Math.floor(Math.random() * classroomImages.length);
    setCurrentImage(classroomImages[randomIndex]);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl floating animate-fade-in-up"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating-delayed animate-scale-in" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-primary/3 rounded-full blur-3xl floating-slow animate-scale-in" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl floating animate-fade-in-down" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-blur-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 hover-glow animate-scale-in-bounce" style={{ animationDelay: '0.2s' }}>
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Professional Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Thanks for your interest in our company. Choose from the options below and we'll connect you with the right person to discuss your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button
                onClick={scrollToContact}
                className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 font-semibold pulse-glow hover-lift"
                size="lg"
              >
                Send a Message
                <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>
              
              <Button
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 font-semibold hover-glow"
                size="lg"
              >
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary/20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="text-center hover-lift animate-stagger-in">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center hover-lift animate-stagger-in">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center hover-lift animate-stagger-in">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 floating hover-lift">
              <img
                src={currentImage}
                alt="Classroom with children and teacher"
                className="w-full h-auto max-w-lg mx-auto rounded-lg shadow-elegant transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl floating animate-scale-in" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute bottom-1/4 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl floating-delayed animate-scale-in" style={{ animationDelay: '1.4s' }}></div>
            <div className="absolute top-10 right-10 w-16 h-16 bg-secondary/20 rounded-full blur-xl floating animate-scale-in" style={{ animationDelay: '1.6s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;