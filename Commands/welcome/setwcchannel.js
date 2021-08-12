module.exports = {
  
  name: "set-welcomechannel",
  aliases:"set-wc",
  code: ` $title[Welcome Channel Set]
$description[Your new Welcome Channel is <#$message[1]>.]
$footer[for more info on welcome messages go to: https://sites.google.com/view/bumblebee-discord/welcome-messages]
$setServerVar[welcomechannel;$message[1];$guildID]
$argsCheck[1;To Use: \`$getServerVar[prefix]set-wc <channelID>\`]
$color[$random[0;999999]]
$onlyPerms[admin;:x: You need ADMIN permissions]

`
}

 