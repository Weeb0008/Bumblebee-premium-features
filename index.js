var dbd = require("aoi.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: process.env.token,
prefix: "$getServerVar[prefix]"
})
 
//bot status
bot.status({
  text: "Bumblebee Mod OP",
  type: "PLAYING",//PLAYING||COMPETEING||WATCHING||LISTENING
  time: 12
})
 
bot.onMessage()

//variable
bot.variables({
 prefix: "bee ",//Your Prefix
 gawman:"",
 eveman:"",
 premium:"",
 prem:"",
 welcomechannel:"",
 onjoin:"",
 joinmsg:"Welcome to The server!"
 //dont change this!!

})
  
 //commands handler
bot.loadCommands(`./Commands/`)

bot.joinCommand({ 
channel: "$getServerVar[welcomechannel]", 
code: `
$onlyIf[$getServerVar[onjoin]==;Hey,<@$authorID>! $getServerVar[joinmsg]]

`
/*
Code Breakdown
$serverName - The name of the server the user joined
$username - The user who joined the server
*/
}) 

bot.onJoined()