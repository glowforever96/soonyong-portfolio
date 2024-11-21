import { keyframes, style } from '@vanilla-extract/css';

export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100dvh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const modalContainer = style({
  maxWidth: 600,
  width: '85%',
  height: 'fit-content',
  gap: 12,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  padding: 24,
  borderRadius: 8,
});

export const titleText = style({
  fontSize: '0.9rem',
  color: '#333',
  whiteSpace: 'pre-wrap',
  fontWeight: 500,
  letterSpacing: '0.5px',
  lineHeight: 1.6,
  wordBreak: 'break-all',
});

export const textAreaWrapper = style({
  display: 'flex',
  gap: 4,
  flexDirection: 'column',
  width: '100%',
});

export const feedbackTextarea = style({
  width: '100%',
  minHeight: 100,
  border: '1px solid #ced4da',
  borderRadius: 8,
  padding: '12px 16px',
  fontSize: '1rem',
  lineHeight: 1.5,
  color: '#495057',
  backgroundColor: '#f8f9fa',
  outline: 'none',
  resize: 'none',
  transition: 'border-color 0.3s, box-shadow 0.3s',
  ':focus': {
    borderColor: '#007bff',
    boxShadow: '0 0 4px rgba(0, 123, 255, 0.25)',
    backgroundColor: '#ffffff',
  },
});

export const lengthSpan = style({
  fontSize: '0.75rem',
  color: '#ced4da',
  alignSelf: 'flex-end',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 22,
});

const baseBtn = style({
  cursor: 'pointer',
  width: '100%',
  height: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  padding: '10px 14px',
  fontSize: '1.2rem',
});

export const cancleBtn = style([
  baseBtn,
  {
    backgroundColor: '#f8f9fa',
    border: '1px solid #ced4da',
    color: '#495057',
  },
]);

export const confirmBtn = style([
  baseBtn,
  {
    backgroundColor: '#4285F4',
    border: 'none',
    color: '#fff',
    ':disabled': {
      backgroundColor: '#a5c8ff',
      color: '#b0c4de',
      cursor: 'not-allowed',
    },
  },
]);

const toastIn = keyframes({
  '0%': {
    transform: 'translateX(-50%) translateY(20px)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateX(-50%) translateY(0)',
    opacity: 1,
  },
});

const toastOut = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
    transform: 'translateX(-50%) translateY(20px)',
  },
});

export const toast = style({
  position: 'fixed',
  width: 'max-content',
  bottom: '82px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#4285F4',
  color: '#fff',
  fontWeight: 500,
  padding: '12px 20px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
  fontSize: '1.15rem',
  opacity: 1,
  transition: 'opacity 0.3s ease-out',
  animation: `${toastIn} 0.5s ease-out, ${toastOut} 0.5s ease-in 2.5s`,
});
