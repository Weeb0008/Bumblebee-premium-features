module.exports = {
  
  name: "ghostdm",
  aliases:"gdm",
  code: `$title[Ghost DM ]
$description[I have DMed $message.]
$color[RANDOM]
$sendDM[$mentioned[1];$message]
$onlyIf[$getGlobalUserVar[premium;$authorID]==true;**$customEmoji[caution] You don't have premium**]
`
}

//cooldown:- $cooldown[1h;$customEmoji[caution] Hey, you need to wait %time% befory gou can ghostDM someone *grin *! Can't have you GhostDMing people all the time, right? $customEmoji[caution]]