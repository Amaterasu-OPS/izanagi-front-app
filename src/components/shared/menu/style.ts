import { Flex } from 'amaterasu-freyja-ui-design-system';
import { MenuItem } from './item/menuItem';
import styled from '@emotion/styled';

export const ComponentMenu = styled(Flex)`
    background-color: #000000;
    width: 20rem;
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    padding: 2rem 1rem;
    color: #ffffff;
    border-right: 1px solid #3D3D3D;
    overflow-y: auto;
`

export const LogoImage = styled.img`
    width: 3rem;
`

export const MenuHeader = styled(Flex)`
    height: min-content;
`

export const MenuContent = styled(Flex)`
    flex: 1;
    padding-bottom: 2rem;
`

export const MenuContentItemLast = styled(MenuItem)`
    margin-top: auto;
`
