import styled from '@emotion/styled';

export const PaginationItem = styled.div<{ active?: boolean }>`
    padding: 1rem;
    margin: 0 0.25rem;
    border-radius: 0.5rem;
    background-color: ${props => props.active ? props.theme.colors.primary : '#3D3D3D'};
    color: ${props => props.active ? '#FFF' : '#E0E0E0'};
    cursor: pointer;
    user-select: none;
    width: fit-content;
    min-width: ${props => props.active ? '2.5rem' : '1.5rem'};
    height: ${props => props.active ? '2.5rem' : '1.5rem'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.active ? '1.25rem' : '0.875rem'};
    aspect-ratio: 1 / 1;
    transition: .3s ease;

    &:hover {
        background-color: ${props => props.active ? props.theme.colors.primary : '#575757'};
    }
`;
