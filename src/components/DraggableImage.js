import React, { useState } from 'react';

const DraggableImage = ({ image, onDragStart, onDragOver, onDrop }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const isDragAndDropSupported = 'draggable' in document.createElement('div');

  const handleDragStart = (e) => {
    if (isDragAndDropSupported) {
      setIsDragging(true);
      onDragStart(e, image.src);
    }
  };

  const handleDragOver = (e) => {
    if (isDragAndDropSupported) {
      e.preventDefault();
      setIsDragOver(true);
      onDragOver(e, image.src);
    }
  };

  const handleDragLeave = () => {
    if (isDragAndDropSupported) {
      setIsDragOver(false);
    }
  };

  const handleDrop = (e) => {
    if (isDragAndDropSupported) {
      e.preventDefault();
      setIsDragging(false);
      setIsDragOver(false);
      onDrop(e, image.src);
    }
  };

  const imageCardClasses = `image-card ${isDragging ? 'dragging' : ''} ${
    isDragOver ? 'drag-over' : ''
  }`;

  return (
    <div
      draggable={isDragAndDropSupported}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={imageCardClasses}
    >
      <img src={image.src} alt={image.id} />
      <div className="image-tags">
        {image.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default DraggableImage;
