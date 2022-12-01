const muiStyles = {
  listItem: {
    display: 'grid',
    gridTemplateRows: 'repeat(2, min-content)',
    backgroundColor: 'white',
    color: 'black',
    marginBottom: '5rem',
    borderRadius: '0.5rem',
    justifyContent: 'center',
    padding: '1rem 0rem',
  },
  editIcon: {
    justifySelf: 'right',
    color: 'gray',
    cursor: 'pointer',
    fontSize: '2.2rem',
  },

  listItemGrid: {
    display: 'grid',
    gridTemplateRows: 'repeat(3, min-content)',
    // gridRowGap: '5rem',
    padding: '0rem 2.5rem 2.5rem 2.5rem',
  },

  listItemGrid2: {
    display: 'grid',
    gridTemplateColumns: '80% 10%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  description: {
    marginBottom: '4rem',
  },

  listItemGrid3: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, min-content)',
    gridColumnGap: '5rem',
  },

  listItemImage: {
    height: '5rem',
    width: '5rem',
  },

  subHeading: {
    fontSize: '1.8rem',
  },
  text: {
    fontSize: '1.6rem',
  },
};

export default muiStyles;
