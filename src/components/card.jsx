import { Card as BootstrapCard, Button } from 'react-bootstrap'

export const Card = ({ title, children }) => {
    return (
        <BootstrapCard style={{ width: '100%' }}>
            <BootstrapCard.Body>
                {title && <BootstrapCard.Title style={{ fontSize: '30px' }}>{title}</BootstrapCard.Title>}

                <div style={{ paddingTop: '5px' }}>
                    {children}
                </div>
            </BootstrapCard.Body>
        </BootstrapCard>
    )
}