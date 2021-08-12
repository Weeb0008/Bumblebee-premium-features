module.exports = {
  name: "addprem",
  code: `
   $title[Premium]
   $description[$customEmoji[correct] Successfully gave premium to $userTag[$findUser[$username[$mentioned[1]]]]. Message:- *$message*]
   $color[RANDOM]
   $sendDM[$mentioned[1];You have been given premium by $userTag[$findUser[$username[$authorID]]] do **bee premium** to get the premium features!! **Message:- $message**]
   $setGlobalUserVar[premium;true;$mentioned[1]]
   $setVar[prem;$getVar[prem];$mentioned[1]]
   $onlyForIDs[$botOwnerID;$customEmoji[caution] You Aint my owner]
   
   `
}