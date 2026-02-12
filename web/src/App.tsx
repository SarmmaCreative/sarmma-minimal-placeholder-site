
function App() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden font-display selection:bg-primary selection:text-white">
      {/* Landscape Background */}
      <div className="absolute inset-0 bg-background-dark landscape:block portrait:hidden" />

      {/* Portrait Background & Dot Pattern */}
      <div className="absolute inset-0 bg-background-portrait portrait:block landscape:hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #7aa2f7 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full h-screen flex items-center justify-center">
        {/* Landscape Text */}
        <div className="landscape:block portrait:hidden w-full text-center">
          <h1 className="text-fluid-hero font-bold tracking-tight text-gradient-silver opacity-0 animate-fade-up cursor-default select-none">
            Sarmma
          </h1>
        </div>

        {/* Portrait Text */}
        <div className="portrait:flex landscape:hidden items-center justify-center h-full w-full">
          <h1 className="rotated-text text-gray-300 font-medium tracking-tighter leading-none select-none" style={{ fontSize: 'clamp(60px, 18vh, 150px)' }}>
            Sarmma
          </h1>
        </div>
      </main>

      {/* Debug Info (Hidden in production or just kept minimal if needed) */}
      {/*
      <div className="fixed bottom-4 right-4 text-xs text-gray-800 dark:text-gray-500 font-mono hidden md:block opacity-50">
        Resposive Layout Active
      </div>
      */}
    </div>
  );
}

export default App;
