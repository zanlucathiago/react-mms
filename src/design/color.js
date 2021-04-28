import themes from '../themes';

const [firstTheme] = themes;

let currentTheme = firstTheme;

export const getTheme = () => currentTheme.name;

export const getColors = (theme) => {
  const found = theme
    ? themes.find((t) => {
        return t.name === theme;
      })
    : firstTheme;

  return {
    primary: found.colors[1],
    onPrimary: found.on[1],
    secondary: found.colors[4],
    onSecondary: found.on[4],
  };
};

// const { colors } = currentTheme;
// const primary = colors[1];
// const primaryVariant = '';
// const secondary = colors[4];
// const secondaryVariant = '';
// const background = '';
// const surface = '';
// const error = '';
// const onPrimary = '';
// const onSecondary = '';
// const onBackground = '';
// const onSurface = '';
// const onError = '';
