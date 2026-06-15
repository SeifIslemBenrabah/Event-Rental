import { useEffect, useState } from 'react';

const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 2400);
    const doneTimer = setTimeout(() => onDone(), 3000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);  }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes sweepLine {
          from { width: 0; }
          to   { width: 160px; }
        }
        @keyframes shimmerText {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0;  }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40%           { transform: scale(1);   opacity: 1;   }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.15; }
          50%       { opacity: 0.3;  }
        }
      `}</style>

      {/* Ambient glow behind logo */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, #e8d5ff 0%, transparent 70%)',
        animation: 'glowPulse 3s ease-in-out infinite',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      {/* Diamond ornament */}
      <div style={{
        animation: 'fadeIn 0.6s 0.2s ease both',
        color: '#5201FF',
        fontSize: '1.1rem',
        marginBottom: '18px',
        letterSpacing: '12px',
        opacity: 0,
      }}>
        ◆ ◆ ◆
      </div>

      {/* Top thin line */}
      <div style={{
        animation: 'sweepLine 0.7s 0.4s ease both',
        width: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #a78bfa, #5201FF, #a78bfa, transparent)',
        marginBottom: '32px',
      }} />

      {/* Logo */}
      <div style={{
        animation: 'fadeUp 0.9s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
        fontFamily: "'IBM Plex Sans Arabic', system-ui, -apple-system, sans-serif",
        fontSize: 'clamp(2.6rem, 8vw, 4.2rem)',
        fontWeight: 900,
        letterSpacing: '-2px',
        lineHeight: 1,
        marginBottom: '14px',
        opacity: 0,
      }}>
        <span style={{
          color: '#08060d',
          textShadow: 'none',
        }}>
          Event
        </span>
        <span style={{
          background: 'linear-gradient(135deg, #7c3aed, #5201FF, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 0 20px rgba(82,1,255,0.5))',
        }}>
          Rental
        </span>
      </div>

      {/* Bottom sweep line */}
      <div style={{
        animation: 'sweepLine 0.8s 0.9s ease both',
        width: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #5201FF, #a78bfa, transparent)',
        marginBottom: '22px',
      }} />

      {/* Subtitle */}
      <p style={{
        animation: 'fadeIn 0.8s 1.1s ease both',
        opacity: 0,
        color: 'rgba(82, 1, 255, 0.45)',
        fontFamily: "'IBM Plex Sans Arabic', system-ui, sans-serif",
        fontSize: '0.72rem',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        marginBottom: '52px',
      }}>
        Riyadh · إيجار مستلزمات المناسبات · Saudi Arabia
      </p>

      {/* Loading dots */}
      <div style={{ display: 'flex', gap: '10px' }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #7c3aed, #5201FF)',
            boxShadow: '0 0 8px rgba(82,1,255,0.7)',
            animation: `dotBounce 1.4s ${i * 0.18}s ease-in-out infinite`,
          }} />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
