import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './Menu.png'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/.')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `مرحبا بك/ي معاك/ي 𓀽 𝐸𝐿_𝐷𝐸𝑺𝑂𝐾𝐸𝐼𝑌 𖤍 𝐵𝑂𝑇 𓀽
𓀽 ⋅ ───━ •﹝☕🌿﹞• ━─── ⋅ 𓀽
قسم الجروبات ☕🌿
𓀽 ⋅ ───━ •﹝☕🌿﹞• ━─── ⋅ 𓀽
𓀽 𝐸𝐿_𝐷𝐸𝑺𝑂𝐾𝐸𝐼𝑌 𖤍 𝐵𝑂𝑇 𓀽
𓀽 ⋅ ───━ •﹝☕🌿﹞• ————— ⋅ 𓀽
𖤍 ضيف 𖤍
𖤍 الاشباح 𖤍
𖤍 طرد 𖤍
𖤍 منشن 𖤍
𖤍 ترقية 𖤍
𖤍 اعفا 𖤍
𖤍 انذار 𖤍
𖤍 حذف_انذار 𖤍
𖤍 حذف 𖤍
𖤍 منشن 𖤍
𖤍 عملات 𖤍
𖤍 مخفي 𖤍
𖤍 المشرفين 𖤍
𖤍 لمنشن 𖤍
𖤍 بروفايل 𖤍
𖤍 الجروب 𖤍
𖤍 دعوه 𖤍
𖤍 تغيير_اللينك 𖤍
𖤍 لفل 𖤍
𖤍 جروب 𖤍
𖤍 الترحيب 𖤍
𖤍 المغادره 𖤍
𖤍 جروب قفل و فتح 𖤍
𖤍 خط 𖤍
𖤍 توب 𖤍
𖤍 لينك 𖤍
𖤍 يومي 𖤍
𖤍 الماس 𖤍
𖤍 ترتيب_البنك 𖤍
𖤍 شراء 𖤍
𖤍 هجوم 𖤍
𓀽 ⋅ ───━ •﹝☕🌿﹞• ━─── ⋅ 𓀽
قسم الدين الاسلامي 🕋
𓀽 ⋅ ───━ •﹝☕🌿 ﹞• ━─── ⋅ 𓀽
𖤍 سورة 𖤍
𖤍 حديث 𖤍
𖤍 قران 𖤍
𖤍 الله 𖤍
𖤍 ايات 𖤍
𖤍 ⋅ ───━ •﹝☕🌿﹞• ━─── ⋅ 𖤍
قسم الترفيه 🕹
𖤍 ⋅ ───━ •﹝☕🌿﹞• ━─── ⋅ 𖤍
𖤍 اكس او 𖤍
𖤍 كت 𖤍
𖤍 صراحه 𖤍
𖤍 ذكاء 𖤍
𖤍 غباء 𖤍
𖤍 جمال 𖤍
𖤍 الحب 𖤍
𖤍 لو 𖤍
𖤍 هل 𖤍
𖤍 ترجم 𖤍
𖤍 تفكيك 𖤍
𖤍 ميمز 𖤍
𖤍 دمج 𖤍
𖤍 زواج 𖤍
𖤍 انطق 𖤍
𖤍 علم 𖤍
𖤍 تاج 𖤍
𖤍 حكمه 𖤍
𖤍 ميمز 𖤍
𖤍 سوال 𖤍
𓀽 ⋅ ───━ •﹝☕🌿﹞• ━─── ⋅ 𓀽
قسم التنزيلات 🛡
𓀽 ⋅ ───━ •﹝☕🌿﹞• ━─── ⋅ 𓀽
𖤍 انستغرام 𖤍
𖤍 جوجل 𖤍
𖤍 لريك 𖤍
𖤍 ويكيبيديا 𖤍
𖤍 انستا 𖤍
𖤍 اسم_الاغنية 𖤍
𖤍 فيس 𖤍
𖤍 بين 𖤍
𖤍 ميديافاير 𖤍
𖤍 شغل 𖤍
𖤍 تيكتوك 𖤍
𖤍 تويتر 𖤍
𖤍 اغنية 𖤍
𖤍 بحث 𖤍
𖤍 فيديو 𖤍
𖤍 تطبيق 𖤍
𖤍 صوره 𖤍
𖤍 2صوره 𖤍
𓀽 ⋅ ───━ •﹝☕🌿﹞• ━─── ⋅ 𓀽
قسم التحويلات 🌀
𓀽 ⋅ ───━ •﹝☕🌿﹞• ━─── ⋅ 𓀽
𖤍 ملصق 𖤍
𖤍 سرقة 𖤍
𖤍 لفيديو 𖤍
𖤍 لصورة 𖤍
𖤍 دائري 𖤍
𖤍 لرابط 𖤍
𖤍 لانمي 𖤍
𖤍 تخيل 𖤍
𖤍 مكس 𖤍
𖤍 لجواهر 𖤍
𖤍 ستك 𖤍
𖤍 تلجراف 𖤍
𖤍 لكرتون 𖤍
𖤍 باركود 𖤍
𓀽  ⋅ ───━ •﹝☕🌿﹞• ━─── ⋅ 𓀽
قسم المطور ☕🌿 
𓀽  ⋅ ───━ •﹝☕🌿﹞• ━─── ⋅ 𓀽
𖤍 ضيف_بريميام 𖤍
𖤍 حذف_بريميام 𖤍
𖤍 الحاله 𖤍
𖤍 ريستارت 𖤍
𖤍 بان 𖤍
𖤍 الغاء_البان 𖤍
𖤍 اطفاء 𖤍
𖤍 تفعيل 𖤍
𖤍 المبندين 𖤍
𖤍 إعادة 𖤍
𖤍 اعادة_تشغيل 𖤍
𖤍 أدخل 𖤍
𖤍 ضيف_اكس_بي 𖤍
𖤍 ضيف_جواهر 𖤍
𓀽 ⋅ ───━ •﹝☕🌿﹞• ━─── ⋅ 𓀽
قسم الصوتيات 🎧
𓀽 ⋅ ───━ •﹝☕🌿﹞• ━─── ⋅ 𓀽
𖤍 عميق 𖤍
𖤍 منفوخ 𖤍
𖤍 تخين 𖤍
𖤍 صاخب 𖤍
𖤍 سريع 𖤍
𖤍 تخينن 𖤍
𖤍 رفيع 𖤍
𖤍 روبوت 𖤍
𖤍 بطيء 𖤍
𖤍 ناعم 𖤍
𖤍 سنجاب 𖤍
𓀽 ⋅ ───━ •﹝☕🌿﹞• ━─── ⋅ 𓀽
𓀽 𝐸𝐿_𝐷𝐸𝑺𝑂𝐾𝐸𝐼𝑌 𖤍 𝐵𝑂𝑇 𓀽
𓀽 ⋅ ───━ •﹝☕🌿﹞• ━─── ⋅ 𓀽

