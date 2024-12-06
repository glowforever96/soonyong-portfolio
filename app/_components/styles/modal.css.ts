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
  position: 'fixed',
  bottom: 17,
  right: 17,
  display: 'flex',
  alignItems: 'center',
  width: 40,
  height: 40,
  justifyContent: 'center',
  backgroundColor: 'rgba(244, 247, 250, 0.7)',
  color: '#333',
  border: '1px solid rgba(221, 221, 221, 0.7)',
  cursor: 'pointer',
  borderRadius: '50%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
});
