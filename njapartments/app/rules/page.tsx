'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const RulesPage = () => {
  const [expandedBylaw, setExpandedBylaw] = useState<number | null>(null);

  const bylaws = [
    {
      number: '01',
      title: 'Membership & Voting Rights',
      description:
        'Article 4.2: Definitions of resident membership categories and the procedures for exercising voting power during annual general meetings.',
    },
    {
      number: '02',
      title: 'Maintenance & Financial Levies',
      description:
        'Section 7.1: Breakdown of monthly maintenance calculations, sinking funds, and penalty structures for delayed payments.',
    },
    {
      number: '03',
      title: 'Management Committee Duties',
      description:
        'Article 12: Powers and responsibilities of elected officials, including tenure lengths and transparency mandates.',
    },
  ];

  const houseRules = [
    {
      icon: '🔇',
      title: 'Noise Abatement',
      description: 'Quiet hours are strictly enforced between 10:00 PM and 7:00 AM daily.',
    },
    {
      icon: '🐾',
      title: 'Pet Guidelines',
      description: 'All pets must be registered with the society office and leashed in common areas.',
    },
  ];

  const parkingRule = {
    icon: 'P',
    title: 'Parking & Vehicle Access',
    description:
      'Designated parking slots are for resident vehicles only. Visitors must use the external bay and register at the security gate.',
  };

  const forms = [
    {
      title: 'Renovation Form',
      file: 'PDF (1.4MB)',
      updated: 'Updated Sep 2024',
    },
    {
      title: 'Clubhouse Booking',
      file: 'PDF (0.8MB)',
      updated: 'Updated Sep 2024',
    },
    {
      title: 'NOC Application',
      file: 'DOCX (84 KB)',
      updated: 'Updated Dec 2023',
    },
  ];

  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-50 p-6">
          <div className="mb-8">
            <span className="inline-block rounded-full bg-gray-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600">
              GOVERNANCE & COMPLIANCE
            </span>
          </div>

          <nav className="mb-8">
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Quick Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#bylaws"
                  className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Society Bylaws
                </a>
              </li>
              <li>
                <a
                  href="#house-rules"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                  House Rules
                </a>
              </li>
              <li>
                <a
                  href="#forms"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                  Downloads
                </a>
              </li>
            </ul>
          </nav>

          <Card variant="default" className="relative overflow-hidden p-0">
            <div className="relative h-64">
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400&auto=format&fit=crop"
                alt="Legal assistance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 p-6 text-white">
                <p className="mb-2 text-sm font-semibold">Need legal assistance regarding society matters?</p>
                <a href="#" className="text-sm font-semibold underline">Contact the Secretary</a>
              </div>
            </div>
          </Card>
        </aside>

        <main className="flex-1 bg-white">
          {/* Header */}
          <section className="border-b px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-5xl">
              <h1 className="mb-4 text-5xl font-bold">
                Rules of <span className="italic text-primary">Coexistence.</span>
              </h1>
              <p className="max-w-3xl text-lg text-gray-600">
                The Living Canvas operates on a foundation of mutual respect and structured
                governance. Access all bylaws, community standards, and regulatory documents below.
              </p>
            </div>
          </section>

          {/* Society Bylaws */}
          <section id="bylaws" className="px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Society Bylaws</h2>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search bylaws..."
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {bylaws.map((bylaw, index) => (
                  <Card key={index} variant="default" className="overflow-hidden">
                    <button
                      onClick={() => setExpandedBylaw(expandedBylaw === index ? null : index)}
                      className="flex w-full items-start gap-6 p-6 text-left transition-colors hover:bg-gray-50"
                    >
                      <div className="flex flex-col items-center rounded-lg bg-primary/10 px-4 py-3">
                        <div className="text-2xl font-bold text-primary">{bylaw.number}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-bold text-gray-900">{bylaw.title}</h3>
                        <p className="text-sm text-gray-600">{bylaw.description}</p>
                      </div>
                      <svg
                        className={`h-6 w-6 flex-shrink-0 text-gray-400 transition-transform ${
                          expandedBylaw === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                    {expandedBylaw === index && (
                      <div className="border-t bg-gray-50 p-6">
                        <p className="text-sm leading-relaxed text-gray-700">
                          Full bylaw content would be displayed here with detailed articles, subsections,
                          and amendment history. This expandable section provides residents with complete
                          transparency into governance rules.
                        </p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* House Rules & Regulations */}
          <section id="house-rules" className="bg-gray-50 px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">House Rules & Regulations</h2>

              <div className="mb-8 grid gap-6 md:grid-cols-2">
                {houseRules.map((rule, index) => (
                  <Card key={index} variant="default" className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
                      {rule.icon}
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{rule.title}</h3>
                    <p className="text-sm text-gray-600">{rule.description}</p>
                  </Card>
                ))}
              </div>

              <Card variant="default" className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary">
                    {parkingRule.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{parkingRule.title}</h3>
                    <p className="mb-4 text-gray-600">{parkingRule.description}</p>
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark">
                      DOWNLOAD MAP
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Maintenance Portal & Forms */}
          <section id="forms" className="px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Maintenance Portal & Forms</h2>
              <p className="mb-8 text-gray-600">
                Essential documents for administrative requests and compliance reporting.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                {forms.map((form, index) => (
                  <Card key={index} variant="default" className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                        <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-2 font-bold text-gray-900">{form.title}</h3>
                    <p className="mb-1 text-sm text-gray-500">{form.file}</p>
                    <p className="mb-4 text-xs text-gray-400">{form.updated}</p>
                    <Button variant="secondary" size="sm" className="w-full">
                      Download
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default RulesPage;
