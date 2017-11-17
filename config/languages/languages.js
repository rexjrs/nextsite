import en from './en';
import th from './th';

export const getLang = (lang, props) => {
    switch(lang){
        case "th":
            return th(props)
        case "en":
            return en(props)
    }
}