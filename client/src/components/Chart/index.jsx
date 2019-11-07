import React from 'react';
import styled from 'styled-components';
import data from './data'
import { Doughnut } from 'react-chartjs-2';
import React from 'react';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const Chart = () => {
    return <Doughnut data={data} />

}

export default Chart