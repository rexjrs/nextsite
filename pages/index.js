import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { boot, checkIndex } from '../helpers/boot';
import { checkLang } from '../helpers/autorun';
import Head from '../components/head';
import Nav from '../components/nav';
import Bundle from '../helpers/bundler';
import Media from '../components/mediaPlayer';


export default class Index extends React.Component {
  static async getInitialProps(context) {
    const { originalUrl } = context.req || {}
    return { originalUrl }
  }

  componentWillMount() {
    boot(this.props, store)
  }

  componentDidMount(){
    checkIndex(this.props)
  }

  componentDidUpdate() {
    checkLang(this.props, store)
  }

  render() {
    return (
      <div>
        <Head />
        <Provider store={store}>
          <div>
            <Nav {...this.props}/>
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