import { connect } from 'react-redux';
import { Router } from '../config/routes';

class Nav extends React.Component {
  changePage(page, lang) {
    Router.push(`/?lang=${lang}&page=${page}`, `/${lang}/${page}`, { shallow: true })
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <a onClick={() => this.changePage('', this.props.lang.language.lang)}>{this.props.lang.language.home}</a>
          </li>
          <li>
            <a onClick={() => this.changePage('about', this.props.lang.language.lang)}>{this.props.lang.language.about}</a>
          </li>
        </ul>

        <style jsx>{`
          :global(body) {
            margin: 0;
            font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
          }
          nav {
            text-align: center;
          }
          ul {
            display: flex;
          }
          nav > ul {
            padding: 4px 16px;
          }
          li {
            display: flex;
            padding: 6px 8px;
          }
          a {
            color: #067df7;
            text-decoration: none;
            font-size: 13px;
          }
        `}</style>
      </nav>
    )
  }
}

export default connect(state=>state)(Nav);