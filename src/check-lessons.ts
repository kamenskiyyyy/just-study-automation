import {HOST} from "./config";

const https = require('https');

module.exports.handler = async function () {

    const req = await https.request({
        port: "443",
        host: HOST,
        path: "/api/check-lessons",
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
        })

    req.on('error', () => {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'text/plain'
            },
            body: `Уведомления не отправлены`
        }
    })

    req.end();

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain'
        },
        isBase64Encoded: false,
        body: `Уведомления отправлены`
    }
};
