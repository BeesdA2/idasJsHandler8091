const { handleOauthValidate } = require("../../../../Productie/oauthIdas/js/oauthValidate.js");

async function consumeOauthValidate  (req, res)  {
  
  let setletter  = req.query.setletter;
  let idasuser   = req.query.idasuser;
  let applicatie = req.query.applicatie;
 
  var d = new Date();
  var datetime = d.toLocaleString(); 	
  console.log(datetime +' consumeOauthValidate setletter: ' +setletter + ' idasuser: ' + idasuser +' applicatie: ' + applicatie ); 
  
   
  var resolve =  await handleOauthValidate(setletter, idasuser, applicatie);
  
  return resolve;	
  
};

module.exports = {
  consumeOauthValidate: consumeOauthValidate
  };