import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Context } from '../context';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function SimpleBottomNavigation() {
  const [state] = useContext(Context);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: state.secondary,
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Recents"
        icon={<RestoreIcon />}
        style={
          value === 0
            ? {
                backgroundColor: state.primary,
                color: state.onPrimary,
                borderBottomLeftRadius: 14,
                borderBottomRightRadius: 14,
              }
            : {}
        }
      />
      <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteIcon />}
        style={
          value === 1
            ? {
                backgroundColor: state.primary,
                color: state.onPrimary,
                borderBottomLeftRadius: 14,
                borderBottomRightRadius: 14,
              }
            : {}
        }
      />
      <BottomNavigationAction
        label="Nearby"
        icon={<LocationOnIcon />}
        style={
          value === 2
            ? {
                backgroundColor: state.primary,
                color: state.onPrimary,
                borderBottomLeftRadius: 14,
                borderBottomRightRadius: 14,
              }
            : {}
        }
      />
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;
