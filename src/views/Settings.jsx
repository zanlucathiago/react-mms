import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import themes from '../themes';
import { getColors, getTheme, setTheme } from '../design/color';
import { Link } from 'react-router-dom';
import { Context } from '../context';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    // width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Settings() {
  const [state, setState] = useContext(Context);
  const classes = useStyles();

  return (
    <div>
      <Header></Header>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Tema</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={getTheme()}
          onChange={(e) => {
            setState(getColors(e.target.value));
          }}
        >
          {themes.map((t) => (
            <MenuItem component={Link} to="/settings" value={t.name}>
              {t.name}
            </MenuItem>
          ))}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}

export default Settings;
