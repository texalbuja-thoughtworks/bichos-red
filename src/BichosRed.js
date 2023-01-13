
import '@google/model-viewer/dist/model-viewer'
import React, { Component } from 'react';

class BichosRed extends Component {

    constructor(props) {
        super(props);
        this.state = {asset: 'assets/escarabajo.glb'};
      }

    render() {
        return <model-viewer src={this.state.asset} ar ar-modes="webxr scene-viewer quick-look" camera-controls shadow-intensity="1" autoplay skybox-image="assets/rustig_koppie_puresky_1k" environment-image="assets/rustig_koppie_puresky_1k">
            <div className="row">
                <div className="col-12">
                    <button onClick={()=> this.switchSrc('escarabajo')} className="btn btn-secondary" type="button">Escarabajo</button>
                </div>
                <div className="col-12">
                    <button onClick={()=> this.switchSrc('Bombus')} className="btn btn-secondary" type="button">BOMBUS</button>
                </div>
                
               
            </div>
        </model-viewer>
    }

    switchSrc(asset) {
        this.setState({asset: `assets/${asset}.glb`});
    }
}

export default BichosRed