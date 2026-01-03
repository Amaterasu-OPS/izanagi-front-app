import { Flex, Text } from 'amaterasu-freyja-ui-design-system';

import { css } from '@emotion/react'
import styled from '@emotion/styled';

export const Item = styled(Flex)`
    padding: 2rem;
    background-color: #000;
    border-radius: 1rem;
`;

export const ItemImage = styled.img`
    width: 40px;
    height: 40px;
`;

const pulseGreen = css`
    @keyframes pulseGreen {
        0% {
            box-shadow: 0 0 0 0 #15F98F80;
        }
        70% {
            box-shadow: 0 0 0 10px #15F98F00;
        }
        100% {
            box-shadow: 0 0 0 0 #15F98F00;
        }
    }
`

const pulseRed = (props: { theme: { colors: { error: string } } }) => css`
    @keyframes pulseRed {
        0% {
            box-shadow: 0 0 0 0 ${props.theme.colors.error}80;
        }
        70% {
            box-shadow: 0 0 0 10px ${props.theme.colors.error}00;
        }
        100% {
            box-shadow: 0 0 0 0 ${props.theme.colors.error}00;
        }
    }
`

export const HealthyIndicator = styled.div<{ healthy: boolean }>`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props => props.healthy ? '#15F98F' : props.theme.colors.error};
    box-shadow: 0 0 10px ${props => props.healthy ? '#15F98F' : props.theme.colors.error};

    ${props => props.healthy ? pulseGreen : pulseRed(props)};

    animation: ${props => props.healthy ? 'pulseGreen' : 'pulseRed'} 2s infinite;
`;

export const Header = styled(Flex)`
    padding-bottom: 2rem;
    width: 100%;
`;

export const utilizationText = styled(Text)<{ used: number }>`
    color: ${
        props => props.used > 75
        ? props.theme.colors.error
        : props.used > 50
            ? '#FFC107'
            : '#15F98F'
    };
`;