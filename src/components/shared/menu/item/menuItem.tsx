import * as S from './style'

import { Text } from 'amaterasu-freyja-ui-design-system'

type MenuItemProps = {
    label: string
    isActive: boolean
    onClick?: () => void
}

export const MenuItem = ({ label, isActive, onClick, ...props }: MenuItemProps & React.HTMLAttributes<HTMLDivElement>) => {
  return <S.Item isActive={isActive} onClick={onClick} {...props}>
    <Text weight='extralight'>{label}</Text>
  </S.Item>
}