'use client';

import { Button } from 'amaterasu-freyja-ui-design-system';
import { useSSRApiClient } from '@/apiRoutes/client';

export const InitialComponentPage = () => {
    const {signInRoute} = useSSRApiClient();

    const handleLogin = async () => {
        try {
            const response = await signInRoute('/home');
            window.location.href = response.data.redirectUrl;
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    }

    return (
        <div>
            <Button variant='secondary' onClick={handleLogin}>Login</Button>
        </div>
    );
};
