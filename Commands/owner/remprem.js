module.exports = {
  name: "remprem",
  code: `
   $title[Remove Premium]
   $description[$customEmoji[correct] Successfully removed premium from $userTag[$findUser[$username[$mentioned[1]]]]]
   $color[RANDOM]
   $sendDM[$mentioned[1];Your premium has been Removed by $userTag[$findUser[$username[$authorID]]]\n **Reason:- $message**]
   $setGlobalUserVar[premium;;$mentioned[1]]
   $onlyForIDs[$botOwnerID;$customEmoji[caution] Ya Aint My Owner!]`
}