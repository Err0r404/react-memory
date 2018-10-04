import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <footer className="page-footer font-small grey darken-1">
                <div className="footer-copyright text-center py-3">
                    Made with <i className="fa fa-heart red-text ml-1 mr-1"/> by
                    <a href="https://jschmitt.fr" target={'_blank'}> Julien</a>
                </div>
            </footer>
        );
    }
}

export default Footer;