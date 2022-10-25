/*CMD
  command: help-index.html
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🪧 Help
  answer: 
  keyboard: 
  aliases: 
CMD*/

<!-- it is html template. -->
<html>
   <head>
    <!-- // include app.css -->
    <link rel="stylesheet" href="<% options.CSSFile %> ">
   </head>
  <body>
     <h1>Hello from <a href="<% options.botLink%>"> <%bot.name%></a></h1>
     <!-- Just calc 2+2 -->
     2 + 2 = <% 2+2 %>
  </body>
</html>
