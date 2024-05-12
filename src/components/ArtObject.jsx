import React from 'react';

const ArtObject = ({ item }) => {
  // Generate a unique key for each art object by appending a Unix timestamp to its ID
  const keyId = item.id + Date.now();

  // The Rijksmuseum API doesn't provide specific endpoints for different image sizes.
  // solution is to change "=s0" parameter from url by "=s400" to load image with max size 400px
  const mediumImageUrl = item.webImage.url.replace('=s0', '=s400');

  return (
    <div className="grid__item" key={keyId}>
      <img loading="lazy" src={mediumImageUrl} alt={item.title} />
      <a href={item.links.web} target="_blank" rel="noreferrer">
        <span>
          {item.title}&nbsp;
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 8.625V12.375C10.5 12.7065 10.3771 13.0245 10.1583 13.2589C9.9395 13.4933 9.64275 13.625 9.33333 13.625H2.91667C2.60725 13.625 2.3105 13.4933 2.09171 13.2589C1.87292 13.0245 1.75 12.7065 1.75 12.375V5.5C1.75 5.16848 1.87292 4.85054 2.09171 4.61612C2.3105 4.3817 2.60725 4.25 2.91667 4.25H6.41667M8.75 2.375H12.25M12.25 2.375V6.125M12.25 2.375L5.83333 9.25"
              stroke="#FFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default ArtObject;
