import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('body, html', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'lightgray',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('*', {
  boxSizing: 'inherit',
});

globalStyle('h1, h2, h3, h4, h5, h6, p, span', {
  margin: 0,
  padding: 0,
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('input, textarea, button', {
  fontFamily: 'inherit',
});

globalStyle('button', {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
});

globalStyle('h2', {
  fontSize: '1.2rem', // 큰 글자 크기
  color: '#333', // 중간 톤의 검정색
  fontWeight: 600,
  marginBottom: 8,
  borderBottom: '1px solid #ddd', // 얇은 하단 경계선
  paddingBottom: 6,
});

// h3 태그 스타일 (소제목)
globalStyle('h3', {
  fontSize: '1.1rem', // 중간 크기 글자
  color: '#444', // 조금 더 연한 검정색
  borderBottom: '1px solid #ddd', // 얇은 하단 경계선
  fontWeight: 500,
  margin: '12px 0 8px 0', // 여백 조절
  paddingBottom: 4,
});
