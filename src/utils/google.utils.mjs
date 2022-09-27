import {google} from "googleapis"
import config from "../lib/config.mjs"

const OAuth2=google.auth.OAuth2;
const id=config.get("googleId");
const secret=config.get("googleSecret");

const myOAuth2Client=new OAuth2(id,secret);
export default myOAuth2Client;
