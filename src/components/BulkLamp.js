import React from 'react';

import Select from './Select';

const bulkLamp = () => {
  return (
    <div className="container m-2">
      <div className="row justify-content-center">
        <h3>Bulk Lamp Controls</h3>
        <Select text="Select City" />
        <Select text="Select Group" />
        <div className="form-group col-3">
          <label for="bulkIntensity">Intensity</label>
          <input
            type="range"
            min="0"
            max="100"
            class="form-control-range"
            id="bulkIntensity"
          />
        </div>
        <div className="col mx-2">
          <button type="button" className="btn btn-primary mx-2">
            Apply
          </button>
          <button type="button" className="btn btn-primary mx-2">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default bulkLamp;
