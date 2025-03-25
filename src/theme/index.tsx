import { createTheme, ThemeOptions, PaletteColor,
  SimplePaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    heading: PaletteColor;
    sideBarHighlight: PaletteColor;
  }

  interface PaletteOptions {
    heading?: SimplePaletteColorOptions;
    sideBarHighlight?: SimplePaletteColorOptions;
  }
}
export const getTheme = (mode: 'light' | 'dark') => {
  const palette: ThemeOptions['palette'] = {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#1976d2' },
          background: { default: '#ffffff'},
          heading: { main: '#000000'},
          sideBarHighlight: { main: '#947bff1a'}
        }
      : {
          primary: { main: '#b2b8cdcc' },
          background: { default: '#13161f' },
          heading: { main: '#b2b8cdcc'},
          sideBarHighlight: { main: '#4f46e5'}
        }),
  };

  return createTheme({ palette });
};
