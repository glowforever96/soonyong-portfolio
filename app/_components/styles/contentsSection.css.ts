import { keyframes, style, styleVariants } from '@vanilla-extract/css';

export const wrapper = style({
  width: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflowY: 'auto',
  gap: 24,
  padding: 24,
});

export const serverChatParent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

const baseServerChatWrapper = style({
  position: 'relative',
  padding: 18,
  whiteSpace: 'pre-wrap',
  backgroundColor: '#f4f4f4',
  borderRadius: 8,
  alignSelf: 'flex-start',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: -44,
    borderWidth: '28px',
    borderStyle: 'solid',
    borderColor: 'transparent #f4f4f4 transparent transparent',
  },
});

export const serverChatWrapper = styleVariants({
  INIT: [
    baseServerChatWrapper,
    {
      width: 'fit-content',
      fontSize: '1rem',
    },
  ],
  EDU_AND_CAREER: [
    baseServerChatWrapper,
    {
      width: '85%',
    },
  ],
  INTRODUCE: [
    baseServerChatWrapper,
    {
      width: '85%',
    },
  ],
  SKILLS: [
    baseServerChatWrapper,
    {
      width: '90%',
    },
  ],
  CONTACT: [
    baseServerChatWrapper,
    {
      width: '70%',
    },
  ],
  WORKS: [
    baseServerChatWrapper,
    {
      width: '95%',
    },
  ],
  PROJECTS: [
    baseServerChatWrapper,
    {
      width: '100%',
    },
  ],
});

export const clientChatWrapper = style([
  baseServerChatWrapper,
  {
    alignSelf: 'flex-end',
    backgroundColor: '#4a90e2',
    color: '#fff',
    fontSize: '1rem',
    padding: 14,
    position: 'relative',
    '::after': {
      content: '""',
      top: 0,
      left: 'unset',
      right: -32,
      borderWidth: '22px',
      borderStyle: 'solid',
      borderColor: 'transparent transparent transparent #4a90e2',
    },
  },
]);

const loading = keyframes({
  '0%': {
    transform: 'scale(0)',
  },
  '50%': {
    transform: 'scale(1.0)',
  },
  '100%': {
    transform: 'scale(0)',
  },
});

export const loadingBubble = style({
  display: 'flex',
  gap: 8,
});

export const bubble = style({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: '#4a90e2',
  animation: `${loading} 1.5s infinite ease-in-out both`,
});

export const bubble2 = style({
  animationDelay: '0.1s', // 두 번째 버블은 약간 늦게 시작
});

export const bubble3 = style({
  animationDelay: '0.2s', // 두 번째 버블은 약간 늦게 시작
});

export const selectChipsWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  alignSelf: 'flex-end',
  maxWidth: '80%',
});

export const chipWrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 4,
  justifyContent: 'flex-end',
});

export const chipParagraph = style({
  color: '#666666',
  fontSize: '0.9rem',
  lineHeight: 1,
  textAlign: 'right',
  marginRight: 12,
});

export const chipButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 16px',
  borderRadius: 16,
  border: '1px solid #ccc',
  backgroundColor: 'transparent',
  color: '#666666',
  fontSize: '0.9rem',
  fontWeight: 500,
  cursor: 'pointer',
  width: 'fit-content',
  ':hover': {
    backgroundColor: '#4a90e2',
    color: '#ffffff',
  },
});
