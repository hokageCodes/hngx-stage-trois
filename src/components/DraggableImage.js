// DraggableImage.js
import React from 'react';

const DraggableImage = ({ image, onDragStart, onDragOver, onDrop }) => {
  const handleDragStart = (e) => {
    onDragStart(e, image.src);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    onDragOver(e, image.src);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    onDrop(e, image.src);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="image-card"
    >
      <img src={image.src} alt={image.id} />
    </div>
  );
};

export default DraggableImage;
