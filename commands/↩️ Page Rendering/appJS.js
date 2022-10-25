/*CMD
  command: appJS
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ↩️ Page Rendering
  answer: 
  keyboard: 
  aliases: 
CMD*/

// secure user url
var userUrl = WebApp.getUrl({ command: "user.json" })

WebApp.render({
  template: "app.js",
  options: { userUrl: userUrl }
})
