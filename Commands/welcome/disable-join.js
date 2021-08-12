module.exports = {
  
  name: "disable-join",
  aliases:"ds-join",
  code: `$title[Disabled Joined Message]
$description[Use bee \`en-join-msg\` to enable join messages again!]
$setServerVar[onjoin;]
$onlyPerms[admin;:x: You need ADMIN permissions]
$color[$random[0;999999]]



`
}

 