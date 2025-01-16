import React from 'react';
import { ImageItem } from './ImageItem';
import { ImageData } from '../../types/gallery';

interface ImageGridProps {
  images: ImageData[];
  onImageClick: (image: ImageData) => void;
}

export const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((image) => (
        <ImageItem 
          key={image.id} 
          image={image} 
          onClick={() => onImageClick(image)} 
        />
      ))}
    </div>
  );
};