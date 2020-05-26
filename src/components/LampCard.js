import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const lampCard = (props) => {
  let classes = `container border rounded col my-2 m-1 ${props.bordercolor}`;
  return (
    <div className={classes}>
      <div className="row">
        <div className="col-6">
          <div className="row p-2">
            <h4>{props.number}</h4>
          </div>
          <div className="row px-2">{props.text}</div>
        </div>

        <div className="col p-2">
          <FontAwesomeIcon
            icon={[props.iconstyle, props.icon]}
            size="4x"
            color={props.iconcolor}
          />
        </div>
      </div>
    </div>
  );
};

export default lampCard;
