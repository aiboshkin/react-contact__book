import React, { Component } from 'react';
import './Loader.css'

class Loader extends Component {
    render() {
        return (
            // <div style={{display: 'flex', justifyContent: 'center', margin: '.5rem'}}>
            //     <div className="lds-dual-ring" />
            // </div>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        );
    }
}

export default Loader;