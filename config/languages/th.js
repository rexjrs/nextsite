const th = (props) => {
    const prop = {...props}
    return {
        lang: 'th',
        home: 'หน้าแรก',
        about: 'เกี่ยวกับ',
        joox: `Joox ${prop.joox ? prop.joox : ''}`,
        poc: 'นี่คือ Joox เว็บแอป POC ที่สร้างด้วย Next.js โดยใช้ next-routes, redux และ react-redux',
        about_text: 'สวัสดีฉันสบายดี',
        about_text_long: 'สวัสดีฉันสบายดีสวัสดีฉันสบายดีสวัสดีฉันสบายดีสวัสดีฉันสบายดีสวัสดีฉันสบายดีสวัสดีฉันสบายดีสวัสดีฉันสบายดีสวัสดีฉันสบายดีสวัสดีฉันสบายดีสวัสดีฉันสบายดีสวัสดีฉันสบายดี'
    }
}

export default th;