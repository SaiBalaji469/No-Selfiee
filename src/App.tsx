import React, { useState } from 'react';
import { Camera, Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Calendar, Clock, MapPinned } from 'lucide-react';
import { Testimonial, Service, PortfolioItem } from './types';
import { testimonials, services, portfolioItems } from './data';
import { AnimatedText } from './components/AnimatedText';
import { FadeInView } from './components/FadeInView';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <Camera className="h-8 w-8 text-indigo-600 absolute transform -rotate-12" />
                <Camera className="h-8 w-8 text-pink-500 opacity-75 transform rotate-12" />
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text">
                NoSelfie
              </span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'portfolio', 'pricing', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`${
                    activeSection === item
                      ? 'text-indigo-600 font-semibold'
                      : 'text-gray-600 hover:text-indigo-600'
                  } capitalize transition-all duration-200 hover:scale-105`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-indigo-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {['home', 'services', 'portfolio', 'pricing', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-base capitalize font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <AnimatedText
                text="Capture Your Perfect Moment"
                className="text-5xl md:text-7xl font-bold mb-6"
                delay={1}
              />
              <AnimatedText
                text="Professional photography that tells your story. Book a photographer in minutes."
                className="text-xl md:text-2xl mb-8 text-gray-200"
                delay={3}
              />
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Session
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Professional photography services tailored to your needs. Every moment deserves to be captured perfectly.
            </p>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInView key={service.id} delay={index * 0.2}>
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -10 }}
                >
                  <div className="text-indigo-600 mb-6 transform transition-transform duration-300 hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <h2 className="text-4xl font-bold text-center mb-4">Our Portfolio</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Browse through our collection of memorable moments we've captured for our clients.
            </p>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <FadeInView key={item.id} delay={index * 0.2}>
                <motion.div 
                  className="group relative overflow-hidden rounded-xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    <div className="text-white">
                      <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.category}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <h2 className="text-4xl font-bold text-center mb-4">Client Stories</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Read what our clients have to say about their experience with NoSelfie.
            </p>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeInView key={testimonial.id} delay={index * 0.2}>
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-indigo-100"
                    />
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-indigo-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">"{testimonial.content}"</p>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <h2 className="text-4xl font-bold text-center mb-4">Book Your Session</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Ready to capture your special moments? Get in touch with us today.
            </p>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <FadeInView delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">How It Works</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Book Your Date</h4>
                      <p className="text-gray-600">Choose your preferred date and time for the photoshoot</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Session Duration</h4>
                      <p className="text-gray-600">Select your package and session duration</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <MapPinned className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold mb-1">Location</h4>
                      <p className="text-gray-600">Choose your preferred shooting location</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-indigo-600 mr-4" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-indigo-600 mr-4" />
                    <span className="text-gray-600">contact@noselfie.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-indigo-600 mr-4" />
                    <span className="text-gray-600">123 Photography St, New York, NY 10001</span>
                  </div>
                  <div className="flex space-x-4 mt-6">
                    <motion.a 
                      href="#" 
                      className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Facebook className="h-6 w-6" />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Instagram className="h-6 w-6" />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Twitter className="h-6 w-6" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </FadeInView>
            <FadeInView delay={0.4}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Book Now</h3>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe36jjwNUrHKy31nAzl3c9h0pVDNi-l8OUiJqg9Qb8Iygadeg/viewform?embedded=true" width="640" height="440" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <Camera className="h-8 w-8 text-indigo-400 absolute transform -rotate-12" />
                  <Camera className="h-8 w-8 text-pink-400 opacity-75 transform rotate-12" />
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 text-transparent bg-clip-text">
                  NoSelfie
                </span>
              </motion.div>
              <p className="text-gray-400">Capturing life's precious moments with professional excellence.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Services', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and special offers.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-900"
                />
                <motion.button 
                  className="bg-gradient-to-r from-indigo-600 to-pink-500 px-6 py-2 rounded-r-lg transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} NoSelfie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;