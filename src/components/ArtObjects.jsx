import { useCallback, useEffect, useMemo, useState } from 'react';
import ArtObject from './ArtObject';

const ArtObjects = ({ items }) => {
  const [columns, setColumns] = useState([]);

  // Memoize breakpoints object
  const breakpoints = useMemo(
    () => ({
      mobile: 2,
      horizontalMobile: 3,
      tablet: 4,
      desktop: 5,
    }),
    []
  );

  // Function to calculate breakpoint based on window width
  const getCurrentBreakpoint = () => {
    if (window.innerWidth >= 1024) {
      return 'desktop';
    } else if (window.innerWidth >= 700) {
      return 'tablet';
    } else if (window.innerWidth >= 480) {
      return 'horizontalMobile';
    } else {
      return 'mobile';
    }
  };

  // Handle resize event
  const handleResize = useCallback(() => {
    const currentBreakpoint = getCurrentBreakpoint();
    const newColumns = Array.from(
      { length: breakpoints[currentBreakpoint] },
      () => []
    );
    items.forEach((item, index) => {
      newColumns[index % breakpoints[currentBreakpoint]].push(item);
    });
    setColumns(newColumns);
  }, [items, breakpoints]);

  // calculate and update columns when the window is resized
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize, breakpoints]);

  return (
    <div className="grid">
      {columns.map((column, index) => (
        <div key={index} className="grid__column">
          {column.map((item) => (
            <ArtObject key={item.id} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ArtObjects;