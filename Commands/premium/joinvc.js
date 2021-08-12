module.exports = {

  name: "joinvc",
  aliases: "24/7",
  code: `$title[Join VC (24/7)]
$description[I have Joined <#$message[1]>.]
$argsCheck[1;To Use: \`$getServerVar[prefix]joinvc <voice channel id> \`]
$color[$random[0;999999]]
$joinVC[$message]
$onlyIf[$getGlobalUserVar[premium;$authorID]==true;**:thinking:You don't have premium**]


`
}
