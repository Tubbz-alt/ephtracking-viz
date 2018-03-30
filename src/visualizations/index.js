import lineChart from './lineChart';

const createVisualization = (container, options) => {
  switch (options.type) {
    case 'line-chart':
      lineChart(container, options.data, options.title);
      break;
    default:
      console.error('no such visualization type');
  }
};

export default createVisualization;
