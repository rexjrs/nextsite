import { connect } from 'react-redux';
import { Router } from '../config/routes';

class Nav extends React.Component {
  changePage(page, lang) {
    Router.push(`/?lang=${lang}&page=${page}`, `/${lang}/${page}`, { shallow: true })
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" onClick={() => this.changePage('', this.props.lang.language.lang)}>Joox</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={() => this.changePage('', this.props.lang.language.lang)}>{this.props.lang.language.home}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => this.changePage('about', this.props.lang.language.lang)}>{this.props.lang.language.about}</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        <style jsx>{`

        `}</style>
      </nav>
    )
  }
}

export default connect(state => state)(Nav);