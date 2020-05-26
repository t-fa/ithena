import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const status = (props) => {
  let divClass = `row rounded align-items-center m-3 ${props.background}`;
  return (
    <div className={divClass}>
      <div className="col">
        <p>
          <span className="m-2">
            <FontAwesomeIcon
              icon={[props.iconstyle, props.icon]}
              color={props.iconcolor}
            />
          </span>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default status;
