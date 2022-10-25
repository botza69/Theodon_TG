/*CMD
  command: webExample
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🪧 Help
  answer: 
  keyboard: 
  aliases: 
CMD*/

// command index
var botLink = "http://t.me/" + bot.name;
var CSSFile = WebApp.getUrl({ command: "renderCSS" })

WebApp.render({
  template: "help-index.html",
  options: {
    botLink: botLink,
    CSSFile: CSSFile
  }
});
