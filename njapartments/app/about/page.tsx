import React from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/shared/Sidebar';

export const metadata = {
  title: 'About Us - The Living Canvas',
  description: 'Founded on the principles of community-driven sustainability.',
};

const AboutPage = () => {
  const team = [
    {
      name: 'Robert Chen',
      role: 'PRESIDENT',
      description: 'Leading with 15 years of experience in urban planning and community development.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop',
    },
    {
      name: 'Sarah Jenkins',
      role: 'GENERAL SECRETARY',
      description: 'The operational heart of the society, ensuring seamless coordination and transparency.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop',
    },
    {
      name: 'Marcus Thorne',
      role: 'TREASURER',
      description: 'Managing our resources with precision to fund ecological initiatives and maintenance.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    },
    {
      name: 'Elena Rodriguez',
      role: 'WELFARE HEAD',
      description: 'Dedicated to fostering resident well-being through curated events and inclusivity.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461&auto=format&fit=crop',
    },
  ];

  const values = [
    {
      number: '01',
      title: 'Integrity',
      description: 'Transparency in every decision we make for the collective future.',
    },
    {
      number: '02',
      title: 'Harmony',
      description: 'Living in balance with each other and the surrounding environment.',
    },
    {
      number: '03',
      title: 'Innovation',
      description: 'Constantly seeking better, greener ways to inhabit our shared space.',
    },
  ];

  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-gray-50 px-6 py-16 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="mb-6">
                <span className="inline-block rounded-full bg-gray-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600">
                  EST. 1998
                </span>
              </div>
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                    A Legacy of{' '}
                    <span className="block text-primary">Living Green.</span>
                  </h1>
                  <p className="text-lg leading-relaxed text-gray-600">
                    The Living Canvas isn't just a residential complex; it's a thriving ecosystem
                    where modern architecture meets regenerative landscape design.
                  </p>
                </div>
                <div className="relative h-96 overflow-hidden rounded-2xl shadow-xl lg:h-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                    alt="Green building with plants"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* History & Mission Section */}
          <section className="px-6 py-16 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Our History */}
                <div className="rounded-2xl bg-gray-50 p-8 lg:p-10">
                  <h2 className="mb-6 text-3xl font-bold text-gray-900">Our History</h2>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    Founded on the principles of community-driven sustainability, The Living Canvas
                    began as a vision of three architects who wanted to prove that urban density
                    could coexist with nature.
                  </p>
                  <p className="leading-relaxed text-gray-600">
                    Over the last two decades, we have evolved from a single experimental tower into
                    a multi-phase residential sanctuary, setting the{' '}
                    <span className="font-semibold text-primary">gold standard</span> for
                    environmentally conscious urban living in the heart of the city.
                  </p>
                </div>

                {/* Mission */}
                <div className="relative rounded-2xl border-l-4 border-primary bg-white p-8 shadow-lg lg:p-10">
                  <h2 className="mb-6 text-3xl font-bold text-gray-900">Mission</h2>
                  <blockquote className="italic leading-relaxed text-gray-700">
                    "To cultivate a sanctuary that nurtures the human spirit through architectural
                    beauty, ecological responsibility, and a profound sense of belonging."
                  </blockquote>
                  <div className="mt-6 flex gap-2">
                    <div className="h-1 w-12 rounded-full bg-primary"></div>
                    <div className="h-1 w-12 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* The Stewardship Section */}
          <section className="bg-gray-50 px-6 py-16 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-gray-900">The Stewardship</h2>
                <p className="mx-auto max-w-2xl text-lg text-gray-600">
                  The visionary team steering our community towards its sustainable future.
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
                  >
                    <div className="relative h-72">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover grayscale transition-all group-hover:grayscale-0"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-1 text-xl font-bold text-gray-900">{member.name}</h3>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        {member.role}
                      </p>
                      <p className="text-sm leading-relaxed text-gray-600">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="px-6 py-16 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-7xl">
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-12 text-white lg:p-16">
                <div className="grid gap-12 lg:grid-cols-3">
                  {values.map((value, index) => (
                    <div key={index}>
                      <div className="mb-4 text-6xl font-bold italic opacity-30">{value.number}</div>
                      <h3 className="mb-3 text-2xl font-bold">{value.title}</h3>
                      <p className="leading-relaxed opacity-90">{value.description}</p>
                    </div>
                  ))}
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

export default AboutPage;
