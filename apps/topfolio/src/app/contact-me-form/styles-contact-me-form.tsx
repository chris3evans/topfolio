const muiStyles = {
  form: {
    backgroundColor: 'white',
    borderRadius: '0.3rem',
    padding: '7.5rem',
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
    width: '60%',
  },

  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '5rem',
  },

  switchContainer: {
    display: 'flex',
    justifyContent: 'right',
  },
  switchLabel: {
    fontSize: '3rem',
  },

  socialsGrid: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '5rem',
  },

  contactIcon: {
    fontSize: '3rem',
  },

  saveButton: {
    marginTop: '2.5rem',
    fontSize: '1.6rem',
    height: '3.5rem',
    width: '10rem',
  },
};

export default muiStyles;
