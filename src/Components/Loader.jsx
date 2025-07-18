import React from 'react';
import { Spinner } from 'react-bootstrap';

//this spinner will display while API is fetching data
const Loader = () => {
  return (
    <div className="text-center my-3">
      <Spinner animation="border" role="status" variant="primary" />
      <p className="mt-2">Loading your workout...</p>
    </div>
  );
};

export default Loader;
