import { changeLang } from '../redux/actions/languageAction';

export const checkLang = (props, store) => {
    console.log(props)
    if(props.url.query.lang){
        if(props.url.query.lang !== store.getState().lang.language.lang){
            store.dispatch(changeLang(props.url.query.lang))
        }
    }
}