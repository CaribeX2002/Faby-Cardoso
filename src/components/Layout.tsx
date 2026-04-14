import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatAssistant from './ChatAssistant';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />

      <ChatAssistant />
    </div>
  );
}
