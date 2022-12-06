const muiStyles = {
  colorSelection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
  'colorSelection-900': {
    display: 'grid',
    gridTemplateRows: 'repeat(5, min-content)',
    gridRowGap: '2.5rem',
  },

  buttonSelection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, min-content)',
    justifyContent: 'space-evenly',
    padding: '2.5rem 2.5rem 0rem 2.5rem',
  },
  'buttonSelection-900': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, min-content)',
    justifyContent: 'space-evenly',
    padding: '1rem 1rem 0rem 1rem',
  },
  'buttonSelection-600': {
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    gridRowGap: '1rem',
    justifyContent: 'space-evenly',
    padding: '1rem 1rem 0rem 1rem',
  },

  button: {
    height: '5rem',
    width: '15rem',
    fontSize: '1.6rem',
  },
  'button-900': {
    height: '5rem',
    width: '12rem',
    fontSize: '1.4rem',
  },
  'button-600': {
    height: '4rem',
    width: '100%',
    fontSize: '1.4rem',
  },
};

export default muiStyles;
