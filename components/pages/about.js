import React from 'react';
import { connect } from 'react-redux';

class About extends React.Component {
  render() {
    return (
      <div className="container">
      <br/>
        <div className="row">
          <div className="col">
            <div id="accordion" role="tablist" aria-multiselectable="true">
              <div className="card">
                <div className="card-header" role="tab" id="headingOne">
                  <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      {this.props.lang.language.about_text}
        </a>
                  </h5>
                </div>

                <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                  <div className="card-block">
                  {this.props.lang.language.about_text_long}
      </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingTwo">
                  <h5 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    {this.props.lang.language.about_text}
        </a>
                  </h5>
                </div>
                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div className="card-block">
{this.props.lang.language.about_text_long}      </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" role="tab" id="headingThree">
                  <h5 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
{this.props.lang.language.about_text}        </a>
                  </h5>
                </div>
                <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                  <div className="card-block">
{this.props.lang.language.about_text_long}      </div>
                </div>
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

export default connect(state => state)(About);