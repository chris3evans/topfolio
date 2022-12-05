const muiStyles = {
  form: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '5rem',
    width: '100%',
  },
  formTitle: {
    color: 'black',
  },

  formFields: {
    fontSize: '2rem',
    width: '60%',
  },
  imageUploadContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '4rem 0rem 2rem 0rem',
  },

  companyField: {
    display: 'flex',
    alignItems: 'center',
    padding: '2rem',
    width: '100%',
  },

  descriptionField: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
  },

  datesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridColumnGap: '5rem',
    padding: '2rem',
  },

  dateField: {
    // justifySelf: 'center',
    // display: 'grid',
    // gridTemplateRows: 'repeat(2, 1fr)',
  },

  saveButton: {
    fontSize: '1.6rem',
    height: '3.5rem',
    width: '10rem',
  },
};

export default muiStyles;
