import { Component } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


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
                    <Footer></Footer>
                </div>

            </div>
        );
    }

}

export default Layout;