import React from 'react';

const string = 'LMTHrennIteSylsuoregnad';

const reverse = (str) => {
  return str.split('').reverse().join('');
};

export default function HtmlDish(props) {
  const { type, html, ...restProps } = props;

  const comp = React.createElement(type, {
    [reverse(string)]: {
      __html: html,
    },
    ...restProps,
  });


  return comp;
}
