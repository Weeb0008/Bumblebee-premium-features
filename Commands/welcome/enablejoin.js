module.exports = {
  
  name: "enable-join",
  aliases:"en-join-msg",
  code: `$title[Enabled Joined Message]
$description[Use \`bee setwcmsg\` to update the welcome message. **Note:**To understand this better, visit this page:  https://sites.google.com/view/bumblebee-discord/welcome-messages
$setServerVar[onjoin;true]
$onlyPerms[admin;:x: You need ADMIN permissions]
$color[$random[0;999999]]



`
}

 