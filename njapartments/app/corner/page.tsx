import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/shared/Sidebar';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Society Corner - The Living Canvas',
  description: 'Your central hub for announcements, official circulars, and essential community connections.',
};

const CornerPage = () => {
  const notices = [
    {
      category: 'MAINTENANCE',
      date: '24',
      month: 'OCT 2024',
      title: 'Quarterly Landscape Renewal Program',
      description: 'The beautification team will be upgrading the central courtyard flora starting next Monday. Expect minor access restrictions to the walking track.',
    },
    {
      category: 'GENERAL',
      date: '20',
      month: 'OCT 2024',
      title: 'New Guest Parking Policy Enforcement',
      description: 'Effective immediately, all guests must be registered via the Resident App before arrival to secure designated parking bays in Zone B.',
    },
    {
      category: 'URGENT',
      date: '18',
      month: 'OCT 2024',
      title: 'Elevator Maintenance: Block C & D',
      description: 'Scheduled power safety audit for elevator systems in blocks C and D this Friday between 10:00 AM and 02:00 PM.',
    },
  ];

  const emergencyContacts = [
    {
      title: 'Main Security Desk',
      phone: '+1 (234) 567-8900',
      description: 'On-site immediate response team',
    },
    {
      title: 'Fire Safety Warden',
      phone: '+1 (234) 567-8911',
      description: '24/7 AVAILABILITY',
    },
  ];

  const usefulNumbers = [
    {
      icon: '🔧',
      title: 'Estate Plumber',
      availability: 'AVAILABLE 8AM - 6PM',
      extension: 'Ext. 402',
    },
    {
      icon: '⚡',
      title: 'Estate Electrician',
      availability: '24/7 AVAILABILITY',
      extension: 'Ext. 403',
    },
    {
      icon: '🏢',
      title: 'Housekeeping Office',
      availability: 'MONDAY - SATURDAY',
      extension: 'Ext. 101',
    },
    {
      icon: '🍕',
      title: 'Concierge & Deliveries',
      availability: 'ALL BLOCKS',
      extension: 'Ext. 000',
    },
  ];

  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 bg-gray-50">
          {/* Header */}
          <section className="bg-white px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <h1 className="mb-4 text-5xl font-bold">
                Society <span className="italic text-primary">Corner</span>
              </h1>
              <p className="max-w-3xl text-lg text-gray-600">
                Your central hub for announcements, official circulars, and essential community
                connections. Stay informed and engaged with The Living Canvas ecosystem.
              </p>
            </div>
          </section>

          {/* Main Content */}
          <section className="px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Notices & Circulars */}
                <div className="lg:col-span-2">
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">Notices & Circulars</h2>
                    <a href="#" className="text-sm font-semibold text-primary hover:text-primary-dark">
                      View Archive →
                    </a>
                  </div>

                  <div className="space-y-4">
                    {notices.map((notice, index) => (
                      <Card key={index} variant="default" className="p-6">
                        <div className="flex gap-6">
                          <div className="flex flex-col items-center rounded-lg bg-gray-50 px-4 py-3">
                            <div className="text-3xl font-bold text-primary">{notice.date}</div>
                            <div className="text-xs text-gray-500">{notice.month}</div>
                          </div>
                          <div className="flex-1">
                            <div className="mb-2">
                              <span
                                className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase ${
                                  notice.category === 'URGENT'
                                    ? 'bg-red-100 text-red-700'
                                    : notice.category === 'MAINTENANCE'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-gray-100 text-gray-700'
                                }`}
                              >
                                {notice.category}
                              </span>
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-gray-900">{notice.title}</h3>
                            <p className="text-sm leading-relaxed text-gray-600">{notice.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Emergency Contacts */}
                  <Card variant="default" className="bg-red-50 p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="text-2xl">✱</span>
                      <h3 className="text-lg font-bold text-red-900">EMERGENCY</h3>
                    </div>
                    {emergencyContacts.map((contact, index) => (
                      <div key={index} className="mb-4 last:mb-0">
                        <p className="mb-1 text-xs font-semibold uppercase text-red-700">
                          {contact.description}
                        </p>
                        <a
                          href={`tel:${contact.phone}`}
                          className="flex items-center gap-2 text-xl font-bold text-red-900 hover:text-red-700"
                        >
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                          </svg>
                          {contact.phone}
                        </a>
                      </div>
                    ))}
                  </Card>

                  {/* Useful Numbers */}
                  <Card variant="default" className="p-6">
                    <h3 className="mb-4 text-lg font-bold text-gray-900">Useful Numbers</h3>
                    <div className="space-y-4">
                      {usefulNumbers.map((number, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-2xl">{number.icon}</span>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{number.title}</h4>
                            <p className="text-xs text-gray-500">{number.availability}</p>
                            <p className="mt-1 text-sm font-semibold text-primary">{number.extension}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 border-t pt-4">
                      <a
                        href="#"
                        className="text-sm font-semibold text-primary hover:text-primary-dark"
                      >
                        DOWNLOAD FULL DIRECTORY PDF
                      </a>
                    </div>
                  </Card>

                  {/* Architecture Banner */}
                  <Card variant="default" className="relative overflow-hidden p-0">
                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-90"></div>
                      <div className="relative p-6 text-white">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide">
                          ARCHITECTURE
                        </p>
                        <h4 className="text-xl font-bold leading-tight">
                          Elevating community living standards.
                        </h4>
                      </div>
                    </div>
                  </Card>
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

export default CornerPage;
