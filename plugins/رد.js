
let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا بيك ي روحي 😍❤️*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
     ]; 
   }else if (/^بخير|بخير الحمد لله $/i.test(m.text)) { 
     responses = [ 
'*دايما يارب 💎🩵*'
     ]; 
 }else if (/^كداب|شرير$/i.test(m.text)) { 
     responses = [ 
'*وانت مال امك 😆*'
     ]; 
   }else if (/^مرتبط$/i.test(m.text)) { 
     responses = [ 
'*وانت مالك🙂*'
   ]; 
   }else if (/^بوت بتحبني؟|بوت بتحبنى$/i.test(m.text)) { 
     responses = [ 
'*اموت فيك 🌚❤️*',
'*اكرهك🙂💔*',
'*بعشقك 🤩❤️*',
]; 
   }else if (/^بوت بتكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*بدوب في عيونك 😂❤️*',
'*لا بموت فيكي 😍❤️*',
'*مش عارف 🙂*',   ]; 

     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هالوز ي قلبي 🤩❤️*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*بحبك اكتر🌚❤*',  

     ]; 
   }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
'هاي ي روحي معاك بوت الدسوقي ☕🌿https://whatsapp.com/channel/0029VacWb364dTnEKmVWd628'
     ]; 
   } else if (/^ملل$/i.test(m.text)) { 
     responses = [ 
'*عارف متزهقنيش🌚*'
     ]; 
     }else if (/^🌚|😉|🥹$/i.test(m.text)) { 
     responses = [ 
       '😘',  

     ];
     }else if (/^دايما|دايما يارب|يارب دايما$/i.test(m.text)) { 
     responses = [ 
       '🌚♥واياك ',  
       '🌚♥واياكى',
     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'هاي ي روحي ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​🌚❤️',  

     ];
     }else if (/^اتجوزنى|تجوزنى$/i.test(m.text)) { 
     responses = [ 
       '*هاتي بوسه 🫦*',
      '🌚♥موافق ',

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا♥*',  

     ]; 
     }else if (/^مسا|مساء|مثا$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير🌚',  

     ];
     }else if (/^صباحو|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد♥*',  
     ];
       }else if (/^يمتناك|كسمك|يخول|يعرص|يكسمك|خول|عرص|متناك$/i.test(m.text)) { 
     responses = [ 
       '*بس يطفل 🐼🖤*',
      '*هنيكك*',
      '*بتشتم مين ي ابن العرص نت اظبت لاجبلك الدسوقي ينيكك*',
      '*لم نفسك ي كسمك عشان هخلي الدسوقي ينيكك*',
      '*ي ابن العرص اسكت*',
     ];
            }else if (/^عامل اى|عامل ايه|عامله ايه$/i.test(m.text)) { 
     responses = [ 
       '*بخير*',  
     ];
            }else if (/^احا$/i.test(m.text)) { 
     responses = [ 
       '*احتين علي احتك 🥹*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
    
