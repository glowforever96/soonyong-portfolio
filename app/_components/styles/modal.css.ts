import { keyframes, style } from '@vanilla-extract/css';

const fillScreen = keyframes({
  '0%': {
    transform: 'scale(0)',
    width: '0%',
    height: '0%',
    top: '50%',
    left: '50%',
    opacity: 0,
  },

  '100%': {
    transform: 'scale(1)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100dvh',
    opacity: 1,
  },
});

export const worksFillScreenWrapper = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: 18,
  backgroundColor: '#fff',
  animation: `${fillScreen} 0.6s ease-out forwards`,
  transformOrigin: 'center',
  overflowY: 'auto',
});

export const closeBtn = style({
  display: 'flex',
  alignItems: 'center',
  width: 44,
  height: 44,
  justifyContent: 'center',
  justifySelf: 'flex-end',
  backgroundColor: '#f4f7fa',
  color: '#333',
  border: '1px solid #ddd',
  cursor: 'pointer',
  borderRadius: 6,
  marginBottom: 12,
});
