import React from 'react'

const Imageperfil = ({ src, alt, className }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`custom-image ${className}`} 
    />
  );
};

export default Imageperfil;