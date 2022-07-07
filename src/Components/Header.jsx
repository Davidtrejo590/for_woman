import { Component } from "react";


class Header extends Component {

    render() {
        return (

            <nav className="navbar navbar-light navbar-expand-lg " style={{backgroundColor: '#e3f2fd' }}>

                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        {/* <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"></img> */}
                        Inicio
                    </a>

                    <span className="navbar-text">
                        For Woman
                    </span>
                </div>

            </nav>

        );
    }
}

export default Header;