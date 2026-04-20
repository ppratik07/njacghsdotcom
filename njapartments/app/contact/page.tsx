'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const emergencyContacts = [
    {
      title: '24/7 Security Desk',
      phone: '+1 (555) 012-9911',
      description: 'On-site immediate response team',
      color: 'red',
    },
    {
      title: 'Medical Emergency',
      phone: '+1 (555) 012-4400',
      description: 'First-aid and ambulance dispatch',
      color: 'red',
    },
    {
      title: 'Utility Outage',
      phone: '+1 (555) 012-7733',
      description: 'Plumbing, electrical, and gas emergencies',
      color: 'orange',
    },
    {
      title: 'Fire Marshal',
      phone: '+1 (555) 012-8822',
      description: 'Smoke detection and evacuation',
      color: 'orange',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-white px-6 py-16 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-4 text-5xl font-bold text-primary">Reach Out.</h1>
            <p className="max-w-2xl text-lg text-gray-600">
              Connected living starts with a simple conversation. Our team is here to support your
              journey in The Living Canvas.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-6 py-12 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Form */}
              <Card variant="default" className="p-8 lg:p-10">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">SUBJECT</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                    >
                      <option value="">General Inquiry</option>
                      <option value="maintenance">Maintenance Request</option>
                      <option value="feedback">Feedback</option>
                      <option value="amenities">Amenities Booking</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      YOUR MESSAGE
                    </label>
                    <textarea
                      placeholder="How can we help you today?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send Inquiry
                  </Button>
                </form>
              </Card>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Location */}
                <Card variant="default" className="overflow-hidden p-0">
                  <div className="bg-gray-200 p-6">
                    <h3 className="mb-4 text-xl font-bold text-gray-900">Our Location</h3>
                    <div className="relative h-64 overflow-hidden rounded-lg bg-gray-300">
                      <div className="flex h-full items-center justify-center">
                        <div className="rounded-lg bg-white p-6 shadow-lg">
                          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                            <svg
                              className="h-6 w-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <h4 className="font-bold text-gray-900">The Living Canvas</h4>
                          <p className="text-sm text-gray-600">
                            4200 Artistry Way, North District
                            <br />
                            Vancouver, BC V6B 2P8
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Office Hours */}
                <Card variant="default" className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">Management Office Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b pb-3">
                      <span className="font-medium text-gray-700">Monday — Friday</span>
                      <span className="font-semibold text-gray-900">08:00 AM – 06:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b pb-3">
                      <span className="font-medium text-gray-700">Saturday</span>
                      <span className="font-semibold text-gray-900">10:00 AM – 04:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Sunday</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                  <div className="mt-6 rounded-lg bg-mint p-4">
                    <p className="text-sm leading-relaxed text-gray-700">
                      <strong>Note:</strong> Residents can access the automated concierge portal
                      24/7 for guest registration and package notifications.
                    </p>
                  </div>
                </Card>

                {/* Newsletter */}
                <Card variant="default" className="bg-gray-900 p-6 text-white">
                  <h3 className="mb-2 text-lg font-bold">Community Updates</h3>
                  <p className="mb-4 text-sm opacity-80">
                    Get the latest on events and important announcements.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="flex-1 rounded-lg border-0 bg-white/10 px-4 py-2 text-white placeholder-white/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button variant="primary" size="md">
                      Join
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="bg-white px-6 py-12 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="text-3xl">✱</span>
              <h2 className="text-3xl font-bold text-gray-900">Emergency Contacts</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {emergencyContacts.map((contact, index) => (
                <Card
                  key={index}
                  variant="default"
                  className={`p-6 ${
                    contact.color === 'red'
                      ? 'border-l-4 border-l-red-500'
                      : 'border-l-4 border-l-orange-500'
                  }`}
                >
                  <h3 className="mb-2 font-bold text-gray-900">{contact.title}</h3>
                  <p className="mb-3 text-xs text-gray-500">{contact.description}</p>
                  <a
                    href={`tel:${contact.phone}`}
                    className={`flex items-center gap-2 text-lg font-bold ${
                      contact.color === 'red' ? 'text-red-600' : 'text-orange-600'
                    } hover:opacity-80`}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                    </svg>
                    {contact.phone}
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
