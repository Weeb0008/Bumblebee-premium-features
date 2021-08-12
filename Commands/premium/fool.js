module.exports = {
  
  name: "fool",
  aliases:"fl",
  code: `$title[Fooling $userTag[$findUser[$username[$mentioned[1]]]].]
$description[I have Sent $mentioned[1] a free ||FAKE|| nitro. XD.]
$color[RANDOM]
$sendDM[$mentioned[1];https://i.redd.it/xedy9ugkqo621.png]
$sendDM[$mentioned[1];You have been give an free nitro by a random guy!!]
$cooldown[1h;Hey, you need to wait %time% before you can Fool someone *grin *! Can't have you **playing the fool** all the time, right?]
$onlyIf[$getGlobalUserVar[premium;$authorID]==true;**$customEmoji[caution] You don't have premium**]

`
}

