import React from 'react';

const ArtObject = ({ item, openLightbox }) => {
  // Generate a unique key for each art object by appending a Unix timestamp to its ID
  const keyId = item.id + Date.now();

  // The Rijksmuseum API doesn't provide specific endpoints for different image sizes.
  // solution is to change "=s0" parameter from url by "=s400" to load image with max size 400px
  const mediumImageUrl = item.webImage.url.replace('=s0', '=s300');

  return (
    <div
      className="grid__item"
      key={keyId}
      role="button"
      tabIndex="0"
      onClick={() => openLightbox(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          openLightbox(item);
        }
      }}
    >
      <img loading="lazy" src={mediumImageUrl} alt={item.title} />
      <h3>{item.title}</h3>
    </div>
  );
};

export default ArtObject;
