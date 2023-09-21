// ImageGallery.js
import React, { useEffect, useState } from 'react';
import DraggableImage from '../DraggableImage';
import imageData from '../ImageList';
import './imagegallery.css';
import LoadingSpinner from '../Loading';

const ImageGallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([...imageData]);
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false); // New state variable

  const handleDragStart = (e, sourceImageSrc) => {
    e.dataTransfer.setData('imageSrc', sourceImageSrc);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Simulate fetching images
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulated 2-second loading delay
  }, []);

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

  // Check if no results were found
  useEffect(() => {
    setNoResults(filteredImages.length === 0);
  }, [filteredImages]);

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by tag"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className='gallery-search'>Search</button>
      </div>
      <div className='gallery-container'>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="image-gallery">
            {noResults ? (
              <p>No results found for '{searchQuery}'.</p>
            ) : (
              filteredImages.map((image) => (
                <DraggableImage
                  key={image.id}
                  image={image}
                  onDragStart={handleDragStart}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                />
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ImageGallery;
