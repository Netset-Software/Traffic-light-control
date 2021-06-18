export function formDataHeader() {
    let accessToken = localStorage.getItem('access_token') | ''
    return {
        'deviceType': 'w',
        'appVersion': '1.0',
        "Content-Type": "application/x-www-form-urlencoded",
        // "Content-Type": "multipart/form-data",
                // "Content-Type": "application/json",

        'Access-Control-Allow-Origin': 'true',
        // 'token': accessToken,
        'timezone': 'Asia/Kolkata'
    };
}

export function jsonHeaders() {
    let accessToken = localStorage.getItem('access_token') | ''
    return {
        'deviceType': 'w',
        'appVersion': '1.0',
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': 'true',
        'timezone': 'Asia/Kolkata'
    };
}