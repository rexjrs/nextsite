const th = (props) => {
    const prop = {...props}
    return {
        lang: 'th',
        home: 'หน้าแรก',
        about: 'เกี่ยวกับ',
        joox: `Joox ${prop.joox ? prop.joox : ''}`
    }
}

export default th;