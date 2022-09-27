import nodemailer from "nodemailer";
import {google} from "googleapis";
import config from "../lib/config.mjs"
import myOAuth2Client from "./google.utils.mjs";
const OAuth2=google.auth.OAuth2;
async function sendMail(to,subject,htmlContent){
    myOAuth2Client.setCredentials({refresh_token:config.get("refreshToken")});
    const accessToken=await myOAuth2Client.getAccessToken();
    const smtpTransport= nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAUTH2",
            user: config.get("email"),
            clientId: config.get("googleId"),
            clientSecret: config.get("googleSecret"),
            refreshToken: config.get("refreshToken"),
            accessToken: accessToken.token
        }
    });

    const mailOptions={
        from:config.get("email"),
        to:to,
        subject:subject,
        html:htmlContent
    };
    smtpTransport.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err);
            return false;
        }
        else{
            log.info(info);
            return true;
        }
    }
    );
}

export default sendMail;

