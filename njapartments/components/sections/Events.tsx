import React from 'react';
import Image from 'next/image';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface EventCardProps {
  image: string;
  badge: string;
  title: string;
  date: string;
}

const EventCard: React.FC<EventCardProps> = ({ image, badge, title, date }) => {
  return (
    <Card variant="event" className="group relative h-80 cursor-pointer">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
          {badge}
        </span>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-200">{date}</p>
      </div>
    </Card>
  );
};

const Events: React.FC = () => {
  const events = [
    {
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
      badge: 'PAST EVENT',
      title: 'Annual Founders Day Celebration',
      date: 'September 25, 2025',
    },
    {
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop',
      badge: 'WELLNESS',
      title: 'Morning Yoga Session',
      date: 'October 12, 2025',
    },
    {
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2086&auto=format&fit=crop',
      badge: 'KIDS',
      title: 'Summer Carnival Week',
      date: 'August 15, 2025',
    },
    {
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop',
      badge: 'WORKSHOP',
      title: 'Book Club: Literary Afternoon',
      date: 'September 30, 2025',
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
              Recent Community Events
            </h2>
            <p className="text-gray-600">
              Celebrating the moments that bring our community together, from festive gatherings to wellness sessions.
            </p>
          </div>
          <Button variant="secondary" size="sm" className="whitespace-nowrap">
            View Full Gallery
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
