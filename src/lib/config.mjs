import env from 'dotenv';

class Config {
    _config = {};
    constructor(){
        env.config();
        this._config = {
            port: process.env.P_PORT,
            db_uri: process.env.DB_URI
    
        }
    }
    get(key){
        let val = this._config[key]?? null;
        if(val === null){
            throw new Error(`Key ${key} not found in config`);
        }
        return val;
    }
}

const config = new Config();

export default config;