import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
          alt="Modern apartment building"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-[600px] lg:h-[700px] flex-col justify-center">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
              <span className="block text-gray-900">A Living Space</span>
              <span className="block text-primary">Evolved.</span>
            </h1>

            {/* Subtitle */}
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600 lg:text-xl">
              Welcome to a sanctuary where architectural excellence meets premium lifestyle. 
              The Living Canvas provides a premium lifestyle, spectacular views, and values 
              community and tranquility.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href="/corner">
                Resident Portal
              </Button>
              <Button variant="secondary" size="lg" href="/amenities">
                View Amenities
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
