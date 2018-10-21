import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

class AppNavBar extends React.Component {
    render() {
        return (
            <Navbar>
                <Nav>
                    <NavItem eventKey={1} href="/earthquakes">
                        Home
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}
export default AppNavBar;