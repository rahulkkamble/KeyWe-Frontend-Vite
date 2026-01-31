import keyWeLogo from './assets/images/logo/KeyWe Logo Horizontal.png';

const HomePageHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 py-3">
      <div className="container mx-auto px-4 md:px-12 h-full">
        
        {/* Main Flex Container */}
        <div className="flex items-center justify-between w-full">

          {/* 1. LEFT SIDE (Flex = 1) */}
          {/* 'hidden lg:flex' hides this on mobile, pushing logo to left */}
          <div className="flex-1 hidden lg:flex items-center">
             {/* Uncomment if needed:
             <button className="text-gray-800 p-0 mr-3">
                <List size={30} />
             </button> 
             */}
             <div className="w-px"></div> {/* Placeholder spacer */}
          </div>

          {/* 2. CENTER: Brand Logo */}
          <a className="flex items-center font-bold text-2xl text-gray-900 no-underline hover:text-gray-900" href="/">
              <img className="h-10 w-auto object-contain" src={keyWeLogo} alt="keywe-logo" srcset="" />
          </a>

          {/* 3. RIGHT SIDE (Flex = 1) */}
          <div className="flex-1 flex items-center justify-end gap-6">
            {/* Nav Links - Hidden on mobile */}
            <nav className="hidden md:flex gap-6">
              {['Buy', 'Sell', 'About', 'Help'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-500 font-normal hover:text-keywe-dark no-underline text-lg">
                  {item}
                </a>
              ))}
            </nav>

            {/* Login Button */}
            <button className="btn-keywe-gradient">
              Login
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;