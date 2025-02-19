import { keyframes, style, styleVariants } from '@vanilla-extract/css';

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
  letterSpacing: '0.5px',
});

export const ulContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
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
  display: 'flex',
});

export const aTag = style({
  letterSpacing: '0.5px',
  lineHeight: 1.6,
  cursor: 'pointer',
  ':hover': {
    color: '#4a90e2',
    textDecoration: 'underline',
  },
});

export const aTagBig = style([
  aTag,
  {
    fontSize: '1.1rem',
  },
]);

export const worksBoxBase = style({
  display: 'flex',
});

export const workBoxWrapper = styleVariants({
  BUBBLE: [
    worksBoxBase,
    {
      gap: 4,
      paddingRight: 12,
    },
  ],
  FILL: [
    worksBoxBase,
    {
      gap: 18,
      flexDirection: 'column',
    },
  ],
});

export const worksBox = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 8,
  border: '1px solid #d1d9e6',
  padding: '10px 14px',
  backgroundColor: '#ffffff',
  minWidth: '35%',
});

export const workTitleBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const workTitle = style({
  letterSpacing: '0.5px',
  lineHeight: 1.6,
  fontWeight: 600,
  color: '#333',
  fontSize: '1.3rem',
});

export const date = style({
  letterSpacing: '0.5px',
  lineHeight: 1.6,
  color: '#5f6368',
  fontSize: '0.8rem',
});

export const dateBig = style([
  date,
  {
    fontSize: '1.1rem',
  },
]);

export const worksTaskTitle = style({
  width: '100%',
  borderBottom: '1px solid #ddd',
  fontWeight: 500,
  fontSize: '1.1rem',
  margin: '17px 0 8px 0',
  color: '#555555',
  paddingBottom: 8,
});

export const workDesc = style({
  letterSpacing: '0.5px',
  lineHeight: 1.6,
  backgroundColor: 'rgb(241, 241, 239)',
  color: '#37352f',
  padding: '10px 14px',
  wordBreak: 'keep-all',
  marginTop: 20,
  borderRadius: 5,
  fontWeight: 500,
  fontSize: '0.9rem',
});

export const liTagBig = style([
  liTagNoStyle,
  {
    fontSize: '0.95rem',
  },
]);

export const liTagMoreBig = style([
  liTagNoStyle,
  {
    fontSize: '1.1rem',
  },
]);

export const skillsetWrapper = style({
  display: 'flex',
  gap: 4,
  marginTop: 14,
  padding: 4,
  flexWrap: 'wrap',
});

export const skillsetWrapperBig = style([
  skillsetWrapper,
  {
    gap: 12,
    marginBottom: 18,
  },
]);

export const skillChip = style({
  width: 'fit-content',
  padding: '4px 12px',
  borderRadius: '12px',
  fontSize: '0.8rem',
  fontWeight: 500,
  color: '#007acc',
  backgroundColor: '#e6f7ff',
  border: '1px solid #007acc',
  display: 'inline-block',
  whiteSpace: 'nowrap',
});

export const skillChipBig = style([
  skillChip,
  {
    fontSize: '1.0rem',
    borderRadius: 16,
  },
]);

export const projectsBoxWrapper = style({
  display: 'flex',
  gap: 4,
  paddingRight: 12,
});

export const projectBox = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 8,
  border: '1px solid #d1d9e6',
  padding: '10px 14px',
  backgroundColor: '#ffffff',
  width: 'var(--project-box-width)',
});

export const projectImgContainer = style({
  width: '100%',
  height: 350,
  position: 'relative',
});

export const projectImg = style({
  width: '100%',
  height: '90%',
  objectFit: 'contain',
});

export const projectTitleDate = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 8,
  paddingBottom: 8,
  borderBottom: '1px solid #d1d9e6',
});

export const projectTitleDateBig = style([
  projectTitleDate,
  {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
]);

export const projectTitle = style({
  letterSpacing: '0.5px',
  lineHeight: 1.6,
  fontWeight: 600,
  color: '#333',
  fontSize: '1.2rem',
});

export const projectTitleBig = style([
  projectTitle,
  {
    fontSize: '1.775rem',
  },
]);

export const showBigBtn = style({
  width: 'fit-content',
  height: 44,
  padding: '6px 12px',
  position: 'absolute',
  right: 18,
  cursor: 'pointer',
  border: '1px solid #4a90e2',
  borderRadius: '8px',
  background: 'rgba(255, 255, 255, 0.9)',
  fontSize: '0.85rem',
  color: '#005f99',
  fontWeight: 600,
  ':hover': {
    color: '#ffffff',
    background: '#4a90e2',
  },
});

const motion = keyframes({
  '0%': {
    marginTop: '0px',
  },
  '100%': {
    marginTop: '10px',
  },
});

export const customSvg = style({
  width: 30,
  height: 30,
  position: 'absolute',
  top: -20,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animation: `${motion} 0.5s linear 0s infinite alternate`,
});

export const fullScreenBtn = style({
  width: 'fit-content',
  height: 44,
  borderRadius: 8,
  marginLeft: 'auto',
  marginTop: 12,
  padding: '6px 12px',
  cursor: 'pointer',
  border: '1px solid #4a90e2',
  background: 'rgba(255, 255, 255, 0.9)',
  fontSize: '0.85rem',
  color: '#005f99',
  fontWeight: 600,
  ':hover': {
    color: '#ffffff',
    background: '#4a90e2',
  },
});

export const fillProjectsContainer = style({
  width: '100%',
  height: 'max-content',
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
});

export const imgsContainer = style({
  position: 'relative',
  width: '150%',
  display: 'flex',
  gap: 48,
  margin: '42px 0',
});

export const projectsImgs = style({
  border: '1px solid #E3E6E8',
  borderRadius: 8,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  objectFit: 'contain',
});

export const linkBox = style({
  width: 'fit-content',
  marginTop: 24,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  borderRadius: 8,
  border: '1px solid #d1d9e6',
  padding: '10px 14px',
});
