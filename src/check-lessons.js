const fetch = require("node-fetch");

module.exports.handler = async function () {

    const response = await fetch(`${process.env.HOST}/api/check-lessons`);

    if (response.ok) {
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'text/plain'
            },
            isBase64Encoded: false,
            body: `Уведомления отправлены`
        }
    } else {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'text/plain'
            },
            isBase64Encoded: false,
            body: `Произошла ошибка`
        }
    }
};
