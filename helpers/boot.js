import { Router } from '../config/routes';
import { changeLang } from '../redux/actions/languageAction';

export const boot = (props, store) => {
  if (!props.url.query.lang) {
    if(props.originalUrl === '/'){
      // Router.push(`/?lang=en`, `/en`, { shallow: true })
    }
  } else {
    store.dispatch(changeLang(props.url.query.lang))
  }
}

export const checkIndex = (props) => {
  if(props.originalUrl === '/'){
    Router.push(`/?lang=en`, `/en`, { shallow: true })
  }
}