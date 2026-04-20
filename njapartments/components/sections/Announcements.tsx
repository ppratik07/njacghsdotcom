import React from 'react';
import Card from '../ui/Card';

const Announcements: React.FC = () => {
  const featuredAnnouncement = {
    badge: 'ANNOUNCEMENT',
    date: 'OCT 18, 2025',
    title: 'Annual General Meeting & Future Planning 2024',
    description:
      'Dear residents, We are pleased to invite you to our annual meeting to discuss the new landscape initiatives, and solar panel integration for the clubhouse. Your participation is vital in shaping the community\'s evolution.',
    link: '#',
  };

  const sidebarAnnouncements = [
    {
      icon: '🏡',
      category: 'MAINTENANCE',
      title: 'Quarterly Water Tank Cleaning',
      date: 'OCT 25, 2025',
    },
    {
      icon: '🔒',
      category: 'SECURITY',
      title: 'New Visitor Management System Trial',
      date: 'SEP 11, 2025',
    },
    {
      icon: '🎉',
      category: 'COMMUNITY',
      title: 'Annual Harvest Social Dinner',
      date: 'SEP 08, 2025',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
            STAY INFORMED
          </p>
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Latest Announcements</h2>
        </div>

        {/* Announcements Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Featured Announcement */}
          <Card
            variant="announcement"
            accentBorder
            className="lg:col-span-2 p-8"
          >
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              {featuredAnnouncement.badge}
            </div>
            <p className="mb-2 text-sm font-medium text-gray-500">
              {featuredAnnouncement.date}
            </p>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              {featuredAnnouncement.title}
            </h3>
            <p className="mb-6 leading-relaxed text-gray-600">
              {featuredAnnouncement.description}
            </p>
            <a
              href={featuredAnnouncement.link}
              className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-dark"
            >
              Read Full Agenda
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </Card>

          {/* Sidebar Announcements */}
          <div className="flex flex-col gap-4">
            {sidebarAnnouncements.map((announcement, index) => (
              <Card key={index} variant="default" className="p-5 hover:border-l-4 hover:border-l-primary transition-all">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl">{announcement.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-500">
                    {announcement.category}
                  </span>
                </div>
                <h4 className="mb-2 font-semibold text-gray-900">
                  {announcement.title}
                </h4>
                <p className="text-sm text-gray-500">{announcement.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
