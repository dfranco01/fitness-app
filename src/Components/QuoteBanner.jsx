import React from 'react';
import { Alert } from 'react-bootstrap';
//this component will display the fetched quote to user
const QuoteBanner = ({ quote }) => {
  return (
    <Alert variant="success" className="text-center fst-italic">
      “{quote}”
    </Alert>
  );
};

export default QuoteBanner;
