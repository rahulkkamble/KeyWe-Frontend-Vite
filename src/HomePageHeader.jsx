import keyWeLogo from './assets/images/logo/KeyWe-Logo-Horizontal.png';

const HomePageHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 py-3" role="banner">
      <div className="container mx-auto px-4 md:px-12 h-full">
        
        <div className="flex items-center justify-between w-full">

          {/* 1. LEFT SPACER (For centering logic) */}
          <div className="flex-1 hidden lg:flex items-center" aria-hidden="true">
             <div className="w-px"></div> 
          </div>

          {/* 2. LOGO */}
          {/* SEO: Added rel="home" and explicit width/height to prevent CLS */}
          <a className="flex items-center justify-center" href="/" rel="home" title="KeyWe Home">
            <img 
              src={keyWeLogo} 
              alt="KeyWe - Real Estate Buy & Sell" 
              width="140"   // Explicit width for browser layout reservation
              height="40"   // Explicit height
              className="h-10 w-auto object-contain" 
            />
          </a>

          {/* 3. RIGHT NAVIGATION */}
          <div className="flex-1 flex items-center justify-end gap-6">
            
            {/* SEO: Added aria-label to define what this specific navigation does */}
            <nav className="hidden md:flex gap-6" aria-label="Main navigation">
              {['Buy', 'Sell', 'About', 'Help'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-500 font-normal hover:text-keywe-dark no-underline text-lg transition-colors"
                  title={`Go to ${item} section`}
                >
                  {item}
                </a>
              ))}
            </nav>
            <button className="btn-keywe-gradient" aria-label="Login to your account">
              Login
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;