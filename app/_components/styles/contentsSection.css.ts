import { keyframes, style, styleVariants } from '@vanilla-extract/css';

export const wrapper = style({
  width: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflowY: 'auto',
  gap: 32,
});

export const serverChatParent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

const baseServerChatWrapper = style({
  padding: 18,

  backgroundColor: '#f4f4f4',
  borderRadius: 8,
  alignSelf: 'flex-start',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 부드러운 그림자
});

export const serverChatWrapper = styleVariants({
  INIT: [
    baseServerChatWrapper,
    {
      width: '70%',
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
});

export const clientChatWrapper = style([
  baseServerChatWrapper,
  {
    alignSelf: 'flex-end',
    backgroundColor: '#4a90e2',
    color: '#fff',
    fontSize: '1rem',
    padding: 14,
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
