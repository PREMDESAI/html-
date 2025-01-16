import React, { useEffect, useCallback } from 'react';
import { ImageData } from '../../types/gallery';
import { useLightboxControls } from '../../hooks/useLightboxControls';

interface LightboxProps {
  image: ImageData | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ 
  image, 
  onClose, 
  onNext, 
  onPrevious 
}) => {
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowRight':
        onNext();
        break;
      case 'ArrowLeft':
        onPrevious();
        break;
    }
  }, [onClose, onNext, onPrevious]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-xl p-2"
        aria-label="Close lightbox"
      >
        ✕
      </button>
      <button
        onClick={onPrevious}
        className="absolute left-4 text-white text-2xl p-4"
        aria-label="Previous image"
      >
        ‹
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 text-white text-2xl p-4"
        aria-label="Next image"
      >
        ›
      </button>
      <div className="max-w-4xl max-h-[90vh] p-4">
        <img
          src={image.url}
          alt={image.title}
          className="max-w-full max-h-[80vh] object-contain"
        />
        <p className="text-white text-center mt-4">{image.title}</p>
      </div>
    </div>
  );
};