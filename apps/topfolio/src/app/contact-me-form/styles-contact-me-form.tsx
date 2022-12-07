const muiStyles = {
  form: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '7.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'black',
    width: '80%',
    margin: '0rem auto',
  },
  'form-1200': {
    padding: '2.5rem 1rem',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'black',
    width: '80%',
    margin: '0rem auto',
  },
  'form-900': {
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'black',
    width: '80%',
    margin: '0rem auto',
  },
  'form-600': {
    padding: '1rem 0rem',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'black',
    width: '100%',
    margin: '0rem auto',
  },

  mainGrid: {
    display: 'grid',
    gridTemplateRows: 'repeat(3, min-content)',
    gridRowGap: '2.5rem',
    marginTop: '2.5rem',
    width: '80%',
  },
  'mainGrid-1200': {
    width: '90%',
    display: 'grid',
    gridTemplateRows: 'repeat(3, min-content)',
    gridRowGap: '2.5rem',
    marginTop: '2.5rem',
  },

  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '5rem',
    gridRowGap: '2.5rem',
  },
  'contactGrid-600': {
    display: 'grid',
    gridTemplateRows: 'repeat(3, min-content)',
    gridRowGap: '2rem',
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
  'socialsGrid-600': {
    display: 'grid',
    gridTemplateRows: 'repeat(6, min-content)',
    gridGap: '2rem',
  },

  'textInput-1200': {
    fontSize: '1.8rem',
  },
  'textInput-900': {
    fontSize: '1.6rem',
  },
  'textInput-600': {
    fontSize: '1.4rem',
  },

  contactIcon: {
    fontSize: '3rem',
  },
  'contactIcon-900': {
    fontSize: '2.5rem',
  },
  'contactIcon-600': {
    fontSize: '2rem',
  },

  saveButton: {
    marginTop: '2.5rem',
    fontSize: '1.6rem',
    height: '3.5rem',
    width: '10rem',
  },
};

export default muiStyles;
