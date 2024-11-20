import { style } from '@vanilla-extract/css';

export const inputWrapper = style({
  width: '100%',
  padding: '10px 14px',
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  backgroundColor: '#f9f9f9',
  borderTop: '1px solid #e0e0e0',
  boxShadow: '0 -1px 4px rgba(0, 0, 0, 0.1)',
});

export const chatInput = style({
  width: '100%',
  height: 44,
  padding: '8px',
  borderRadius: 8,
  fontSize: '1rem',
  border: '1px solid #ccc',
  outline: 'none',
  resize: 'none',
  boxSizing: 'border-box',
  ':focus': {
    borderColor: '#4a90e2',
    boxShadow: '0 0 4px rgba(74, 144, 226, 0.5)',
  },
  ':disabled': {
    backgroundColor: '#f0f0f0',
    color: '#999999',
    cursor: 'not-allowed',
  },
});

export const sendButton = style({
  minWidth: 44,
  minHeight: 44,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 8,
  backgroundColor: '#4a90e2',
  color: '#ffffff',
  fontSize: '1.25rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  ':hover': {
    backgroundColor: '#3b78c4',
  },
});
