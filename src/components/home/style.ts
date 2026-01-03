import { Button, Text } from 'amaterasu-freyja-ui-design-system';

import styled from '@emotion/styled';

export const AddButton = styled(Button)`
    padding: 0;
    width: 2.75em;
    height: 2.75em;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 1.5em;
        height: 1.5em;
        line-height: 1.5em;
    }
`

export const FilterButtonText = styled(Text)`
    color: ${props => props.theme.colors.primary || '#e7002a'};
`
