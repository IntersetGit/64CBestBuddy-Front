export const SendEmail = async (To, Subject, Body) => {
    return await Email.send({
        Host: process.env.NEXT_PUBLIC_EMAIL_HOST,
        Port: process.env.NEXT_PUBLIC_EMAIL_PORT,
        Username: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        Password: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        To,
        From: process.env.NEXT_PUBLIC_EMAIL_FROM,
        Subject,
        Body,
    })
};

export default {
    SendEmail
}