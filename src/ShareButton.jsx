import React from 'react';

const ShareButton = ({ file }) => {
  const handleShare = async () => {
    try {
      if (navigator.share && file) {
        await navigator.share({
          title: 'Share Image',
          text: 'Check out this uploaded image!',
          files: [new File([file], 'uploaded-image.png', { type: 'image/png' })],
        });
      } else {
        console.log('Web Share API not supported or no image selected.');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <button onClick={handleShare}>
      Share via Web Share API
    </button>
  );
};

export default ShareButton;
