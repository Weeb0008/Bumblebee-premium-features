module.exports = {
  
  name: "minecraft",
  aliases:"mc",
  code: ` 
$image[https://api.cool-img-api.ml/achievement?text=$message;]
https://api.cool-img-api.ml/achievement?text=$message
$onlyIf[$getGlobalUserVar[premium;$authorID]==true;**:thinking:You don't have premium**]
`
}

