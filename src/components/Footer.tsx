import React from 'react';

const Footer = () => {
  const aboutLinks = [
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Featured', href: '/featured' },
    { label: 'Partnership', href: '/partnership' },
    { label: 'Business Relation', href: '/business-relation' },
  ];

  const communityLinks = [
    { label: 'Events', href: '/events' },
    { label: 'Blog', href: '/blog' },
    { label: 'Podcast', href: '/podcast' },
    { label: 'Invite a friend', href: '/invite' },
  ];

  const socialLinks = [
    { label: 'Discord', href: 'https://discord.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
  ];

  const socialIcons = [
    { icon: 'f', href: 'https://facebook.com', label: 'Facebook' },
    { icon: 't', href: 'https://twitter.com', label: 'Twitter' },
    { icon: '@', href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Drillo Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-6">Drillo</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-xs">
              Our vision is to provide ence<br />
              and help increase your sales ness.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg hover:bg-gray-200 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-semibold mb-6">About</h3>
            <ul className="space-y-4">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-base hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-semibold mb-6">Community</h3>
            <ul className="space-y-4">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-base hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-semibold mb-6">Socials</h3>
            <ul className="space-y-4">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 text-base hover:text-white transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 space-y-4 sm:space-y-0">
          <div className="text-gray-300 text-sm">
            ©2025 Drillo.Ai All rights reserved
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
            <a
              href="/privacy-policy"
              className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
            >
              Privacy & Policy
            </a>
            <a
              href="/terms-conditions"
              className="text-gray-300 text-sm hover:text-white transition-colors duration-300"
            >
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;