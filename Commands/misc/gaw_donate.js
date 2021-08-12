module.exports = {
  
  name: "gaw_donate",
  aliases:"giveawaydonate",
  code: ` $title[Donate For Event!]
$description[Prize: **$message[1]**\n Time: **$message[2]**\n Winners: **$message[3]**\n Donor: <@$authorID>\n ]
$argsCheck[3;To Use: \`$getServerVar[prefix] gaw_donate <prize> <time> <winners>\`]$getServerVar[gawman], Someone is feeling Generous Today!
$color[$random[0;999999]]


`
}

 