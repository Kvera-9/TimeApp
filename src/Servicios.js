import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Servicios_elImage_754464.jpg';

export default class Servicios extends Component {

  // Properties used by this component:
  // name, description

  constructor(props) {
    super(props);
    
    this.state = {
      text: (<div>Gabrielle</div>),
      text_plainText: "Gabrielle",
      textcopy: (<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo lorem ac diam aliquam condimentum.</div>),
      textcopy_plainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo lorem ac diam aliquam condimentum.",
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
      background: 'rgba(255, 255, 255, 1.000)',
     };
    const style_elText2 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elImage = {
      backgroundImage: 'url('+img_elImage+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    
    const value_text = this.props.name;
    
    const style_elText = {
      fontSize: 19.4,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const value_textCopy = this.props.description;
    
    const style_elTextCopy = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const style_elSpacer = {
      background: 'rgba(254, 255, 255, 1.000)',
     };
    
    return (
      <div className="Servicios">
        <div className="background">
          <div className="containerMinHeight elBackgroundShape" style={style_elBackgroundShape} />
        </div>
        
        <div className="layoutFlow">
          <div className="elText2">
            <div className="headlineFont" style={style_elText2}>
              <div>{this.props.locStrings.servicios_text2_127151}</div>
            </div>
          </div>
          
          <div className="elImage">
            <div style={style_elImage} />
          </div>
          
          <div className="elText">
            <div className="font-AppleSystemUIFont" style={style_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.state.text}</span>)}</div>
            </div>
          </div>
          
          <div className="elTextCopy">
            <div className="baseFont" style={style_elTextCopy}>
              <div>{value_textCopy !== undefined ? value_textCopy : (<span className="propValueMissing">{this.state.textcopy}</span>)}</div>
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
