const bcrypt=require("bcryptjs");
const { data } = require("framer-motion/client");


//generate hash
async function genHashData(password) {
    try{
        const hash=await bcrypt.hash(password,salt=10);
        if(!hash){
            throw new Error("Failed to generate");
        }
        return{isError:false,data:hash,message:null}

    } catch(error){
        if(error){
            return {iserror:true,message: error.message};

        }

    }
    
}

//Verify hash
async function VerifyHash(password,dbCode) {
    try{
        const isVerify= await bcrypt.compare(password,dbCode);
        if(!isVerify){
            throw new Error("Failed to verify......");
        }
        return isVerify;
    }
    catch(error){
        if(error){

        return {iserror:true,message: error.message};
        }
    }
    
}

module.exports={genHashData,VerifyHash}