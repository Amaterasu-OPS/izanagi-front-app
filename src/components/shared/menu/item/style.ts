import styled from '@emotion/styled'

export const Item = styled.div<{ isActive: boolean }>`
    padding: .75rem 1rem;
    cursor: pointer;
    background-color: ${(props: { isActive: boolean }) => props.isActive ? '#3D3D3D' : 'transparent'};
    border-radius: 15px;
    transition: background-color 0.2s ease-in-out;

    & span {
        color: #C2C2C2;
        font-size: 18px;
    }

    &:hover {
        background-color: ${(props) => props.isActive ? '#3D3D3D' : '#1A1A1A'};
    }

    ${(props) => props.isActive && `
        & span {
            color: #FFFFFF;
            font-weight: bold;
        }
    `}
`