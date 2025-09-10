import { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="navbar-block sticky top-0 z-50 px-6 py-4">
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        {/* Center - Techblocks title only */}
        <div className="text-center">
          <h1 className="font-pixel text-2xl md:text-4xl text-primary pulse-glow">
            TECHBLOCKS
          </h1>
          <p className="font-console text-sm text-muted-foreground mt-1">
            IEEE Innovation Hub
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;