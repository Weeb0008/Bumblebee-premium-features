module.exports = {
  
  name: "eve_donate",
  aliases:"eventdonate",
  code: ` $title[Donate For Event!]
$description[Event: **$message[1]** \n Prize: **$message[2]**\n Donor:<@$authorID>]
$argsCheck[2;To Use: \`$getServerVar[prefix] eve_donate <event> <Prize>\`]$getServerVar[eveman], Someone is feeling Generous Today!
$color[$random[0;999999]]


`
}

 