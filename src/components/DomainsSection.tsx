import { useState, useEffect, useRef } from 'react';
import MacDock from './MacDock';

interface Domain {
  id: string;
  title: string;
  blockType: string;
  description: string;
  details: string;
  registerLink: string;
  icon: string;
  shortTitle: string;
}
const domains: Domain[] = [
  {
    id: 'ai',
    title: 'AGENTIC AI',
    blockType: 'block-crystal',
    description: 'Autonomous AI Systems',
    details:
      'Step into the future of Agentic Artificial Intelligence. Learn to design AI agents that operate independently, make decisions, and interact intelligently with real-world environments. From reinforcement learning and multi-agent systems to practical applications in automation, finance, and robotics — this domain empowers you to build the next generation of self-driven AI systems.',
    registerLink: '#register-ai',
    icon: '🤖',
    shortTitle: 'AI',
  },
  {
    id: 'web',
    title: 'WEB D',
    blockType: 'block-ice',
    description: 'Frontend & Backend Web Development',
    details:
      'Master the web development stack with hands-on learning. Explore HTML, CSS, JavaScript, React, and modern frameworks to build stunning frontends, while also diving into Node.js, databases, and APIs for powerful backends. Build and deploy responsive, scalable web applications that bring ideas to life on the internet.',
    registerLink: '#register-web',
    icon: '🌐',
    shortTitle: 'WEB',
  },
  {
    id: 'app',
    title: 'APP D',
    blockType: 'block-electric',
    description: 'Mobile App Development',
    details:
      'Bring your creativity to mobile platforms by learning app development for Android and iOS. Discover cross-platform frameworks like Flutter and React Native, while also learning native development basics. From UI/UX to cloud integration and performance optimization, this domain will help you create mobile apps that users love.',
    registerLink: '#register-app',
    icon: '📱',
    shortTitle: 'APP',
  },
  {
    id: 'chip',
    title: 'CHIP DESIGNING',
    blockType: 'block-deep',
    description: 'VLSI & Hardware Systems',
    details:
      'Dive into the fascinating world of chip design and VLSI systems. Learn about digital logic, semiconductor basics, HDL (Verilog/VHDL), FPGA prototyping, and ASIC design flow. Explore how processors, memory, and hardware accelerators are designed and optimized to power everything from smartphones to supercomputers.',
    registerLink: '#register-chip',
    icon: '💾',
    shortTitle: 'CHIP',
  },
];

const DomainsSection = () => {
  const [expandedBlock, setExpandedBlock] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const handleBlockClick = (domainId: string) => {
    setExpandedBlock(expandedBlock === domainId ? null : domainId);
  };

  // Handle click outside to reset to 2x2 matrix
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setExpandedBlock(null);
      }
    };

    if (expandedBlock) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedBlock]);

  return (
    <section ref={containerRef} className="py-16 px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-12">
        <h2 className="font-pixel text-4xl md:text-5xl text-primary mb-4">
          DOMAINS
        </h2>
        <p className="font-console text-xl text-muted-foreground">
          Click any block to explore the technology domains
        </p>
      </div>

      {expandedBlock ? (
        // Expanded view with Mac-style dock on the right
        <div className="relative">
          {domains.map((domain) => (
            expandedBlock === domain.id && (
              <div key={domain.id} className="grid md:grid-cols-2 gap-12 items-start pr-20">
                <div className="space-y-6">
                  <h3 className="font-pixel text-3xl text-primary">
                    {domain.title}
                  </h3>
                  <p className="font-console text-lg text-foreground leading-relaxed">
                    {domain.details}
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href={domain.registerLink}
                      className={`minecraft-block ${domain.blockType} px-6 py-3 text-white font-pixel text-sm inline-block`}
                    >
                      REGISTER HERE
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <div className={`minecraft-block ${domain.blockType} aspect-square w-full max-w-md mx-auto flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <div className="font-pixel text-6xl mb-4">
                        {domain.icon}
                      </div>
                      <p className="font-console text-lg">{domain.title}</p>
                      <p className="font-console text-sm opacity-75">{domain.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
          
          {/* Mac-style dock positioned relative to domain section */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <MacDock 
              domains={domains}
              activeDomain={expandedBlock}
              onDomainSelect={setExpandedBlock}
            />
          </div>
        </div>
      ) : (
        // Grid view
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {domains.map((domain) => (
            <div
              key={domain.id}
              onClick={() => handleBlockClick(domain.id)}
              className={`minecraft-block ${domain.blockType} aspect-square flex flex-col items-center justify-center text-center p-8 transition-all duration-300`}
            >
              <div className="text-6xl mb-4">
                {domain.icon}
              </div>
              <h3 className="font-pixel text-xl md:text-2xl text-white mb-2">
                {domain.title}
              </h3>
              <p className="font-console text-sm text-white opacity-90">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default DomainsSection;