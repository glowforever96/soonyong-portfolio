import { style } from '@vanilla-extract/css';

export const title = style({
  width: '100%',
  paddingBottom: 8,
  marginBottom: 8,
  borderBottom: '2px solid #007acc',
  display: 'flex',
  alignItems: 'center',
});

export const h1Title = style({
  fontSize: '1.35rem',
  color: '#005f99',
  fontWeight: 700,
  letterSpacing: '0.5px', // 폰트 간격 추가
});

export const ulContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  whiteSpace: 'pre-wrap',
  wordBreak: 'keep-all',
});

export const liTag = style({
  marginLeft: 20,
  letterSpacing: '0.5px',
  lineHeight: 1.6,
  fontSize: '0.85rem',
  color: '#333',
});

export const liTagNoStyle = style([
  liTag,
  {
    listStyle: 'none',
    marginLeft: 8,
  },
]);

export const mainInfoBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const infoBox = style({
  borderRadius: 8,
  border: '1px solid #d1d9e6',
  padding: '10px 14px', // 여백 추가
  backgroundColor: '#ffffff', // 흰색 배경
});

// init bubble
export const initBubble = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

// common bubble layout
export const commonBubble = style({
  height: 'max-content',
  display: 'flex',
  flexDirection: 'column',
});

export const introParagraph = style({
  whiteSpace: 'pre-wrap',
  fontWeight: 500,
  letterSpacing: '0.5px',
  lineHeight: 1.6,
  color: '#333',
  fontSize: '0.85rem',
  maxHeight: '35dvh',
  overflowY: 'auto',
});
