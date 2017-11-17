import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { boot } from '../helpers/boot';
import { checkLang } from '../helpers/autorun';
import Nav from '../components/nav';
import Bundle from '../helpers/bundler';
import Media from '../components/mediaPlayer';


export default class Index extends React.Component {
  componentDidMount() {
    boot(this.props, store)
  }

  componentWillUpdate(){
    checkLang(this.props, store)
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <Nav />
            <Bundle url={this.props.url.query} />
            <br />
            <Media />
          </div>
        </Provider>
        <style jsx>{`
  
        `}</style>
      </div>
    )
  }
}