import React, { Component } from 'react';
import './App.css';

export default class Pksi extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      text: (<div>El intercambio de habilidades </div>),
      text_plainText: "El intercambio de habilidades ",
      textcopy: (<div>Cada uno de nosotros tenemos una esencia que nos hace únicos. Siempre podemos aprender algo nuevo de los demás; nuestra sociedad se ha construïdo  gracias a la cooperación y la transferencia de conocimientos. A partir de ésta aplicación queremos poner en práctica ésta filosofía y facilitar la vida de la gente.</div>),
      textcopy_plainText: "Cada uno de nosotros tenemos una esencia que nos hace únicos. Siempre podemos aprender algo nuevo de los demás; nuestra sociedad se ha construïdo  gracias a la cooperación y la transferencia de conocimientos. A partir de ésta aplicación queremos poner en práctica ésta filosofía y facilitar la vida de la gente.",
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  render() {
    
    const style_elBackgroundShape = {
      background: 'rgba(0, 83, 80, 1.000)',
     };
    const style_elText = {
      color: '#feffff',
      textAlign: 'left',
     };
    const style_elTextCopy = {
      color: '#feffff',
      textAlign: 'left',
     };
    
    const style_elSpacer = {
      background: 'rgba(255, 255, 255, 0.000)',
     };
    
    return (
      <div className="Pksi">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow">
          <div className="elText">
            <div className="headlineFont" style={style_elText}>
              <div>{this.state.text}</div>
            </div>
          </div>
          
          <div className="elTextCopy">
            <div className="baseFont" style={style_elTextCopy}>
              <div>{this.state.textcopy}</div>
            </div>
          </div>
          
          <div className="elSpacer">
            <div style={style_elSpacer} />
          </div>
        </div>
        
      </div>
    )
  }
  
}
