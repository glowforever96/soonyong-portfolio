import { globalStyle } from '@vanilla-extract/css';

globalStyle('body, html', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'lightgray',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('*', {
  boxSizing: 'inherit',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
  padding: 0,
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('input, textarea, button', {
  fontFamily: 'inherit',
});

globalStyle('button', {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
});
