'use client';

import { Flex, Loader } from 'amaterasu-freyja-ui-design-system';

import styled from '@emotion/styled';

const LoadingBase = styled(Flex)`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`;

export default function Loading() {
  return <LoadingBase>
    <Loader size={{
      width: 100,
      height: 100,
    }} isBackgroundColor={false} />
  </LoadingBase>
}