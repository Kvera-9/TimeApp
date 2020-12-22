import React, { Component } from 'react';
import './App.css';

export default class Idea extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      text: (<div>El valor del tiempo!</div>),
      text_plainText: "El valor del tiempo!",
      textcopy: (<div>El tiempo es un valor al que muy a menudo no le damos la importancia que debería. Y es que éste es uno de los recursos más <br />valiosos de los que disponemos, ya que una vez gastado no se puede volver a recuperar.</div>),
      textcopy_plainText: "El tiempo es un valor al que muy a menudo no le damos la importancia que debería. Y es que éste es uno de los recursos más \nvaliosos de los que disponemos, ya que una vez gastado no se puede volver a recuperar.",
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
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elTextCopy = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const style_elSpacer = {
      background: 'rgba(255, 255, 255, 0.000)',
     };
    
    return (
      <div className="Idea">
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
              <div><div dangerouslySetInnerHTML={{__html: this.state.textcopy_plainText.replace(/\n/g, '<br>')}}></div></div>
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
