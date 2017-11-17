import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.lang.language.home}
        </div>
        <style jsx>{`
  
        `}</style>
      </div>
    )
  }
}

export default connect(state => state)(Home);