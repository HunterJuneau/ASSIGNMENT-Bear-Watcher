import buildBears from './buildBears';

const bears = [];

const formSubmit = () => {
  $('form').on('submit', (e) => {
    e.preventDefault();

    const newBear = {
      name: $('#bearName').val(),
      imgUrl: $('#bearImg').val(),
    };

    bears.push(newBear);
    buildBears(bears);
  });
};

export default formSubmit;
