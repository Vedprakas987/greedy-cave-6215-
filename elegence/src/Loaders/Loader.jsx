import React from 'react';
import { Loader, Placeholder } from 'rsuite';
import './Loader.css'; // Import your custom CSS styles for the loader

const Loaders = ({ numberOfRows }) => {
  return (
    <div className="loader-container">
      <div className="placeholder-container">
        <Placeholder.Paragraph rows={numberOfRows} />
      </div>
      <div className="loader-wrapper">
        <Loader size="md" content="Loading" />
      </div>
    </div>
  );
};

export default Loaders;
