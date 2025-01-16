import { useState, useCallback } from 'react';
import { ImageData } from '../types/gallery';

export const useLightboxControls = (images: ImageData[]) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const openLightbox = useCallback((image: ImageData) => {
    const index = images.findIndex(img => img.id === image.id);
    setCurrentImageIndex(index);
  }, [images]);

  const closeLightbox = useCallback(() => {
    setCurrentImageIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (currentImageIndex === null) return;
    setCurrentImageIndex((prev) => 
      prev === null ? null : (prev + 1) % images.length
    );
  }, [currentImageIndex, images.length]);

  const showPrevious = useCallback(() => {
    if (currentImageIndex === null) return;
    setCurrentImageIndex((prev) => 
      prev === null ? null : (prev - 1 + images.length) % images.length
    );
  }, [currentImageIndex, images.length]);

  const currentImage = currentImageIndex !== null ? images[currentImageIndex] : null;

  return {
    currentImage,
    openLightbox,
    closeLightbox,
    showNext,
    showPrevious
  };
};