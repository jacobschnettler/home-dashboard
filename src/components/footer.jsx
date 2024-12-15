import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap'

export const Footer = ({ height }) => {
    return (
        <BootstrapNavbar expand="lg" className="bg-body-tertiary" style={{ height: height }}>
            <Container fluid>
                <BootstrapNavbar.Brand style={{ fontSize: '18px' }}>Made by Jacob Schnettler</BootstrapNavbar.Brand>
            </Container>
        </BootstrapNavbar>
    )
}