const muiStyles = {
  existingThemeContainer: {
    backgroundColor: 'white',
    padding: '1rem 3rem 3rem 3rem',
    borderRadius: '0.5rem',
    width: '90%',
    margin: '0rem auto',
  },
  'existingThemeContainer-900': {
    backgroundColor: 'white',
    padding: '0rem 1.5rem 1.5rem 1.5rem',
    borderRadius: '0.5rem',
  },

  existingThemeHeading: {
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
  },

  noExistingThemeHeading: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    gridRowGap: '2.5rem',
    color: 'black',
  },

  h6: {
    fontSize: '2rem',
    textAlign: 'center',
  },

  existingColorTheme: {
    display: 'flex',
  },

  text: {
    fontSize: '1.6rem',
    color: 'black',
    textAlign: 'center',
  },
};

export default muiStyles;
