import { connect } from 'react-redux';
import { Router } from '../config/routes';

class Nav extends React.Component {
  changePage(page, lang) {
    Router.push(`/?lang=${lang}&page=${page}`, `/${lang}/${page}`, { shallow: true })
  }

  render() {
    const lang = this.props.lang.language;
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" onClick={() => this.changePage('', lang.lang)}>Joox</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={() => this.changePage('', lang.lang)}>{lang.home}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => this.changePage('about', lang.lang)}>{lang.about}</a>
            </li>
            <li className="nav-item">
              <img onClick={() => this.changePage(this.props.url.query.page ? this.props.url.query.page : '', 'th')} src="/static/assets/th.png" className="flag-ball" />
            </li>
            <li className="nav-item">
              <img onClick={() => this.changePage(this.props.url.query.page, 'en')}  src="/static/assets/en.png" className="flag-ball" />
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        <style jsx>{`
          .flag-ball{
            margin-top: 10px;
            width: 20px;
            margin-left: 10px;
          }
        `}</style>
      </nav>
    )
  }
}

export default connect(state => state)(Nav);