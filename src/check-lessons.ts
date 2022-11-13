import {HOST} from "./config";

const https = require('https');

module.exports.handler = async function () {

    await https.request({
        port: "443",
        host: HOST,
        path: "/api/check-lessons",
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
        }, (res) => {
        console.log(res.statusCode);
    });

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain'
        },
        isBase64Encoded: false,
        body: `Уведомления отправлены`
    }
};
