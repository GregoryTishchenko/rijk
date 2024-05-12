import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // handle scroll event
  const handleScroll = () => {
    // If the page is scrolled beyond the top, set isScrolled to true, otherwise set it to false
    setIsScrolled(window.scrollY > 0);
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CSS class for header image
  const headerImageClass = isScrolled ? 'scrolled' : '';

  return (
    <header>
      <div className="content">
        <div className={`logo ${headerImageClass}`}>
          <img src="/logo.svg" alt="Rijk - gallery" />
          <span>Rijk gallery</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
