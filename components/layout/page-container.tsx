import React from 'react';
import Footer from './footer';
import Header from './header';
import Sidebar from './sidebar';

export default function PageContainer({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
        <div className="w-full overflow-hidden">
          <Header />
            <main className="px-8 py-4">{children}</main>
          <Footer />
      </div>
    </>
  );
}
