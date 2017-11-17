export function changeLang(value, props){
    return {
        type: "changeLang",
        payload: value,
        props: props
    }
}