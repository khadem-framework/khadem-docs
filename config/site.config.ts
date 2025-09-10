export const siteConfig = {
  name: 'Khadem',
  description: 'The Dart Backend Framework',
  url: 'https://khadem.dev',
  ogImage: 'https://khadem.dev/og-image.png',

  social: {
    github: 'https://github.com/khedrmahmoud/khadem',
    discord: 'https://discord.gg/XdbryzNJt9',
    twitter: 'https://x.com/KhademFramework',
    linkedin: 'https://linkedin.com/company/khadem-framework',
    youtube: 'https://youtube.com/@khadem-framework'
  },

  navigation: [
    { key: 'nav.home', path: '/' },
    { key: 'nav.docs', path: '/docs' },
    { key: 'nav.showcase', path: '/showcase' },
    { key: 'nav.community', path: '/community' },
    { key: 'nav.blog', path: '/blog' }
  ],

  docs: {
    sections: [
      {
        title: 'Getting Started',
        items: [
          { title: 'Installation', path: '/docs/installation' },
          { title: 'Creating a Project', path: '/docs/creating-project' },
          { title: 'Folder Structure', path: '/docs/folder-structure' },
          { title: 'Configuration', path: '/docs/configuration' }
        ]
      },
      {
        title: 'Core Concepts',
        items: [
          { title: 'Container', path: '/docs/container' },
          { title: 'Routing', path: '/docs/routing' },
          { title: 'Response System', path: '/docs/response' },
          { title: 'Middleware', path: '/docs/middleware' },
          { title: 'Models & ORM', path: '/docs/models' },
          { title: 'Database & Queries', path: '/docs/queries' },
          { title: 'Relationships', path: '/docs/relationships' },
          { title: 'Migrations', path: '/docs/migrations' },
          { title: 'Validation', path: '/docs/validation' },
          { title: 'Authentication', path: '/docs/auth' },
          { title: 'Authorization', path: '/docs/authorization' }
        ]
      },
      {
        title: 'Advanced Features',
        items: [
          { title: 'Events & Listeners', path: '/docs/events' },
          { title: 'Queue System', path: '/docs/queue' },
          { title: 'Caching', path: '/docs/cache' },
          { title: 'Storage', path: '/docs/storage' },
          { title: 'Logging', path: '/docs/logging' },
          { title: 'Security', path: '/docs/security' },
          { title: 'WebSockets', path: '/docs/websockets' },
          { title: 'CLI Commands', path: '/docs/cli' },
          { title: 'Task Scheduling', path: '/docs/scheduler' }
        ]
      },
      {
        title: 'Deployment',
        items: [
          { title: 'Docker', path: '/docs/docker' },
          { title: 'Production', path: '/docs/production' },
          { title: 'Monitoring', path: '/docs/monitoring' }
        ]
      }
    ]
  },

  features: [
    {
      title: 'Lightning Fast',
      description: 'JIT compilation and optimized architecture deliver exceptional performance for your applications.',
      icon: '⚡'
    },
    {
      title: 'Modular Architecture',
      description: 'Clean separation of concerns with a powerful service container and dependency injection system.',
      icon: '🧩'
    },
    {
      title: 'Developer-Friendly CLI',
      description: 'Intuitive command-line tools for project scaffolding, migrations, and deployment automation.',
      icon: '🛠️'
    },
    {
      title: 'Docker Ready',
      description: 'Built-in Docker support with optimized containers for seamless deployment and scaling.',
      icon: '🐳'
    },
    {
      title: 'Type Safe',
      description: 'Full type safety with Dart\'s sound null safety and static analysis.',
      icon: '🔒'
    },
    {
      title: 'Laravel Inspired',
      description: 'Familiar patterns and conventions inspired by Laravel, but built for Dart.',
      icon: '🎯'
    }
  ],

  testimonials: [
    {
      name: 'Ahmed Hassan',
      role: 'Senior Backend Developer',
      company: 'TechCorp',
      content: 'Khadem has transformed how we build backend services. The performance and developer experience are outstanding.',
      avatar: '/avatars/ahmed.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      company: 'StartupXYZ',
      content: 'The CLI tools and modular architecture make development so much faster. Highly recommended!',
      avatar: '/avatars/sarah.jpg'
    },
    {
      name: 'Mohamed Ali',
      role: 'CTO',
      company: 'InnovateTech',
      content: 'Khadem\'s type safety and performance have helped us scale our application significantly.',
      avatar: '/avatars/mohamed.jpg'
    }
  ]
}
