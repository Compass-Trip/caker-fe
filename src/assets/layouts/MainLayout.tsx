import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-w-[375px] min-h-[812px] w-screen h-screen relative">
      {children}
    </div>
  );
};

export default MainLayout;
