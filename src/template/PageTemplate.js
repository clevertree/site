import logo from './assets/logo.png';
import React from "react";
import "./assets/DefaultTheme.css"

class PageTemplate extends React.Component {
    render() {
        return (
            <div className="theme">
                {this.renderHeader()}
                {this.renderBody()}
                {this.renderFooter()}
            </div>
        );
    }

    renderHeader() {
        return (
            <header>
                <a href="/">
                    <img src={logo} className="logo" alt="Clever Tree Logo" />
                </a>
            </header>
        );

    }

    renderBody() {
        return <div className="content">
            Content
        </div>
    }

    renderFooter() {

        return (
            <footer>
                <div className="text-created-by">
                    Created by <a href="https://github.com/clevertree/" target="_blank" rel="noopener noreferrer">Ari Asulin</a>
                </div>
            </footer>
        );
    }
}

export default PageTemplate;
