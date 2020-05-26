import React from 'react';

import Select from './Select';
import Status from './Status';

const lorem = () => {
  return (
    <div className="container border rounded col bg-primary">
      <div className="row m-3">
        <Select text="Area" />
        <Select text="Time" />
        <Select text="Category" />
        <Select text="Priority" />
      </div>
      <div className="container">
        <Status
          text="100% Light Utilization at Richmond Plant"
          iconstyle="fas"
          icon="thumbs-up"
          iconcolor="green"
          background="bg-white"
        />
        <Status
          text="Lorem ipsum dolor amet"
          iconstyle="fas"
          icon="thumbs-down"
          iconcolor="red"
          background="bg-warning"
        />
        <Status
          text="Lorem ipsum dolor amet, consetetur sapidscing elitr"
          iconstyle="fas"
          icon="thumbs-down"
          iconcolor="red"
          background="bg-warning"
        />
        <Status
          text="Lorem ipsum dolor amet, consetetur sapidscing"
          iconstyle="fas"
          icon="thumbs-up"
          iconcolor="green"
          background="bg-success"
        />
        <Status background="bg-white" />
        <Status background="bg-white" />
      </div>
    </div>
  );
};

export default lorem;
