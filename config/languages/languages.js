import en from './en';
import th from './th';

const language = {
    en: en(),
    th: th()
}

export const getLang = (lang, props) => {
    return language[lang]
}