`.trim()
   const _0x3c7cab = _0x5a1d;

        function _0x5a1d(_0x1b92fa, _0x42ca62) {
            const _0x5a1d39 = _0x42ca();
            _0x5a1d = function (_0x28d0f5, _0x342e36) {
                _0x28d0f5 = _0x28d0f5 - 0x0;
                let _0x4abc25 = _0x5a1d39[_0x28d0f5];
                return _0x4abc25;
            };
            return _0x5a1d(_0x1b92fa, _0x42ca62);
        }

        function _0x42ca() {
            const _0xe1e20e = ['2409147cMTtvV', '70SxKSwY', 'trim', '2708027tOnEUS', '831853GQAjyu', '6ZrUjVF', '⁨𝐸𝐿_𝐷𝐸𝑺𝑂𝐾𝐸𝐼𝑌👑', '406070MLYaeB', 'https://whatsapp.com/channel/0029VacWb364dTnEKmVWd628', '4YbGMkZ', '840496IPJeXP', '322835aPaRGc', 'VIDEO', '3639410cLSfPv', 'sender', '9LtUyCF'];
            _0x42ca = function () {
                return _0xe1e20e;
            };
            return _0x42ca();
        }(function (_0x2979d9, _0x233f8f) {
            const _0x32315e = _0x5a1d;
            const _0x3b1890 = _0x2979d9();
            while (!![]) {
                try {
                    const _0x2cc4d6 = parseInt(_0x32315e(0x5)) / 0x1 + parseInt(_0x32315e(0x1)) / 0x2 + -parseInt(_0x32315e(0xa)) / 0x3 * (parseInt(_0x32315e(0x3)) / 0x4) + parseInt(_0x32315e(0x7)) / 0x5 + -parseInt(_0x32315e(0xf)) / 0x6 * (parseInt(_0x32315e(0xd)) / 0x7) + parseInt(_0x32315e(0x4)) / 0x8 * (-parseInt(_0x32315e(0x9)) / 0x9) + -parseInt(_0x32315e(0xb)) / 0xa * (-parseInt(_0x32315e(0xe)) / 0xb);
                    if (_0x2cc4d6 === _0x233f8f) {
                        break;
                    } else {
                        _0x3b1890['push'](_0x3b1890['shift']());
                    }
                } catch (_0x3284ad) {
                    _0x3b1890['push'](_0x3b1890['shift']());
                }
            }
        }(_0x42ca, 0x772cd));
        let buttonMessage = {
            'image': pp,
            'caption': str[_0x3c7cab(0xc)](),
            'mentions': [m[_0x3c7cab(0x8)]],
            'footer': '' + wm,
            'headerType': 0x4,
            'contextInfo': {
                'mentionedJid': [m['sender']],
                'externalAdReply': {
                    'showAdAttribution': !![],
                    'mediaType': _0x3c7cab(0x6),
                    'mediaUrl': null,
                    'title': _0x3c7cab(0x0),
                    'body': null,
                    'thumbnail': img,
                    'sourceUrl': _0x3c7cab(0x2)
                }
            }
        };
        conn.sendMessage(m.chat, buttonMessage, {
            quoted: m
        })

    } catch {
        conn.reply(m.chat, '[❗خطاء❗]', m)
    }
}
handler.command = /^(اوامر|mwnu|الاوامر|مهام|المهام)$/i
handler.exp = 20
handler.fail = null
export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
