const muiStyles = {
  form: {
    backgroundColor: 'white',
    borderRadius: '0.3rem',
    padding: '7.5rem',
    marginTop: '10rem',
    width: '65%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'black',
  },

  mainGrid: {
    display: 'grid',
    gridTemplateRows: 'repeat(3, min-content)',
    gridRowGap: '2.5rem',
    marginTop: '2.5rem',
  },

  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '7.5rem',
  },

  switchContainer: {
    display: 'flex',
    justifyContent: 'right',
  },

  socialsGrid: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '5rem',
  },

  saveButton: {
    marginTop: '2.5rem',
    fontSize: '1.6rem',
    height: '3.5rem',
    width: '10rem',
  },
};

export default muiStyles;
