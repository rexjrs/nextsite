const en = (props)=> {
    const prop = {...props}
    return {
        lang: 'en',
        home: 'Home',
        about: 'About',
        joox: `Joox ${prop.joox ? prop.joox : ''}`,
        poc: 'This is a Joox web app POC created with Next.js using next-routes, redux, and react-redux',
        about_text: 'Some text here yea',
        about_text_long: 'Some text here yeaSome text here yeaSome text here yeaSome text here yeaSome text here yeaSome text here yeaSome text here yeaSome text here yeaSome text here yea'
    }
}

export default en;