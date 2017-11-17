import React from 'react';
import { connect } from 'react-redux';
import { sendProp } from '../../redux/actions/languageAction';

class Home extends React.Component {
  sendProp() {
    this.props.dispatch(sendProp({
      joox: 'I am prop sent down'
    }))
  }
  render() {
    return (
      <div>
        <div className="container">
          <br />
          <div className="row">
            <div className="col text-center">
              <div className="jumbotron">
                <h1 className="display-3">Joox Site</h1>
                <p className="lead">{this.props.lang.language.poc}</p>
                <hr className="my-4" />
                <p className="lead">
                <button onClick={()=>this.sendProp()} className="btn btn-primary btn-lg">Send Props</button>
                </p>
              </div>
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