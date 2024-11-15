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
  padding: '10px 14px',
  backgroundColor: '#ffffff',
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

export const scrollX = style({
  display: 'flex',
  marginRight: -18,
});

export const skillBoxWrapper = style({
  display: 'flex',
  gap: 4,
  paddingRight: 12,
});

export const skillBox = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 8,
  width: '100%',
  minWidth: 200,
  maxWidth: 200,
  border: '1px solid #d1d9e6',
  padding: '10px 14px',
  backgroundColor: '#ffffff',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const imgContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFF',
  width: '100%',
  height: '155px',
  marginBottom: '8px',
  borderBottom: '1px solid #d1d9e6',
});

export const img = style({
  objectFit: 'contain',
  maxWidth: '80%',
  maxHeight: '80%',
});

export const descWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  height: '100%',
  gap: 4,
  letterSpacing: '0.5px',
  lineHeight: 1.6,
});

export const skillTitle = style({
  fontSize: '1.2rem',
  fontWeight: 600,
  color: '#333',
});

export const descText = style({
  fontSize: '0.85rem',
  color: '#5f6368',
});

export const contactParagraph = style({
  letterSpacing: '0.5px',
  lineHeight: 1.6,
  color: '#333',
  fontSize: '0.9rem',
});

export const aTag = style({
  cursor: 'pointer',
  ':hover': {
    color: '#4a90e2',
    textDecoration: 'underline',
  },
});
