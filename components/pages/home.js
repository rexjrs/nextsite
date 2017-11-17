import React from 'react';
import { connect } from 'react-redux';
import { changeLang } from '../../redux/actions/languageAction';

class Home extends React.Component {
  sendProp(){
    this.props.dispatch(changeLang(this.props.lang.language.lang, {
      joox: 'I am a prop!!!!'
    }))
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              {this.props.lang.language.home}
              <br />
              <button onClick={()=>this.sendProp()}>Send prop to language</button>
            </div>
          </div>

        </div>
        <style jsx>{`
  
        `}</style>
      </div>
    )
  }
}

export default connect(state => state)(Home);