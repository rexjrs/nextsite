import { getLang } from '../../config/languages/languages';

export default function reducer(state = {
    languageProps: {},    
    language: getLang('en', {}),
}, action) {
    switch (action.type) {
        case "changeLang":
            return { ...state, language: getLang(action.payload, state.languageProps) }
        case "sendProp":
            return {...state, language: getLang(state.language.lang, action.payload), languageProps: {...action.payload}}
    }
    return state
}