'use client';

import * as S from './style';

import { ErrorModal, TechItem } from './components';

import { Button } from 'amaterasu-freyja-ui-design-system';
import { useSSRApiClient } from '@/apiRoutes/client';
import { useState } from 'react';

export const InitialComponentPage = () => {
    const {signInRoute} = useSSRApiClient();

    const [isLoading, setIsLoading] = useState(false);
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const handleLogin = async () => {
        try {
            setIsLoading(true);
            const response = await signInRoute('/home');
            window.location.href = response.data.redirectUrl;
        } catch (error) {
            console.error('Error during sign-in:', error);
            setOverlayVisible(true);
        }
    }

    return (
        <S.StyledBanner>
            <ErrorModal isOverlayVisible={isOverlayVisible} onClose={() => setOverlayVisible(false)} />
            <S.StyledContent direction="column">
                <S.StyledTextMain color="#FFFFFF" as='h1'>
                    Amaterasu
                </S.StyledTextMain>
                <S.StyledTextSecondary color="#FFFFFF" as='h3'>
                    Create and scale-up easily your data services
                </S.StyledTextSecondary>
                <S.StyledButtonContent>
                    <Button isLoading={isLoading} variant="primary" size='large' onClick={handleLogin} rounded='extra-large'>
                        Login
                    </Button>
                </S.StyledButtonContent>
                <S.StyledTechs direction='column' gap='2rem'>
                    <TechItem icon='/imgs/icons/druid.svg' label='Apache Druid' />
                    <TechItem icon='/imgs/icons/clickhouse.svg' label='Clickhouse' />
                    <TechItem icon='/imgs/icons/postgres.svg' label='PostgreSQL' />
                    <TechItem icon='/imgs/icons/scylladb.svg' label='ScyllaDB' />
                    <TechItem icon='/imgs/icons/right-arrow.svg' label='And more...' />
                </S.StyledTechs>
            </S.StyledContent>
            <S.StyledImg/>
        </S.StyledBanner>
    );
};
