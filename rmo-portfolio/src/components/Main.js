import React, {Component} from "react";
import Header from "./Header";
import About from "./About";
// import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import Footer from "./Footer";

class Main extends Component {
    state = {
        currentPage: "About"
    };

    handlePageChange = page => {
        this.setState({currentPage: page});
    };

    renderPage = () => {
        if (this.state.currentPage === "About") {
            return <About />;
        //   } else if (this.state.currentPage === "Porfolio") {
            // return <Portfolio />;
          } else if (this.state.currentPage === "Contact") {
            return <Contact />;
          } else {
            return <Resume />;
          }   
    };

    render(){
        return(
            <div>
            <Header
                currentPage={this.state.currentPage}
                handlePageChange={this.handlePageChange}
            />
            {this.renderPage()}
            <Footer />
            </div>
        );
    }
}


export default Main;