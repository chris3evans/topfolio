const muiStyles = {
  noExistingThemeHeading: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    gridRowGap: '2rem',
    color: 'black',
    backgroundColor: 'white',
    padding: '3rem',
    borderRadius: '0.5rem',
  },
  h6: {
    fontSize: '1.8rem',
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontSize: '1.8rem',
    color: 'black',
    textAlign: 'center',
  },

  viewExistingFontTheme: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    gridRowGap: '2rem',
  },

  existingThemeHeading: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    gridRowGap: '2rem',
    justifyItems: 'center',
    backgroundColor: 'white',
    padding: '3rem',
    borderRadius: '0.5rem',
  },
  'existingThemeHeading-900': {
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    gridRowGap: '2rem',
    justifyItems: 'center',
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '0.5rem',
  },

  currentFont: {
    color: 'black',
    fontSize: '3rem',
  },
  'currentFont-600': {
    color: 'black',
    fontSize: '2.4rem',
  },
};

export default muiStyles;
