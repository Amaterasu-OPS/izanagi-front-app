import { InitialComponentPage } from '@/components/initial';
import { SearchParams } from 'next/dist/server/request/search-params';

export default async function InitialPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams

  return <InitialComponentPage returnTo={(params.redirectUrl as string | undefined) || '/home'} />
}
