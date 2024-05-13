import React from 'react'

const Lightbox = ({ item, onClose }) => {
  return (
    <div className="lightbox" onClick={onClose} tabindex="-1" role="dialog">
      <div className="lightbox__content">
        <img src={item.webImage.url} alt={item.title} />
        <p>{item.principalOrFirstMaker && <strong>{item.principalOrFirstMaker}.</strong>} {item.longTitle}</p>
        <button onClick={onClose} title="Close" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="m15.854,8.854l-3.146,3.146,3.146,3.146c.195.195.195.512,0,.707-.098.098-.226.146-.354.146s-.256-.049-.354-.146l-3.146-3.146-3.146,3.146c-.098.098-.226.146-.354.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l3.146-3.146-3.146-3.146c-.195-.195-.195-.512,0-.707s.512-.195.707,0l3.146,3.146,3.146-3.146c.195-.195.512-.195.707,0s.195.512,0,.707Zm8.146,3.146c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Z" fill="#FFF"/></svg>
        </button>
      </div>
    </div>
  );
};

export default Lightbox;