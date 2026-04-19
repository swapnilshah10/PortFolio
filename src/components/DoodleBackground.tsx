// Pure Server Component - Zero extra JS loaded
export default function DoodleBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505] flex justify-center items-center">
      {/* Hyper-optimized Pure CSS 3D Grid (Zero lag) */}
      <div 
        className="absolute w-[200vw] h-[200vh] opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(600px) rotateX(60deg) translateY(0)',
          animation: 'gridMove 5s linear infinite',
        }}
      />
      
      {/* Center glowing orb to give a premium tech feel */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#3b82f6] opacity-10 blur-[120px]" />
      
      {/* Top fade gradient to seamlessly blend with the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-90 z-10" />
      
      {/* Radial fade for the edges to make it look like a spotlight/horizon */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_80%)] z-10" />
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gridMove {
          0% { transform: perspective(600px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(600px) rotateX(60deg) translateY(40px); }
        }
      `}} />
    </div>
  );
}
