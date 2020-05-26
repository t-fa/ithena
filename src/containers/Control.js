import React from 'react';

import BulkLamp from '../components/BulkLamp';
import SingleLamp from '../components/SingleLamp';

const control = () => {
  return (
    <>
      <BulkLamp />
      <div className="row">
        <SingleLamp />
      </div>
    </>
  );
};

export default control;
