import { useState } from 'react';

interface Domain {
  id: string;
  title: string;
  icon: string;
  shortTitle: string;
}

interface MacDockProps {
  domains: Domain[];
  activeDomain: string;
  onDomainSelect: (domainId: string) => void;
}

const MacDock = ({ domains, activeDomain, onDomainSelect }: MacDockProps) => {
  return (
    <div className="dock-container">
      <div className="flex flex-col items-center gap-3">
        {domains.map((domain) => (
          <div
            key={domain.id}
            onClick={() => onDomainSelect(domain.id)}
            className={`dock-item minecraft-block w-20 h-20 ${
              domain.id === 'ai' ? 'block-crystal' :
              domain.id === 'web' ? 'block-ice' :
              domain.id === 'ece' ? 'block-electric' : 'block-deep'
            } ${activeDomain === domain.id ? 'active' : ''}`}
            title={domain.title}
          >
            <div className="text-center text-white z-10 relative">
              <div className="text-3xl mb-2">{domain.icon}</div>
              <div className="font-pixel text-xs opacity-90">{domain.shortTitle}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MacDock;