'use client'

import * as S from './style'

import { FiCornerDownLeft, FiDatabase, FiKey, FiSettings, FiUser, FiUsers } from 'react-icons/fi'
import { usePathname, useRouter } from 'next/navigation'

import { MenuItem } from './item/menuItem'
import { Text } from 'amaterasu-freyja-ui-design-system'
import { UserinfoResponse } from '@/types/auth'

type MenuProps = {
  user: UserinfoResponse
}

export const Menu = ({ user }: MenuProps) => {
  const pathname = usePathname();
  const router = useRouter()

  const paths = {
    'clusters': [/\/home$/],
    'settings': [/\/settings$/],
    'users': [/\/users$/],
    'permissions': [/\/permissions$/],
    'account': [/\/account$/],
  }

  const isActiveRoute = (routeKey: keyof typeof paths) => {
    return paths[routeKey].some(path => path.test(pathname));
  }

  return <S.ComponentMenu direction='column' gap='3rem'>
    <S.MenuHeader direction='row' gap='1rem' alignItems='center'>
      <S.LogoImage src="/imgs/logo/logo.svg" alt="Menu Image"></S.LogoImage>
      <Text suppressHydrationWarning color='#ffffff' size='xlarge'>{`${user.given_name} ${user.family_name}`}</Text>
    </S.MenuHeader>
    <S.MenuContent direction='column' gap='.25rem'>
      <MenuItem icon={<FiDatabase/>} label="Clusters" isActive={isActiveRoute('clusters')} onClick={() => router.replace('/home')} />
      <MenuItem icon={<FiSettings/>} label="Settings" isActive={isActiveRoute('settings')} />
      <MenuItem icon={<FiUsers/>} label="Users" isActive={isActiveRoute('users')} />
      <MenuItem icon={<FiKey/>} label="Permissions" isActive={isActiveRoute('permissions')} />
      <MenuItem icon={<FiUser/>} label="Account" isActive={isActiveRoute('account')} />

      <S.MenuContentItemLast icon={<FiCornerDownLeft/>} label='Exit' isActive={false} />
    </S.MenuContent>
  </S.ComponentMenu>
}