import themes from '../themes';

const [firstTheme] = themes;

let currentTheme = firstTheme;

export const getTheme = () => currentTheme.name;

// export const setTheme = (theme) => {
//   currentTheme = themes.find((t) => {
//     // debugger;
//     return t.name === theme;
//   });
// };

// getColors()

export const getColors = (theme) => {
  // const { colors } = currentTheme;
  const found = themes.find((t) => {
    // debugger;
    return t.name === theme;
  });

  // debugger;
  return {
    primary: found.colors[1],
    secondary: found.colors[4],
  };
};

const { colors } = currentTheme;
const primary = colors[1];
const primaryVariant = '';
const secondary = colors[4];
const secondaryVariant = '';
const background = '';
const surface = '';
const error = '';
const onPrimary = '';
const onSecondary = '';
const onBackground = '';
const onSurface = '';
const onError = '';

// export default {}
export default {
  primary,
  secondary,
};
