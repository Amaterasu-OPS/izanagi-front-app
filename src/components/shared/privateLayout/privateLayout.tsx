'use client';

import { Flex } from 'amaterasu-freyja-ui-design-system'
import { MainContent } from '../mainContent'
import { Menu } from '../menu'
import { UserinfoResponse } from '@/types/auth';

export const PrivateLayoutComponent = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: UserinfoResponse;
}) => {
    return <Flex direction='row'>
    <Menu user={user} />
    <MainContent>{children}</MainContent>
  </Flex>
}