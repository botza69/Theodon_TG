/*CMD
  command: 📦 My orders
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📦 Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

var orders = User.getProperty("orders", {})
if(!orders.list){
  Bot.sendMessage("*No orders*")
}
