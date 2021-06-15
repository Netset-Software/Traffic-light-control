export function authHeader() {
    let accessToken = localStorage.getItem('access_token') | 'dweyy273iuyhu'
    return {
        'deviceType': 'w',
        'appVersion': '1.0',
        "Content-Type": "application/x-www-form-urlencoded",
        'Access-Control-Allow-Origin': '*',
        // 'token': accessToken,
        'timezone': 'Asia/Kolkata'
    };
}