// DraggableImage.js
import React, { useRef } from 'react';

const DraggableImage = ({ image, onDragStart, onDragOver, onDrop }) => {
  const imageRef = useRef(null);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('imageSrc', image.src);
    imageRef.current.style.opacity = '0.5'; // Adjust the style when dragging starts
    onDragStart(e, image.src);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    onDragOver(e, image.src);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    imageRef.current.style.opacity = '1'; // Reset the style when dropping
    onDrop(e, image.src);
  };

  return (
    <div
      draggable="true"
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="image-card"
      ref={imageRef}
    >
      <img src={image.src} alt={image.id} />
    </div>
  );
};

export default DraggableImage;
