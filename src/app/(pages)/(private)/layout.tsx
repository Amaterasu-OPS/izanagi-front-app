import Loading from './loading';
import { PrivateLayoutComponent } from '@/components/shared';
import { Suspense } from 'react';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { useAuthApiAuthenticated } from '@/apiRoutes/server';

const getUserInfo = async () => {
  const cookiesList = await cookies();
  const accessToken = cookiesList.get('access_token')?.value || '';

  const { UserinfoRouter } = await useAuthApiAuthenticated(accessToken);

  try {
    const { sub } = jwt.decode(accessToken) as {sub: string};
    const { data } = await UserinfoRouter(sub as string)

    return data;
  } catch {
    return null
  }
}

const Content = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const data = await getUserInfo();

  if (!data) {
    throw new Error('User not authenticated');
  }

  return <PrivateLayoutComponent user={data}>{children}</PrivateLayoutComponent>;
}

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<Loading />} defer>
    <Content>{children}</Content>
  </Suspense>
}