import languages from '../../config/languages/languages';

export default function reducer(state = {
    language: languages['en']
}, action) {
    switch (action.type) {
        case "changeLang":
            return { ...state, language: languages[action.payload] }
    }
    return state
}