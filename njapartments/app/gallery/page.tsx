'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'events', label: 'Events' },
    { id: 'campus', label: 'Campus' },
    { id: 'maintenance', label: 'Maintenance' },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'campus',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
      title: 'Modern Architecture',
    },
    {
      id: 2,
      category: 'events',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
      title: 'Community Gathering',
    },
    {
      id: 3,
      category: 'campus',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070&auto=format&fit=crop',
      title: 'Swimming Pool',
    },
    {
      id: 4,
      category: 'maintenance',
      image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2070&auto=format&fit=crop',
      title: 'Garden Maintenance',
    },
    {
      id: 5,
      category: 'events',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2086&auto=format&fit=crop',
      title: 'Kids Event',
    },
    {
      id: 6,
      category: 'campus',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
      title: 'Interior Spaces',
    },
    {
      id: 7,
      category: 'maintenance',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2032&auto=format&fit=crop',
      title: 'Bamboo Garden',
    },
    {
      id: 8,
      category: 'campus',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      title: 'Walkway Design',
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="border-b px-6 py-16 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-4 text-5xl font-bold">
              Captured <span className="italic text-primary">Moments</span>
            </h1>
            <p className="max-w-3xl text-lg text-gray-600">
              A visual archive of our community's growth, shared celebrations, and the serene
              landscape of our residential sanctuary.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="border-b px-6 py-6 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                      activeFilter === filter.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                </svg>
                MASONRY VIEW
              </button>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="px-6 py-12 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute bottom-0 p-6 text-white">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <p className="mb-6 text-sm text-gray-500">
                Showing {filteredItems.length} of 156 images
              </p>
              <Button variant="primary" size="md">
                Discover More Stories →
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;
