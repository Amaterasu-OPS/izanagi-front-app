import { CallbackComponentPage } from '@/components/callback/page';
import { SearchParams } from 'next/dist/server/request/search-params';

export default async function CallbackPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
    const params = await searchParams

    const code = params.code as string | undefined;
    const state = params.state as string | undefined;

    return <CallbackComponentPage code={code} state={state} />
}
