var _0x2ab24a=_0x566c;(function(_0x13ac1f,_0x5c20a7){var _0x4da744=_0x566c,_0x240c40=_0x13ac1f();while(!![]){try{var _0x1ce556=-parseInt(_0x4da744(0x124))/0x1+parseInt(_0x4da744(0x14a))/0x2*(-parseInt(_0x4da744(0x149))/0x3)+parseInt(_0x4da744(0x14b))/0x4+parseInt(_0x4da744(0x137))/0x5*(-parseInt(_0x4da744(0x139))/0x6)+-parseInt(_0x4da744(0x147))/0x7+parseInt(_0x4da744(0x129))/0x8*(-parseInt(_0x4da744(0x127))/0x9)+parseInt(_0x4da744(0x145))/0xa;if(_0x1ce556===_0x5c20a7)break;else _0x240c40['push'](_0x240c40['shift']());}catch(_0x6e2698){_0x240c40['push'](_0x240c40['shift']());}}}(_0x81b6,0xebd50));let {saveMessage}=require('./misc/saveMessage');function _0x81b6(){var _0x3b5d6f=['365031Jmewba','quotedMessage','public','2745UfcBEu','audio/mp4','36688CiwrDn','mp4\x20?(.*)','../main','client','reply_message','https://github.com/Afx-Abu/Abu-MD/','./misc/misc','MP3_DESC','_Reply\x20to\x20an\x20audio\x20or\x20a\x20sticker_','_Reply\x20to\x20an\x20animated\x20sticker!_','abu-bot','jid','/apps/','split','100oDiDbY','sticker','40974TazTmq','../config','quoted','APP_NAME','sendReply','take\x20?(.*)','sendMessage','Abu\x20Engine','audio','readFileSync','Converts\x20animated\x20sticker\x20to\x20video','edit','39510690tpNeNz','mp3\x20?(.*)','6456401lkZrkt','Changes\x20sticker/audio\x20pack\x20&\x20author\x20name.\x20Title,\x20artist,\x20thumbnail\x20etc.','3tNPzxW','656876OcwpRh','664084vvgcGJ','data','includes'];_0x81b6=function(){return _0x3b5d6f;};return _0x81b6();}function _0x566c(_0x1dbd51,_0x5a822e){var _0x81b6a2=_0x81b6();return _0x566c=function(_0x566c2e,_0x214827){_0x566c2e=_0x566c2e-0x122;var _0x3d8e4d=_0x81b6a2[_0x566c2e];return _0x3d8e4d;},_0x566c(_0x1dbd51,_0x5a822e);}const {sticker,addExif}=require(_0x2ab24a(0x12f));let {Module}=require(_0x2ab24a(0x12b)),{TAKE_KEY,STICKER_DATA,MODE,HEROKU,AUDIO_DATA,BOT_INFO}=require(_0x2ab24a(0x13a));const {getString}=require('./misc/lang'),Lang=getString('converters');let {addInfo,getBuffer,stickercrop,webp2mp4}=require(_0x2ab24a(0x133)),a=MODE==_0x2ab24a(0x126)?![]:!![],ffmpeg=require('fluent-ffmpeg'),fs=require('fs');const h=require('heroku-client'),he=new h({'token':HEROKU['API_KEY']});let ur=_0x2ab24a(0x135)+HEROKU[_0x2ab24a(0x13c)];Module({'pattern':_0x2ab24a(0x13e),'fromMe':a,'use':_0x2ab24a(0x144),'desc':_0x2ab24a(0x148)},async(_0x113158,_0x33f9c3)=>{var _0x5e83d0=_0x2ab24a;if(!_0x113158[_0x5e83d0(0x12d)][_0x5e83d0(0x122)][_0x5e83d0(0x125)])return await _0x113158[_0x5e83d0(0x13f)](_0x5e83d0(0x131));var _0xb2e8a7=_0x113158['reply_message']['audio'],_0x2af65e=_0x113158[_0x5e83d0(0x12d)]['sticker'],_0x4da130=await saveMessage(_0x113158[_0x5e83d0(0x12d)]);if(_0x2af65e){if(_0x33f9c3[0x1]!=='')var _0x1f47f9={'author':_0x33f9c3[0x1][_0x5e83d0(0x123)](';')?_0x33f9c3[0x1]['split'](';')[0x1]:'','packname':_0x33f9c3[0x1][_0x5e83d0(0x123)](';')?_0x33f9c3[0x1]['split'](';')[0x0]:_0x33f9c3[0x1],'categories':STICKER_DATA[_0x5e83d0(0x136)](';')[0x2]||'😂','android':_0x5e83d0(0x12e),'ios':_0x5e83d0(0x12e)};else var _0x1f47f9={'author':STICKER_DATA[_0x5e83d0(0x136)](';')[0x1]||'','packname':STICKER_DATA[_0x5e83d0(0x136)](';')[0x0]||'','categories':STICKER_DATA[_0x5e83d0(0x136)](';')[0x2]||'😂','android':_0x5e83d0(0x12e),'ios':_0x5e83d0(0x12e)};return await _0x113158[_0x5e83d0(0x12c)][_0x5e83d0(0x13f)](_0x113158[_0x5e83d0(0x134)],{'sticker':fs[_0x5e83d0(0x142)](await addExif(_0x4da130,_0x1f47f9))},{'quoted':_0x113158[_0x5e83d0(0x13b)]});}if(!_0x2af65e&&_0xb2e8a7){let _0x176a10=_0x33f9c3[0x1]!==''?_0x33f9c3[0x1]:AUDIO_DATA;var _0x3c79fb=_0x176a10[_0x5e83d0(0x136)](';'),_0xafce4=_0x3c79fb[0x2]?await getBuffer(_0x3c79fb[0x2]):BOT_INFO[_0x5e83d0(0x136)](';')[0x3],_0x35081a=await addInfo(_0x4da130,_0x3c79fb[0x0],_0x3c79fb[0x1]?_0x3c79fb[0x1]:AUDIO_DATA[_0x5e83d0(0x136)](';')[0x1],_0x5e83d0(0x140),_0xafce4);await _0x113158['client']['sendMessage'](_0x113158['jid'],{'audio':_0x35081a,'mimetype':_0x5e83d0(0x128)},{'quoted':_0x113158[_0x5e83d0(0x13b)],'ptt':![]});}if(!_0xb2e8a7&&!_0x2af65e)return await _0x113158[_0x5e83d0(0x12c)][_0x5e83d0(0x13f)](_0x113158[_0x5e83d0(0x134)],{'text':'_Reply\x20to\x20an\x20audio\x20or\x20a\x20sticker_'},{'quoted':_0x113158[_0x5e83d0(0x122)]});}),Module({'pattern':_0x2ab24a(0x146),'fromMe':a,'use':'edit','desc':Lang[_0x2ab24a(0x130)]},async(_0x1e81cf,_0x3fa622)=>{var _0x12c08e=_0x2ab24a;if(!_0x1e81cf[_0x12c08e(0x12d)][_0x12c08e(0x122)][_0x12c08e(0x125)])return await _0x1e81cf[_0x12c08e(0x13f)]('_Reply\x20to\x20an\x20audio\x20or\x20a\x20sticker_');var _0x40b1ec=_0x1e81cf[_0x12c08e(0x12d)][_0x12c08e(0x141)],_0x184dd4=_0x1e81cf[_0x12c08e(0x12d)][_0x12c08e(0x138)],_0x113700=await saveMessage(_0x1e81cf[_0x12c08e(0x12d)]);if(_0x184dd4){if(_0x3fa622[0x1]!=='')var _0x11a161={'author':_0x3fa622[0x1][_0x12c08e(0x123)](';')?_0x3fa622[0x1][_0x12c08e(0x136)](';')[0x1]:'','packname':_0x3fa622[0x1][_0x12c08e(0x123)](';')?_0x3fa622[0x1][_0x12c08e(0x136)](';')[0x0]:_0x3fa622[0x1],'categories':STICKER_DATA['split'](';')[0x2]||'😂','android':_0x12c08e(0x12e),'ios':_0x12c08e(0x12e)};else var _0x11a161={'author':STICKER_DATA['split'](';')[0x1]||'','packname':STICKER_DATA[_0x12c08e(0x136)](';')[0x0]||'','categories':STICKER_DATA['split'](';')[0x2]||'😂','android':_0x12c08e(0x12e),'ios':_0x12c08e(0x12e)};return await _0x1e81cf[_0x12c08e(0x12c)][_0x12c08e(0x13f)](_0x1e81cf[_0x12c08e(0x134)],{'sticker':fs[_0x12c08e(0x142)](await addExif(_0x113700,_0x11a161))},{'quoted':_0x1e81cf[_0x12c08e(0x13b)]});}if(!_0x184dd4&&_0x40b1ec){let _0x119c42=_0x3fa622[0x1]!==''?_0x3fa622[0x1]:AUDIO_DATA;var _0x56dad7=_0x119c42[_0x12c08e(0x136)](';'),_0x16e075=_0x56dad7[0x2]?await getBuffer(_0x56dad7[0x2]):BOT_INFO[_0x12c08e(0x136)](';')[0x3],_0x3138e7=await addInfo(_0x113700,_0x56dad7[0x0],_0x56dad7[0x1]?_0x56dad7[0x1]:AUDIO_DATA['split'](';')[0x1],'Abu\x20Engine',_0x16e075);await _0x1e81cf[_0x12c08e(0x12c)]['sendMessage'](_0x1e81cf[_0x12c08e(0x134)],{'audio':_0x3138e7,'mimetype':_0x12c08e(0x128)},{'quoted':_0x1e81cf['quoted'],'ptt':![]});}if(!_0x40b1ec&&!_0x184dd4)return await _0x1e81cf[_0x12c08e(0x12c)][_0x12c08e(0x13f)](_0x1e81cf[_0x12c08e(0x134)],{'text':_0x12c08e(0x131)},{'quoted':_0x1e81cf[_0x12c08e(0x122)]});}),Module({'pattern':_0x2ab24a(0x12a),'fromMe':a,'desc':_0x2ab24a(0x143)},async(_0x799f26,_0x1348a1)=>{var _0x3ebeae=_0x2ab24a;if(_0x799f26['reply_message'][_0x3ebeae(0x138)]){var _0x5ccca8=await saveMessage(_0x799f26[_0x3ebeae(0x12d)]);try{var _0x176622=await webp2mp4(_0x5ccca8);}catch{return await _0x799f26[_0x3ebeae(0x13d)]('*Failed*');}await _0x799f26[_0x3ebeae(0x12c)][_0x3ebeae(0x13f)](_0x799f26['jid'],{'video':{'url':_0x176622}},{'quoted':_0x799f26[_0x3ebeae(0x13b)]});}else return await _0x799f26[_0x3ebeae(0x13d)](_0x3ebeae(0x132));});
