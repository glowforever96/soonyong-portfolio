import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

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

globalStyle('h1, h2, h3, h4, h5, h6, p, span', {
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

globalStyle('h2', {
  fontSize: '1.2rem',
  color: '#333',
  fontWeight: 600,
  marginBottom: 8,
  borderBottom: '1px solid #ddd',
  paddingBottom: 6,
});

globalStyle('h3', {
  fontSize: '1.1rem',
  color: '#444',
  borderBottom: '1px solid #ddd',
  fontWeight: 500,
  margin: '12px 0 8px 0',
  paddingBottom: 4,
});
