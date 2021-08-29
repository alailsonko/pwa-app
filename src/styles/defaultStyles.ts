import { makeStyles } from '@material-ui/core/styles';

const useGlobalStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '4vh',
  },
  alignItemsColumn: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '6vh',
  },
  button: {
    fontFamily: 'GilroyBold',
    fontSize: '18pt',
    lineHeight: '24pt',
    textAlign: 'left',
    color: '#FFFFFF',
    textTransform: 'none',
    border: '2px solid #FFFFFF',
    borderRadius: '0',
    padding: '10pt',
    position: 'absolute',
    bottom: '6vh',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      border: '2px solid #EA573E',
      color: '#EA573E',
      boxShadow: 'none',
    },
  },
  extendedIcon: {
    marginLeft: theme.spacing(9),
  },
  h1: {
    fontFamily: 'GilroyBold',
    fontSize: '18pt',
    lineHeight: '24pt',
    textAlign: 'center',
    color: '#EA573E',
    fontWeight: 'bold',
  },
  h2: {
    fontFamily: 'GilroyMedium',
    fontSize: '18pt',
    lineHeight: '24pt',
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'normal',
  },
  h3: {
    fontFamily: 'GilroyMedium',
    fontSize: '18pt',
    lineHeight: '24pt',
    textAlign: 'center',
    color: '#14173D',
    fontWeight: 'normal',
  },
  h4: {
    fontFamily: 'GilroyMedium',
    fontSize: '12pt',
    lineHeight: '24pt',
    textAlign: 'left',
    color: '#14173D',
    fontWeight: 'normal',
  },
  h5: {
    fontFamily: 'GilroyMedium',
    fontSize: '12pt',
    lineHeight: '24pt',
    textAlign: 'left',
    color: '#1FD6BA',
    fontWeight: 'normal',
  },
  h6: {
    fontFamily: 'GilroyMedium',
    fontSize: '12pt',
    lineHeight: '24pt',
    textAlign: 'left',
    color: '#EA573E',
    fontWeight: 'normal',
  },
}));

export default useGlobalStyles;
