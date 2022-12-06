const muiStyles = {
  fontSelection: {
    cursor: 'pointer',
    backgroundColor: 'black',
    padding: '0rem 7.5rem',
    height: '20rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'fontSelection-900': {
    cursor: 'pointer',
    backgroundColor: 'black',
    padding: '0rem 2.5rem',
    height: '20rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonContainer: {},

  current: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    justifyItems: 'center',
    gridRowGap: '1rem',
    marginTop: '1rem',
  },

  currentFont: {
    color: 'black',
    fontSize: '2rem',
  },

  saveFontButton: {
    height: '5rem',
    width: '15rem',
    fontSize: '1.6rem',
  },
};

export default muiStyles;
