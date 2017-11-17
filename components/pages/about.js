import React from 'react';
import { connect } from 'react-redux';

class About extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.lang.language.about}
        </div>
        <style jsx>{`
  
        `}</style>
      </div>
    )
  }
}

export default connect(state => state)(About);