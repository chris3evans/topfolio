const muiStyles = {
  colorThemeForm: {
    backgroundColor: 'white',
    padding: '3.5rem',
    borderRadius: '0.5rem',
  },

  colorSelection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
  },

  colorItem: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    gridRowGap: '1rem',
  },

  color: {
    height: '20rem',
    width: '100%',
    backgroundColor: 'red',
  },

  colorInput: {
    fontSize: '1rem',
    width: '80%',
  },

  buttonSelection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, min-content)',
    justifyContent: 'space-evenly',
    padding: '2.5rem 2.5rem 0rem 2.5rem',
  },

  buttonItem: {},

  button: {
    height: '5rem',
    width: '15rem',
    fontSize: '1.6rem',
  },
};

export default muiStyles;
