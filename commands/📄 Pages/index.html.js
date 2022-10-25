/*CMD
  command: index.html
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📄 Pages
  answer: 
  keyboard: 
  aliases: 
CMD*/

<!--// It is HTML template not BJS -->
<!--//    ... and it is html/js comment -->

<!--
    // you can pass BJS vars with tag: <% %>
    //   E.g: 
    //      <% bot.name %>
    //   or:
    //      <% 2+2 %>
-->

<html>
  <head>
    <!-- // include app.css -->
    <link rel="stylesheet"
       href="<% options.links.appCSS %> ">

     <!-- // include VueJS -->
     <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
     <script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.3"></script>
  </head>


  <body >
    <div id="app">
      <div id="usercard">
        <h1>{{ user.first_name }} {{ user.last_name }}</h1>
        {{ user.username }} ({{user.language_code}})
      </div>
      <h2>
        Welcome to <% bot.name %>
      </h2>
      <p class="hint">
        {{ answer }}
      </p>
      
      <h3>Main Button</h3>
      <button class="button" v-on:click="showButton()">Show/Hide </button>
      <button class="button" v-on:click="sendData()">Send Data </button>
    </div>
  </body>


  <!-- // include telegram web app js -->
  <script src="https://telegram.org/js/telegram-web-app.js"></script>
  
  <!-- // include app.js -->
  <script
      type="text/javascript"
      src="<% options.links.appJS %>"
   >
  </script>
  

  
</html>
