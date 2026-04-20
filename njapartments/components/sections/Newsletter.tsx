'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Input from '../ui/Input';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <section className="bg-mint py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                NEW
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Connect with your community.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Get the digital community board to receive real, timely updates, and participate in polls, and connect with neighbors.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                className="flex-1"
              />
              <Button type="submit" variant="primary" size="md" className="sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Image */}
          <div className="relative h-80 overflow-hidden rounded-2xl lg:h-96">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2132&auto=format&fit=crop"
              alt="Community connection"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
