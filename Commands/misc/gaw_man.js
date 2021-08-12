module.exports = {
  
  name: "set_gwm",
  aliases:"set_gawmanager",
  code: `$title[Giveaway Manager Role]
$description[The new Giveaway Manager role is <@&$message>.]
$setServerVar[gawman;<@&$message>]
$argsCheck[1;To Use: \`$getServerVar[prefix]set_gwm <giveaway manager role id> \`]
$color[$random[0;999999]]
$onlyPerms[admin;:x: You need ADMIN permissions]



`
}

 