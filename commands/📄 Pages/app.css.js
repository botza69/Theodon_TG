/*CMD
  command: app.css
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 📄 Pages
  answer: 
  keyboard: 
  aliases: 
CMD*/

/* It is CSS file not BJS */

body{
   color: var(--tg-theme-text-color);
   background: var(--tg-theme-bg-color);
   display: flex;
   flex-direction: column;
   align-items: center;
   font-size: 18px;
}

.hint{
   color: var(--tg-theme-hint-color);
}

.link{
   color: var(--tg-theme-link-color);
}

.button{
   background: var(--tg-theme-button-color);
   color: var(--tg-theme-button-text-color);
   border: none;
   font-size: 18px;
}

.button:not(:last-child){
   margin-bottom: 20px
}

#usercard{
   text-align: center;
}


