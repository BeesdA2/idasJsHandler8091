const { handleO365 } = require("../../../O365MAIL-API/js/handleApiMail.js");

async function sendO365  (req, res)  {
 
 
 
  let mailnr = req.query.mailnr;
  var d = new Date();
  var datetime = d.toLocaleString(); 	
  console.log(datetime +' sendO365 mailnr: ' +mailnr);
    
  
   
 // res.send('Mollie wordt uitgevoerd ; setletter: ' +setletter + ' filiaal: '+ filiaal+ ' ordernr: '+ ordernr);
  var resolve =  await handleO365(mailnr);
  //res.send('handleO365  is uitgevoerd ; mailnr: ' +mailnr );
  
  return resolve;	
  
};

module.exports = {
  sendO365: sendO365
  };