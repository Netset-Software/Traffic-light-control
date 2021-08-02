export function formDataHeader() {
    return Object.assign({}, {"Content-Type": "application/x-www-form-urlencoded"}, commonHeaders);
}

export function jsonHeaders() {
    return Object.assign({}, {"Content-Type": "application/json"}, commonHeaders);
}

function commonHeaders(){
    return {
        'deviceType': 'w',
        'appVersion': '1.0',
        'Access-Control-Allow-Origin': 'true',
        'timezone': 'Asia/Kolkata'
    }
}