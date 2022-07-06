import { Component } from "react";
import Header from "../Components/Header";


class Layout extends Component{

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    {/* HEADER */}
                    <Header></Header>
                </div>

                <div className="row">
                    {/* MAIN CONTENT */}
                    {this.props.children}
                </div>

                <div className="row">
                    {/* FOOTER */}
                    <h1>Footer</h1>
                </div>

            </div>
        );
    }

}

export default Layout;