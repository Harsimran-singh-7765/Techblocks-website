import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  useEffect(() => {
    const texts = [
      'Initializing...',
      'Loading Blocks...',
      'Connecting Domains...',
      'Building Interface...',
      'Ready to Explore!'
    ];

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete?.(), 500);
          return 100;
        }
        
        const newProgress = prev + Math.random() * 15 + 5;
        const textIndex = Math.floor((newProgress / 100) * (texts.length - 1));
        setLoadingText(texts[textIndex] || texts[0]);
        
        return Math.min(newProgress, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Animated Minecraft-style blocks */}
        <div className="flex justify-center gap-2 mb-8">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="w-6 h-6 minecraft-block bg-gradient-to-br from-primary to-primary/80"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: 'pixel-bounce 1.5s infinite ease-in-out'
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <div className="font-pixel text-lg text-foreground mb-4">
          {loadingText}
        </div>

        {/* Progress bar */}
        <div className="w-80 mx-auto">
          <div className="h-3 bg-muted rounded-sm overflow-hidden minecraft-block">
            <div 
              className="h-full bg-gradient-ice transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 font-console text-sm text-muted-foreground">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Tech brand */}
        <div className="font-tech text-2xl font-bold bg-gradient-ice bg-clip-text text-transparent">
          TECHBLOCKS
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="w-full h-full" 
          style={{ 
            backgroundImage: 'var(--pixel-pattern)',
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>
    </div>
  );
};

export default Preloader;