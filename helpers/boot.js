import { Router } from '../config/routes';
import { changeLang } from '../redux/actions/languageAction';

export const boot = (props, store) => {
  if (!props.url.query.lang) {
    console.log('wat')
    Router.push(`/?lang=en`, `/en`, { shallow: true })
  } else {
    store.dispatch(changeLang(props.url.query.lang))
  }
}