
let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^دسوقي$/i.test(m.text)) { 
     responses = [ 
 '*الدسوقي ده واد عسل و سكر وفشيخ ونا بحبو فشخ لانو شب فشيخ 🤩❤️*'  
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
'*اكيد مظلوم 😩❤️‍🔥*'
     ]; 
   }else if (/^مرتبط$/i.test(m.text)) { 
     responses = [ 
'*وانت مالك🙂*'
   ]; 
   }else if (/^بوت بتحبني؟|بتحبني؟$/i.test(m.text)) { 
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
'هاي ي روحي معاك بوت الدسوقي ☕🌿'
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
     }else if (/^تتجوزنى؟|تع نتجوز|نرتبط|تع نرتبط$/i.test(m.text)) { 
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
       }else if (/^يمتناك|كسمك|يخول|يعرص|يكسمك|خول|عرص|متناك|ي بن الشرموطه |يبن الشرموطه |شرموطه|يبن الزانيه|زانيه|ي كس |ي ابن المومس|كسم اي حد|كسم|معرصين|متناكين|خولات$/i.test(m.text)) { 
     responses = [ 
       '*بس يطفل 🐼🖤*',
      '*نا شيخ وبقلك بطل شتيمه 👳🏻‍♂️📿*',
      '*بءل شتيمه انا بحبك ف الله 👳🏻‍♂️📿*',
      '*لم نفسك ي اخي ما  هذا 👳🏻‍♂️📿*',
      '*اهدا يسطا معنا بنات ف الروم 👳🏻‍♂️📿*',
      '*ي اخي في الله بطل شتيمه 👳🏻‍♂️📿*',
      '*ما هو العيب مش عليك العيب علي العرص الي جابك وقال انو جاب راجل وهو جاب عرص زيو 😁*',
      '*اهتقول ايه ل ربنا يوم القيامه كنت بضحم بهزر و بشتم 🙂*',
      '*مش هتنفعك الشتيمه اسمع مني انا شيخ 👳🏻‍♂️📿*',
      '*توب الي الله ي حبيبي خليك زي شيخ 👳🏻‍♂️📿*',
      '*مش هشتمك لاجل اني شيه جامع 👳🏻‍♂️📿*',
      '*صلي علي النبي ي حب 👳🏻‍♂️📿*',
      
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
    
