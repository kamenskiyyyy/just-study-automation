const fetch = require("node-fetch");

const HOST = process.env.HOST || "crm.juststudy.online";

module.exports.handler = async function () {

    const response = await fetch(`${HOST}/api/check-lessons`);

    console.log(response)


    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain'
        },
        isBase64Encoded: false,
        body: `Уведомления отправлены`
    }
};
