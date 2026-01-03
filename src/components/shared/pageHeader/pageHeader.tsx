'use client';

import * as S from './style';

type PageHeaderProps = {
    children?: React.ReactNode;
}

export const PageHeader = ({ children }: PageHeaderProps) => {
    return (
        <S.Header justifyContent='space-between' alignItems='center'>
            {children}
        </S.Header>
    );
}