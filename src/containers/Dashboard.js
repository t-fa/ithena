import React, { Component } from 'react';

import LampCard from '../components/LampCard';
import Graph from '../components/Graph';
import Lorem from '../components/Lorem';

class Dashboard extends Component {
  state = {
    icons: {
      totallamps: {
        number: '657',
        text: 'Total Lamps',
        iconstyle: 'fas',
        icon: 'lightbulb',
        iconcolor: 'yellow',
        bordercolor: 'border-info',
      },
      workinglamps: {
        number: '654',
        text: 'Working Lamps',
        iconstyle: 'fas',
        icon: 'lightbulb',
        iconcolor: 'yellow',
        bordercolor: 'border-warning',
      },
      faultylamps: {
        number: '3',
        text: 'Faulty Lamps',
        iconstyle: 'far',
        icon: 'lightbulb',
        iconcolor: 'red',
        bordercolor: 'border-warning',
      },
      energysaving: {
        number: '31806 kWh',
        text: 'Energy Saving',
        iconstyle: 'far',
        icon: 'lightbulb',
        iconcolor: 'green',
        bordercolor: 'border-success',
      },
      costsavings: {
        number: '$4194',
        text: 'Cost Savings',
        iconstyle: 'fas',
        icon: 'coins',
        bordercolor: 'border-success',
        iconcolor: 'green',
      },
      co2savings: {
        number: '16592',
        text: 'CO2 Savings',
        iconstyle: 'fas',
        icon: 'tree',
        iconcolor: 'green',
        bordercolor: 'border-info',
      },
    },
  };
  render() {
    let cardsArray = [];
    for (let key in this.state.icons) {
      cardsArray.push({
        id: key,
        config: this.state.icons[key],
      });
    }

    let lampCards = (
      <div className="row">
        {cardsArray.map((card) => (
          <LampCard
            key={card.id}
            bordercolor={card.config.bordercolor}
            number={card.config.number}
            text={card.config.text}
            iconstyle={card.config.iconstyle}
            icon={card.config.icon}
            iconcolor={card.config.iconcolor}
          />
        ))}
      </div>
    );
    return (
      <>
        {lampCards}
        <div className="row">
          <div className="col-6">
            <Graph />
          </div>
          <div className="col">
            <Lorem />
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
