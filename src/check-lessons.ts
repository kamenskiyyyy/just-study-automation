import {HOST} from "./config";

module.exports.handler = async function () {

    await fetch(`${HOST}/api/check-lessons`)

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain'
        },
        isBase64Encoded: false,
        body: `Уведомления отправлены`
    }
};
