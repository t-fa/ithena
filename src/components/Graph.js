import React from 'react';
import graphimg from '../img/graphimg.png';

const graph = () => {
  return (
    <div className="border rounded border-primary">
      <img
        src={graphimg}
        alt={'Chart'}
        style={{
          width: '75%',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      <div className="container border-dark rounded">
        <div className="row">
          <div className="col-4">
            <h4 className="ml-4">Priority</h4>
          </div>
          <div className="col">
            <h4>Alerts and Notifications</h4>
          </div>
        </div>
        <div className="row">
          <span className="row bg-danger text-white rounded py-2 px-3 my-1 ml-5">
            4
          </span>
          <div className="col bg-danger text-white rounded mx-5 my-1">
            Exposed Electrical Wires
          </div>
        </div>
        <div className="row">
          <span className="row bg-warning text-white rounded py-2 px-3 my-1 ml-5">
            0
          </span>
          <div className="col bg-danger text-white rounded mx-5 my-1">
            More than 3 consecutive street lights out
          </div>
        </div>
        <div className="row">
          <span className="row bg-secondary text-white rounded py-2 px-3 my-1 ml-5">
            0
          </span>
          <div className="col bg-danger text-white rounded mx-5 my-1">
            Bulb not working
          </div>
        </div>

        <div className="col"></div>
      </div>
    </div>
  );
};

export default graph;
