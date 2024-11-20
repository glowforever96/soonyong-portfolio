import type { Metadata } from 'next';
import './styles/global.css';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: './fonts/PretendardVariable.ttf',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: 'Frontend Developer | Soonyong Kwon',
  description: '프론트앤드 개발자 권순용의 포트폴리오 챗봇입니다.',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
