module.exports = {
  
  name: "rickroll",
  aliases:"rr",
  code: `$title[Rickrolling $mentioned[1].]
$description[I have Sent $userTag[$findUser[$username[$mentioned[1]]]] a free ||RICKRoll|| nitro. XD.]
$color[RANDOM]
$sendDM[$mentioned[1];https://discordgift.site/xNwryVvOkKtKBDxZ]
$sendDM[$mentioned[1];You have been give an free nitro by **someone**!!]
$onlyIf[$getGlobalUserVar[premium;$authorID]==true;**$customEmoji[caution] You don't have premium**]

`}
//cooldown:- $cooldown[1h;$customEmoji[caution] Hey, you need to wait %time% before you can Rickroll someone *grin *! Can't have you **giving the video so many views** all the time, right? $customEmoji[caution]]