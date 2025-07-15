import { Button } from "@/components/ui/button";
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Agro-Tourism", href: "#agro-tourism" },
        { name: "Eco-Commerce", href: "#eco-commerce" },
        { name: "Sustainability", href: "#sustainability" },
        { name: "Skill Development", href: "#skills" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Community", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Research", href: "#" },
        { name: "Documentation", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-gradient-earth text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">EcoConnect</span>
            </div>
            <p className="text-white/80 mb-6 text-sm">
              Bridging the gap between local agricultural communities and global markets 
              through sustainable tourism, e-commerce, and smart farming solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-white/80">
                <Mail className="h-4 w-4 mr-2" />
                contact@ecoconnect.com
              </div>
              <div className="flex items-center text-sm text-white/80">
                <Phone className="h-4 w-4 mr-2" />
                +91 98765 43210
              </div>
              <div className="flex items-center text-sm text-white/80">
                <MapPin className="h-4 w-4 mr-2" />
                New Delhi, India
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 rounded-2xl p-6 mb-12">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">Stay Connected</h3>
              <p className="text-white/80 text-sm">
                Get the latest updates on sustainable farming, eco-tourism, and rural development.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:min-w-[300px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-nature-green hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-sm text-white/80">
                © 2024 EcoConnect. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;