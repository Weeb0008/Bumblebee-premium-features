module.exports = {
  
  name: "emergency",
  aliases:"em",
  code: ` 
$image[https://vacefron.nl/api/emergencymeeting?text=$message;emergency]
$onlyIf[$getGlobalUserVar[premium;$authorID]==true;**:thinking:You don't have premium**]
`
}

