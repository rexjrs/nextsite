import { getLang } from '../../config/languages/languages';

export default function reducer(state = {
    language: getLang('en', null)
}, action) {
    switch (action.type) {
        case "changeLang":
            return { ...state, language: getLang(action.payload, action.props) }
    }
    return state
}