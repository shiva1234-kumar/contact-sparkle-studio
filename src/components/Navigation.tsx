import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-primary/10 z-50 slide-in-nav">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-slide-in-left">
            <img 
              src="/lovable-uploads/4a388e6d-b253-4e78-83f1-f58efd15d9c4.png" 
              alt="Tagsol Nova LLP Logo" 
              className="w-8 h-8 hover-glow transition-transform hover:scale-110"
            />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Tagsol Nova LLP
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-slide-in-right">
            {navigationItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group animate-stagger-in"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button className="bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 pulse-glow animate-scale-in-bounce" style={{ animationDelay: '0.6s' }}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden animate-slide-in-right">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:scale-110 transition-transform duration-200"
            >
              {isMenuOpen ? 
                <X className="h-6 w-6 animate-scale-in" /> : 
                <Menu className="h-6 w-6 animate-scale-in" />
              }
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-scale-in-bounce">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-lg mt-2 hover-lift">
              {navigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-md hover:bg-primary/10 hover:scale-105 animate-stagger-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 animate-stagger-in" style={{ animationDelay: '0.4s' }}>
                <Button className="w-full bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;