import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import sectorData from '../../stub/sectorData';
import { colors } from '../../tailwind.config';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectors: sectorData.sectors,
    };
  }

  lastUpdated = () => this.sectors['@attributes'].lastUpdated;
  source = () => this.sectors['@attributes'].source;

  labels = () =>  this.state.sectors.sector.map(sec => sec['@attributes'].sector_name);

  values = () => this.state.sectors.sector.map(sec => sec['@attributes'].total);

  render() {
    let data = {
        labels: this.labels(),
      datasets: [
        {
            data: this.values(),
          backgroundColor: [
            colors.turquoise,
            colors.green,
            colors.blue,
            colors.purple,
            colors.yellow,
            colors.orange,
            colors.red,
            colors['turquoise-dark'],
            colors['green-dark'],
            colors['yellow-dark'],
          ],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
    return <Doughnut data={data} />;
  }
}

export default Chart;
