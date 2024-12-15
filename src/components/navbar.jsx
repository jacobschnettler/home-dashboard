import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap'

export const Navbar = ({ height }) => {
    return (
        <BootstrapNavbar expand="lg" className="bg-body-tertiary" style={{ height: height }}>
            <Container fluid>
                <BootstrapNavbar.Brand href="#">Dashboard</BootstrapNavbar.Brand>
            </Container>
        </BootstrapNavbar>
    )
}