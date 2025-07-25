import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Instagram, Youtube, Twitter } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      inquiryType: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16" id="contact-form">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div className="space-y-8 fade-blur-in">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your business? Let's start the conversation and explore how we can help you achieve your goals.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover-lift hover-glow animate-stagger-in transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg pulse-glow">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">hello@company.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover-lift hover-glow animate-stagger-in transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg pulse-glow">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover-lift hover-glow animate-stagger-in transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg pulse-glow">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-muted-foreground">123 Business District, Suite 100<br />City, State 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover-lift hover-glow animate-stagger-in transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg pulse-glow">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM<br />Sat-Sun: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Section */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-xl font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg hover-lift transition-all duration-300 hover:scale-125 animate-scale-in-bounce"
                  style={{ animationDelay: '0.9s' }}
                >
                  <Instagram className="h-6 w-6 text-white group-hover:animate-pulse" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-lg hover-lift transition-all duration-300 hover:scale-125 animate-scale-in-bounce"
                  style={{ animationDelay: '1s' }}
                >
                  <Youtube className="h-6 w-6 text-white group-hover:animate-pulse" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg hover-lift transition-all duration-300 hover:scale-125 animate-scale-in-bounce"
                  style={{ animationDelay: '1.1s' }}
                >
                  <Twitter className="h-6 w-6 text-white group-hover:animate-pulse" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                Stay updated with our latest news, insights, and behind-the-scenes content.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="bg-card/30 backdrop-blur-md border-primary/20 shadow-elegant animate-slide-in-right hover-lift" style={{ animationDelay: '0.3s' }}>
          <CardHeader className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <CardTitle className="text-2xl">Send us a Message</CardTitle>
            <p className="text-muted-foreground">Fill out the form below and we'll get back to you as soon as possible.</p>
          </CardHeader>
          <CardContent className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-stagger-in" style={{ animationDelay: '0.8s' }}>
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="bg-background/50 border-primary/20 focus:border-primary focus:scale-105 transition-all duration-300 hover:shadow-md"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="bg-background/50 border-primary/20 focus:border-primary focus:scale-105 transition-all duration-300 hover:shadow-md"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 animate-stagger-in" style={{ animationDelay: '0.9s' }}>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-background/50 border-primary/20 focus:border-primary focus:scale-105 transition-all duration-300 hover:shadow-md"
                  required
                />
              </div>

              <div className="space-y-2 animate-stagger-in" style={{ animationDelay: '1s' }}>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-background/50 border-primary/20 focus:border-primary focus:scale-105 transition-all duration-300 hover:shadow-md"
                  placeholder="Include country code"
                />
              </div>

              <div className="space-y-2 animate-stagger-in" style={{ animationDelay: '1.1s' }}>
                <Label htmlFor="company">Company/Organization *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="bg-background/50 border-primary/20 focus:border-primary focus:scale-105 transition-all duration-300 hover:shadow-md"
                  required
                />
              </div>

              <div className="space-y-2 animate-stagger-in" style={{ animationDelay: '1.2s' }}>
                <Label htmlFor="inquiryType">Inquiry Type *</Label>
                <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                  <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary focus:scale-105 transition-all duration-300 hover:shadow-md">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new-business">New Business Inquiry</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="careers">Career Opportunities</SelectItem>
                    <SelectItem value="media">Media & Press</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 animate-stagger-in" style={{ animationDelay: '1.3s' }}>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-background/50 border-primary/20 focus:border-primary focus:scale-105 transition-all duration-300 hover:shadow-md min-h-[120px]"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 text-lg py-6 font-semibold pulse-glow animate-scale-in-bounce"
                style={{ animationDelay: '1.4s' }}
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;