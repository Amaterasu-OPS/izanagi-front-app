import * as S from './style'

import { Text } from 'amaterasu-freyja-ui-design-system'

type MenuItemProps = {
    label: string
    isActive: boolean
    icon: React.ReactNode
    onClick?: () => void
}

export const MenuItem = ({ label, isActive, onClick, icon, ...props }: MenuItemProps & React.HTMLAttributes<HTMLDivElement>) => {
  return <S.Item alignItems='center' gap='.5rem' isActive={isActive} onClick={onClick} {...props}>
     {icon} <Text weight='extralight'>{label}</Text>
  </S.Item>
}