'use client';

import { Theme, defaultTheme } from 'amaterasu-freyja-ui-design-system';

import EmotionCacheProvider from './providers/emoticon';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning suppressContentEditableWarning>
        <EmotionCacheProvider>
          <Theme theme={defaultTheme}>
            {children}
          </Theme>
        </EmotionCacheProvider>
      </body>
    </html>
  );
}
