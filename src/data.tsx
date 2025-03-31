import React from 'react';
import { Camera, Users, Video, Heart, Image, Award } from 'lucide-react';
import { Testimonial, Service, PortfolioItem } from './types';

export const services: Service[] = [
  {
    id: 1,
    title: 'Wedding Photography',
    description: 'Capture your special day with our professional wedding photography services.',
    icon: <Heart className="h-8 w-8" />,
  },
  {
    id: 2,
    title: 'Portrait Sessions',
    description: 'Professional portrait photography for individuals and families.',
    icon: <Users className="h-8 w-8" />,
  },
  {
    id: 3,
    title: 'Event Coverage',
    description: 'Comprehensive coverage for corporate events and special occasions.',
    icon: <Camera className="h-8 w-8" />,
  },
  {
    id: 4,
    title: 'Commercial Photography',
    description: 'High-quality photography for your business and products.',
    icon: <Image className="h-8 w-8" />,
  },
  {
    id: 5,
    title: 'Video Production',
    description: 'Professional video services for events and commercial use.',
    icon: <Video className="h-8 w-8" />,
  },
  {
    id: 6,
    title: 'Photo Retouching',
    description: 'Expert photo editing and retouching services.',
    icon: <Award className="h-8 w-8" />,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Bride',
    content: 'NoSelfie captured our wedding day perfectly. The photos are absolutely stunning and we couldn\'t be happier!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'The commercial photography services provided by NoSelfie helped take our product marketing to the next level.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Event Planner',
    content: 'Professional, punctual, and incredibly talented. NoSelfie is our go-to photography partner for all our events.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Elegant Wedding',
    category: 'Wedding',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Corporate Event',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Family Portrait',
    category: 'Portrait',
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Product Shoot',
    category: 'Commercial',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'Fashion Photography',
    category: 'Fashion',
    imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    title: 'Nature Photography',
    category: 'Landscape',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80',
  },
];