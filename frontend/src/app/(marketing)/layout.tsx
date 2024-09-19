import React from 'react';
import Link from 'next/link';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <nav className="container mx-auto px-4">
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Roseiies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}