const en = (props)=> {
    const prop = {...props}
    return {
        lang: 'en',
        home: 'Home',
        about: 'About',
        joox: `Joox ${prop.joox ? prop.joox : ''}`
    }
}

export default en;