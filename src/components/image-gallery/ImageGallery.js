// ImageGallery.js
import React, { useState } from 'react';
import DraggableImage from '../DraggableImage';
import imageData from '../ImageList';
import './imagegallery.css';

const ImageGallery = () => {
  const [images, setImages] = useState([...imageData]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDragStart = (e, sourceImageSrc) => {
    e.dataTransfer.setData('imageSrc', sourceImageSrc);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetImageSrc) => {
    const sourceImageSrc = e.dataTransfer.getData('imageSrc');
    const updatedImages = [...images];
    const sourceImageIndex = updatedImages.findIndex((image) => image.src === sourceImageSrc);
    const targetImageIndex = updatedImages.findIndex((image) => image.src === targetImageSrc);

    if (sourceImageIndex !== -1 && targetImageIndex !== -1) {
      const temp = updatedImages[sourceImageIndex];
      updatedImages[sourceImageIndex] = updatedImages[targetImageIndex];
      updatedImages[targetImageIndex] = temp;

      setImages(updatedImages);
    }
  };

  const filteredImages = images.filter((image) => {
    return image.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  return (
    <div className="image-gallery">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by tag"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {filteredImages.map((image) => (
        <DraggableImage
          key={image.id}
          image={image}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
