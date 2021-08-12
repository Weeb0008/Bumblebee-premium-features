module.exports = {
  
  name: "set_evm",
  aliases:"set_eventmanager",
  code: `$title[Event Manager Role]
$description[The new event manager role is <@&$message>.]
$setServerVar[eveman;<@&$message>]
$argsCheck[1;To Use: \`$getServerVar[prefix]set_evm <event manager role id> \`]
$color[$random[0;999999]]
$onlyPerms[admin;:x: You need ADMIN permissions]


`
}

 