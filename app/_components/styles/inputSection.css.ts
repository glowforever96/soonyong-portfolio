import { style } from '@vanilla-extract/css';

export const inputWrapper = style({
  width: '100%',
  height: '13%',
  padding: 8,
  display: 'flex',
  gap: 12,
  backgroundColor: 'green',
});

export const chatInput = style({
  width: '100%',
  height: '100%',
  borderRadius: 8,
  fontSize: 22,
  resize: 'none',
});

export const sendButton = style({
  minWidth: 52,
  maxHeight: 52,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
});
