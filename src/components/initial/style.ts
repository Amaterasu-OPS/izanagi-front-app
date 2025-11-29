import { Flex, Text } from 'amaterasu-freyja-ui-design-system';

import styled from '@emotion/styled';

export const StyledImg = styled.div`
    background-image: url('/imgs/login-sun.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 1/1;
    height: 200vh;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 75%;
    z-index: 1;
`

export const StyledBanner = styled.div`
    position: relative;
    background-color: #111111;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

export const StyledTextMain = styled(Text)`
    color: #FFFFFF;
    font-weight: 600;
    font-size: 140px;
    letter-spacing: 1px;
    margin-bottom: 1rem;
`

export const StyledTextSecondary = styled(Text)`
    color: #FFFFFF;
    font-size: 28px;
    font-weight: 200;
    letter-spacing: 1px;
`

export const StyledContent = styled(Flex)`
    width: 100vw;
    z-index: 2;
    padding-left: 6rem;
    padding-top: 15vh;
`

export const StyledButtonContent = styled.div`
    margin-top: 2rem;
    margin-bottom: 8rem;
`

export const StyledTechs = styled(Flex)`
    ${(props) => `
        padding: 1rem;
        padding-left: 2.5rem;
        border-left: 5px solid ${props.theme.colors.primary};
    `}
`

export const StyledIconImg = styled.img`
    width: 40px;
    height: 40px;
`

export const StyledItems = styled(Flex)`
    gap: 2rem;
`

export const StyledModalContent = styled(Flex)`
    border-radius: 8px;
    padding: 20px;
    background: #fafafa;
    width: 500px;
`