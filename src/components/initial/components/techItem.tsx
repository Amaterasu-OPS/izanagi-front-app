import * as S from '../style';

import { Text } from 'amaterasu-freyja-ui-design-system';

type TechItemProps = {
    icon: string;
    label: string;
}

export const TechItem = ({ icon, label }: TechItemProps) => {
    return <S.StyledItems direction='row' justifyContent='flex-start' alignItems='center'>
        <S.StyledIconImg src={icon} />
        <Text color="#FFFFFF" weight='semibold' size='2xlarge' as='body'>{label}</Text>
    </S.StyledItems>
};
