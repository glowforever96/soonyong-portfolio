import { style } from '@vanilla-extract/css';

export const header = style({
  width: '100%',
  height: 54,
  backgroundColor: '#4285F4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  color: '#fff',
  fontSize: '1.2rem',
  fontWeight: 600,
});

export const feedbackBtn = style({
  width: 54,
  height: 54,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
});
