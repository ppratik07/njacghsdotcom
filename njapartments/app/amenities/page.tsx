import React from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/shared/Sidebar';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Amenities - The Living Canvas',
  description: 'World-class facilities designed for modern living.',
};

const AmenitiesPage = () => {
  const featuredAmenities = [
    {
      title: 'Grand Community Hall',
      description: 'A versatile space for celebrations, workshops, and community gatherings equipped with modern AV tech.',
      capacity: '800+ Capacity',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c2f1?q=80&w=2098&auto=format&fit=crop',
    },
    {
      title: 'Elite Fitness Studio',
      description: 'Open 24/7',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Azure Infinity Pool',
      description: 'Temperature Controlled',
      image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  const amenitiesList = [
    {
      icon: '🌳',
      title: 'The Central Park',
      description: '4 acres of meticulously landscaped gardens, walking trails, and quiet meditation corners designed for peaceful coexistence.',
      features: ['Jogging Tracks', "Children's Play Area", 'Pet-Friendly Zones'],
    },
    {
      icon: '🛡️',
      title: 'Five-Tier Security',
      description: 'Your peace of mind is our priority. Our facility uses cutting-edge biometric and AI-powered surveillance systems.',
      features: ['Biometric Access', '24/7 Armed Patrol', 'Visitor Management App'],
    },
    {
      icon: '🎾',
      title: 'Sports Arena',
      description: 'Nurture your competitive spirit with international-standard courts and professional coaching staff available daily.',
      features: ['Tennis & Squash Courts', 'Badminton Hall', 'Cricket Practice Nets'],
    },
  ];

  const ecoFeatures = [
    {
      title: '100%',
      subtitle: 'SOLAR-POWERED COMMONS',
    },
    {
      title: '45k Liters',
      subtitle: 'DAILY WATER RECYCLED',
    },
  ];

  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1">
          {/* Header */}
          <section className="bg-gray-50 px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-600">
                WORLD-CLASS FACILITIES
              </p>
              <h1 className="mb-4 text-5xl font-bold leading-tight">
                Designed for{' '}
                <span className="block text-primary">Modern Living.</span>
              </h1>
              <p className="max-w-3xl text-lg text-gray-600">
                Experience a curated suite of amenities that blend nature with luxury, fostering a
                vibrant community atmosphere.
              </p>
            </div>
          </section>

          {/* Featured Amenities Carousel */}
          <section className="px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Featured Highlights</h2>
                <div className="flex gap-2">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 hover:border-primary">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                    </svg>
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 hover:border-primary">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Large Featured */}
                <Card variant="event" className="relative h-96 lg:row-span-2">
                  <Image
                    src={featuredAmenities[0].image}
                    alt={featuredAmenities[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 p-8 text-white">
                    <h3 className="mb-2 text-2xl font-bold">{featuredAmenities[0].title}</h3>
                    <p className="mb-3 text-sm leading-relaxed opacity-90">
                      {featuredAmenities[0].description}
                    </p>
                    <div className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                      {featuredAmenities[0].capacity}
                    </div>
                  </div>
                </Card>

                {/* Two smaller featured */}
                {featuredAmenities.slice(1).map((amenity, index) => (
                  <Card key={index} variant="event" className="relative h-44">
                    <Image
                      src={amenity.image}
                      alt={amenity.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 p-6 text-white">
                      <h3 className="mb-1 text-lg font-bold">{amenity.title}</h3>
                      <p className="text-sm opacity-90">{amenity.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Amenities List */}
          <section className="bg-gray-50 px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-3">
                {amenitiesList.map((amenity, index) => (
                  <Card key={index} variant="default" className="p-8">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-3xl">
                      {amenity.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{amenity.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">{amenity.description}</p>
                    <ul className="space-y-2">
                      {amenity.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="h-5 w-5 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Eco-Conscious Infrastructure */}
          <section className="px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="p-12 lg:p-16">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
                      FUTURE-PROOF LIVING
                    </p>
                    <h2 className="mb-6 text-4xl font-bold leading-tight">
                      Eco-Conscious Infrastructure
                    </h2>
                    <p className="mb-8 leading-relaxed opacity-90">
                      We believe in living in harmony with nature. Our society integrates sustainable
                      practices into everyday amenities, reducing our carbon footprint while enhancing
                      luxury.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      {ecoFeatures.map((feature, index) => (
                        <div key={index}>
                          <div className="mb-2 text-3xl font-bold text-primary">{feature.title}</div>
                          <div className="text-sm uppercase tracking-wide opacity-75">
                            {feature.subtitle}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 inline-block rounded-full bg-primary px-6 py-2 text-sm font-semibold">
                      Platinum LEED Certified Community
                    </div>
                  </div>
                  <div className="relative hidden lg:block">
                    <Image
                      src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop"
                      alt="Eco infrastructure"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AmenitiesPage;
