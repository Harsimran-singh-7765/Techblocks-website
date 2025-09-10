const AboutSection = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left column - Text */}
        <div className="space-y-6">
          <h2 className="font-pixel text-3xl md:text-4xl text-primary mb-8">
            ABOUT TECHBLOCKS
          </h2>
          <div className="font-console text-lg leading-relaxed text-foreground space-y-4">
            <p>
              Welcome to Techblocks, where innovation meets creativity in a pixelated world of endless possibilities. 
              Our IEEE and WIE communities come together to build the future, one block at a time.
            </p>
            <p>
              From cutting-edge AI development to web applications that change the world, we're creating 
              tomorrow's technology today. Join our community of builders, creators, and innovators.
            </p>
            <p>
              Each domain represents a different facet of modern technology, carefully crafted to provide 
              hands-on experience and real-world applications. Click on any block below to explore deeper!
            </p>
          </div>
          <div className="flex space-x-4 mt-8">
            <div className="minecraft-block block-ice px-6 py-3 text-white font-pixel text-sm">
              JOIN US
            </div>
            <div className="minecraft-block block-crystal px-6 py-3 text-white font-pixel text-sm">
              LEARN MORE
            </div>
          </div>
        </div>

        {/* Right column - Image placeholder */}
        <div className="relative">
          <div className="minecraft-block block-deep aspect-square w-full max-w-md mx-auto flex items-center justify-center">
            <div className="text-center text-white">
              <div className="font-pixel text-6xl mb-4">⬛</div>
              <p className="font-console text-lg">Innovation Block</p>
              <p className="font-console text-sm opacity-75">Building the Future</p>
            </div>
          </div>
          {/* Floating mini blocks */}
          <div className="absolute -top-4 -right-4 minecraft-block block-crystal w-8 h-8 pixel-bounce"></div>
          <div className="absolute -bottom-4 -left-4 minecraft-block block-electric w-6 h-6 pixel-bounce" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;