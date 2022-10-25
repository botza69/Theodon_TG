/*CMD
  command: 💵 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📦 Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = User.getProperty("balance");
if(!balance){
  Bot.runCommand("/reset");
  balance = 100
}

Bot.sendMessage(
  "💵 Your balance: `" + balance + "`" +
  "\n\n /reset"
)
