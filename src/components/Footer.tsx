const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-border py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* IEEE Contact */}
          <div className="text-center">
            <div className="minecraft-block block-ice w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="font-pixel text-white text-sm">IEEE</span>
            </div>
            <h3 className="font-pixel text-lg text-primary mb-4">IEEE CHAPTER</h3>
            <div className="space-y-2 font-console text-sm text-muted-foreground">
              <p>📧 ieee@techblocks.dev</p>
              <p>📱 +1 (555) IEEE-TECH</p>
              <p>🌐 ieee.techblocks.dev</p>
            </div>
          </div>

          {/* WIE Contact */}
          <div className="text-center">
            <div className="minecraft-block block-crystal w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="font-pixel text-white text-sm">WIE</span>
            </div>
            <h3 className="font-pixel text-lg text-primary mb-4">WIE CHAPTER</h3>
            <div className="space-y-2 font-console text-sm text-muted-foreground">
              <p>📧 wie@techblocks.dev</p>
              <p>📱 +1 (555) WIE-TECH</p>
              <p>🌐 wie.techblocks.dev</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <div className="minecraft-block block-electric w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="font-pixel text-white text-lg">⚡</span>
            </div>
            <h3 className="font-pixel text-lg text-primary mb-4">CONNECT</h3>
            <div className="flex justify-center space-x-4">
              <div className="minecraft-block block-ice w-10 h-10 flex items-center justify-center cursor-pointer">
                <span className="text-white text-sm">📘</span>
              </div>
              <div className="minecraft-block block-crystal w-10 h-10 flex items-center justify-center cursor-pointer">
                <span className="text-white text-sm">🐦</span>
              </div>
              <div className="minecraft-block block-deep w-10 h-10 flex items-center justify-center cursor-pointer">
                <span className="text-white text-sm">💼</span>
              </div>
              <div className="minecraft-block block-electric w-10 h-10 flex items-center justify-center cursor-pointer">
                <span className="text-white text-sm">📸</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-console text-muted-foreground">
            © 2024 IEEE Techblocks. Built with ⚡ and 🎮 by IEEE & WIE
          </p>
          <div className="flex justify-center space-x-2 mt-4">
            <div className="minecraft-block block-ice w-4 h-4"></div>
            <div className="minecraft-block block-crystal w-4 h-4"></div>
            <div className="minecraft-block block-electric w-4 h-4"></div>
            <div className="minecraft-block block-deep w-4 h-4"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;