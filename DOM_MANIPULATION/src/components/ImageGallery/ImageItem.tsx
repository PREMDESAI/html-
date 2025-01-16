import React from 'react';
import { ImageData } from '../../types/gallery';

interface ImageItemProps {
  image: ImageData;
  onClick: () => void;
}

export const ImageItem: React.FC<ImageItemProps> = ({ image, onClick }) => {
  return (
    <div 
      className="relative aspect-square overflow-hidden rounded-lg cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 hover:opacity-100 transition-opacity">
        <p className="text-sm truncate">{image.title}</p>
      </div>
    </div>
  );
};