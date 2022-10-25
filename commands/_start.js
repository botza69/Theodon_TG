/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🤑 order
CMD*/

var url = WebApp.getUrl({ command: "index" })

// it is exaple of Help article
var webExample = WebApp.getUrl({ command: "webExample" })

Api.sendMessage({
  text:
    "🤑 Try demo ordering in Web App or page from help." +
    "\n\nYou can also get URL for setup in @BotFather - use /getUrl ",
  reply_markup: {
    inline_keyboard: [
      [
        // open the any web page on button pressing
        { text: "open App", web_app: { url: url } }
      ],
      [
        // open the any web page on button pressing
        { text: "open Demo Page (from help)", web_app: { url: webExample } }
      ]
    ]
  }
})

Api.sendMessage({
  text: "It is example for BB Web App",

  reply_markup: {
    resize_keyboard: true,
    keyboard: [
      // line 1
      [
        { text: "💵 Balance" },
        { text: "📦 My orders" }
      ],
      // line 2
      [
        { text: "🤑 Order" },
        { text: "Open App", web_app: { url: url } }
      ]
    ]
  }
})

