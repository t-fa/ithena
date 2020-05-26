import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Select from './Select';

const SingleLamp = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="col-4 bg-light rounded">
      <div className="row">
        <h2 className="m-2">Single Lamp Control</h2>
        <div className="col-6">
          <Select label="City Name" text="Select City" />
          <Select label="Group Name" text="Select Group" />
          <Select label="Lamp" text="Select Lamp" />
          Intensity {value}
          <RangeSlider
            value={value}
            onChange={(changeEvent) => setValue(changeEvent.target.value)}
          />
        </div>
        <div className="col my-5">
          <FontAwesomeIcon
            icon={['fas', 'lightbulb']}
            size="10x"
            color={'yellow'}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleLamp;
