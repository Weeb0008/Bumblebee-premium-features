module.exports = {
  
  name: "leavevc",
  aliases:"leave",
  code: `$title[Leave VC]
$description[I have Left <#$message[1]>.]
$argsCheck[1;To Use: \`$getServerVar[prefix]leavevc <voice channel id> \`]
$color[$random[0;999999]]
$leaveVC[$message]
$onlyIf[$getGlobalUserVar[premium;$authorID]==true;**:thinking:You don't have premium**]`


}
