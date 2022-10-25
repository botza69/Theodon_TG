/*CMD
  command: /reset
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("balance", 100)
User.setProperty("orders", {} )

Bot.runCommand("💵 Balance")
