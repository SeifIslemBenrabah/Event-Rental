import { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const LazyImage = ({ src, alt = '', className = '' }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className={`bg-gray-200 animate-pulse ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      />
    </>
  );
};

export default LazyImage;
