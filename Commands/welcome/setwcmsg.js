module.exports = {
  
  name: "set-welcome-message",
  aliases:"set-wmsg",
  code: ` $title[Welcome Message]
$description[Welcome Message set!]
$footer[for more info on welcome messages go to: https://sites.google.com/view/bumblebee-discord/welcome-messages]
$setServerVar[joinmsg;$message;$guildID]
$color[$random[0;999999]]
$onlyPerms[admin;:x: You need ADMIN permissions]

`
}

 