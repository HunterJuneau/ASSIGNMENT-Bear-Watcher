import bearCard from './bearCard';

const buildBears = (bears) => {
  let domString = '';

  bears.forEach((bear, i) => {
    domString += bearCard(bear, i);
  });

  $('#app').html(`<div class="d-flex flex-wrap justify-content-around m-4">${domString}</div>`);
};

export default buildBears;
