// DraggableImage.js
import React, { useState } from 'react';

const DraggableImage = ({ image, onDragStart, onDragOver, onDrop }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragStart = (e) => {
    setIsDragging(true);
    onDragStart(e, image.src);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
    onDragOver(e, image.src);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    setIsDragOver(false);
    onDrop(e, image.src);
  };

  const imageCardClasses = `image-card ${isDragging ? 'dragging' : ''} ${
    isDragOver ? 'drag-over' : ''
  }`;

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={imageCardClasses}
    >
      <img src={image.src} alt={image.id} />
    </div>
  );
};

export default DraggableImage;
