import React from 'react';
import { Line } from 'react-chartjs-2';

export default class ActivityGraph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Account Hours by Month',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(55,90,127,0.4)',
            borderColor: 'rgba(55,90,127,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(55,90,127,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(55,90,127,1)',
            pointHoverBorderColor: 'rgba(55,90,127,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      }
    }
  }

  componentDidMount() {

  }

  render() {
    return <Line data={this.state.data} />
  }
}