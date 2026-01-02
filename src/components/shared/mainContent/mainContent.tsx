'use client';

import * as S from './style'

export const MainContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <S.Content>
    {children}
  </S.Content>;
}