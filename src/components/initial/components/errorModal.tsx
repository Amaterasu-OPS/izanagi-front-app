import * as S from '../style';

import { Button, Overlay, Text } from 'amaterasu-freyja-ui-design-system'

type ErrorModalProps = {
    isOverlayVisible: boolean;
    onClose: () => void;
}

export const ErrorModal = ({ isOverlayVisible, onClose }: ErrorModalProps) => {
    return <Overlay
        isVisible={isOverlayVisible}
        style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}
        color='#1a1a1a'
        opacity={0.5}
        onDismiss={onClose}
        durationSeconds={.2}
    >
        <S.StyledModalContent direction='column'>
            <Text as="body" size='3xlarge'>Login Failed</Text>
            <br />
            <br />
            <Text as='paragraph' weight='light' size='xlarge'>We encountered an error during the login process</Text>
            <br />
            <br />
            <div>
                <Button onClick={onClose} variant='quaternary'>Ok</Button>
            </div>
        </S.StyledModalContent>
    </Overlay>
}