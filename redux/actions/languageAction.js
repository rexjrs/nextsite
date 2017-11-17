export function changeLang(value){
    return {
        type: "changeLang",
        payload: value
    }
}

export function sendProp(value){
    return {
        type: "sendProp",
        payload: value
    }
}