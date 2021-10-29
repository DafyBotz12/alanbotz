exports.menu = (prefix, i) => {
    return `*𝑫𝒂𝒇𝒚乂𝑾𝑰𝑩𝑼𝑺𝑶𝑭𝑻*
`
}

exports.newMenu = (ucapan, ownerName, botName, prefix, pendaftar, runtime, pushname, isOwner, isPremium, sisalimit, limitCount, glimit, gcount, expired, tanggal, jam) => {
    return `${ucapan.data.result} ${pushname}
╒═══ 《 *${botName}* 》 ═══
├────────────────────
├≽ *Creator : ${ownerName}*
├≽ *Lib : Baileys V.3.5.1*
├≽ *Prefix : 「 ${prefix} 」*
├≽ *Total Fitur : 200+*
├≽ *Total Pengguna : ${pendaftar.length}*
├≽ *Tanggal : ${tanggal}*
├≽ *Pukul : ${jam}*
├≽ *Runtime Bot*
├≽ *${runtime}*
├────────────────────
╞═══ 《 *USER INFO* 》 ═══
├────────────────────
├≽ *Name* : *${pushname}*
├≽ *Status* : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Gratisan'}*
├≽ *Limit* : *${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
├≽ *Limit Game* : *${isOwner ? 'Unlimited' : `${glimit}/${gcount}`}*
├≽ *Expired Prem : ${isOwner ? '-' : isPremium ? expired : 'Not Premium'}*
├────────────────────
╞═══ 《 *MENU* 》 ═══
├────────────────────
├≽ *${prefix}stickermenu*
├≽ *${prefix}creatormenu*
├≽ *${prefix}groupmenu*
├≽ *${prefix}sistemmenu*
├≽ *${prefix}gabutmenu*
├≽ *${prefix}gamemenu*
├≽ *${prefix}downloadmenu*
├≽ *${prefix}searchmenu*
├≽ *${prefix}stalkmenu*
├≽ *${prefix}randommenu*
├≽ *${prefix}animemenu*
├≽ *${prefix}nsfwmenu*
├≽ *${prefix}toolsmenu*
├≽ *${prefix}makermenu*
├≽ *${prefix}storagemenu*
├≽ *${prefix}othermenu*
├────────────────────
╞═══ 《 *THANKS TO* 》 ═══
├────────────────────
├≽ *𝑫𝒂𝒇𝒚乂𝑾𝑰𝑩𝑼𝑺𝑶𝑭𝑻*
├≽ *𝑫𝒊𝒐*
├≽ *𝑪𝒉𝒂𝒍𝒊𝒔𝒕𝒂*
├≽ *𝑵𝒆𝒓𝒊𝒏𝒂*
├≽ *𝑨𝒏𝒅𝒓𝒆*
├≽ *𝑹𝒊𝒛𝒌𝒚*
├≽ *𝑲𝒆𝒏𝒛𝒐*
├≽ *𝑩𝒊𝒍𝒍𝒚*
├≽ *𝑲𝒂𝒓𝒊𝒏𝒂*
╘═══ 《 *𝑩𝒚 ${ownerName}* 》 ═══`
}

exports.stickerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STICKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}sticker*
├≽ *${prefix}stickergif*
├≽ *${prefix}swm*
├≽ *${prefix}take*
├≽ *${prefix}toimg*
├≽ *${prefix}tovideo*
├≽ *${prefix}attp*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.ownerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *CREATOR MENU* 》 ═══
├────────────────────
├≽ *${prefix}addprem*
├≽ *${prefix}delprem*
├≽ *${prefix}ban*
├≽ *${prefix}unban*
├≽ *${prefix}join*
├≽ *${prefix}addbaword*
├≽ *${prefix}delbaword*
├≽ *${prefix}addchangelog*
├≽ *${prefix}public*
├≽ *${prefix}self*
├≽ *${prefix}exif*
├≽ *${prefix}bc*
├≽ *${prefix}setprefix*
├≽ *${prefix}setthumb*
├≽ *${prefix}clearall*
├≽ *${prefix}>*
├≽ *${prefix}$*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.groupMenu = (prefix, ownerName) => {
    return `╒═══ 《 *GROUP MENU* 》 ═══
├────────────────────
├≽ *${prefix}afk*
├≽ *${prefix}infogrup*
├≽ *${prefix}add*
├≽ *${prefix}kick*
├≽ *${prefix}promote*
├≽ *${prefix}demote*
├≽ *${prefix}linkgc*
├≽ *${prefix}leave*
├≽ *${prefix}setdesc*
├≽ *${prefix}setgrupname*
├≽ *${prefix}setppgrup*
├≽ *${prefix}opengrup*
├≽ *${prefix}closegrup*
├≽ *${prefix}tagall*
├≽ *${prefix}tagme*
├≽ *${prefix}kontak*
├≽ *${prefix}hidetag*
├≽ *${prefix}getpp*
├≽ *${prefix}mute*
├≽ *${prefix}unmute*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.sistemMenu = (prefix, ownerName) => {
    return `╒═══ 《 *SISTEM MENU* 》 ═══
├────────────────────
├≽ *${prefix}antilink*
├≽ *${prefix}antiwame*
├≽ *${prefix}antibadword*
├≽ *${prefix}welcome*
├≽ *${prefix}left*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.gabutMenu = (prefix, ownerName) => {
    return `╒═══ 《 *GABUTZ MENU* 》 ═══
├────────────────────
├≽ *${prefix}apakah*
├≽ *${prefix}bisakah*
├≽ *${prefix}kapankah*
├≽ *${prefix}hobby*
├≽ *${prefix}rate*
├≽ *${prefix}cekbapak*
├≽ *${prefix}seberapagay*
├≽ *${prefix}truth*
├≽ *${prefix}dare*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.gameMenu = (prefix, ownerName) => {
    return `╒═══ 《 *GAME MENU* 》 ═══
├────────────────────
├≽ *${prefix}tictactoe*
├≽ *${prefix}delttt*
├≽ *${prefix}tebakgambar*
├≽ *${prefix}family100*
├≽ *${prefix}suit*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.downloadMenu = (prefix, ownerName) => {
    return `╒═══ 《 *DOWNLOAD MENU* 》 ═══
├────────────────────
├≽ *${prefix}ytmp3*
├≽ *${prefix}ytmp4*
├≽ *${prefix}play*
├≽ *${prefix}playmp4*
├≽ *${prefix}tiktok*
├≽ *${prefix}tiktokmp3*
├≽ *${prefix}instagram*
├≽ *${prefix}facebook*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.searchMenu = (prefix, ownerName) => {
    return `╒═══ 《 *SEARCH MENU* 》 ═══
├────────────────────
├≽ *${prefix}yts*
├≽ *${prefix}pinterest*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.stalkMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STALKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}igstalk*
├≽ *${prefix}ghstalk*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.randomMenu = (prefix, ownerName) => {
    return `╒═══ 《 *RANDOM MENU* 》 ═══
├────────────────────
├≽ *${prefix}quotes*
├≽ *${prefix}darkjokes
├≽ *${prefix}pantun
├≽ *${prefix}bucin
├≽ *${prefix}cehor
├≽ *${prefix}fakta
├≽ *${prefix}katabijak
├≽ *${prefix}motivasi
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.animeMenu = (prefix, ownerName) => {
    return `╒═══ 《 *ANIME MENU* 》 ═══
├────────────────────
├≽ *${prefix}waifu*
├≽ *${prefix}loli*
├≽ *${prefix}husbu*
├≽ *${prefix}shota*
├≽ *${prefix}nekonime*
├≽ *${prefix}megumin*
├≽ *${prefix}sagiri*
├≽ *${prefix}shinobu*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.toolsMenu = (prefix, ownerName) => {
    return `╒═══ 《 *TOOLS MENU* 》 ═══
├────────────────────
├≽ *${prefix}nulis*
├≽ *${prefix}nuliskiri*
├≽ *${prefix}nuliskanan*
├≽ *${prefix}foliokiri*
├≽ *${prefix}foliokanan*
├≽ *${prefix}tinyurl*
├≽ *${prefix}translate*
├≽ *${prefix}ebase64*
├≽ *${prefix}debase64*
├≽ *${prefix}ehex*
├≽ *${prefix}dehex*
├≽ *${prefix}ebinary*
├≽ *${prefix}debinary*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.makerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *MAKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}hartatahta*
├≽ *${prefix}neon*
├≽ *${prefix}matrix*
├≽ *${prefix}blackpink*
├≽ *${prefix}halloween*
├≽ *${prefix}thundername*
├≽ *${prefix}devilwings*
├≽ *${prefix}cloudtext*
├≽ *${prefix}bloodtext*
├≽ *${prefix}bloodtext2*
├≽ *${prefix}steeltext*
├≽ *${prefix}lavatext*
├≽ *${prefix}toxiclogo*
├≽ *${prefix}dropwater*
├≽ *${prefix}metaldark*
├≽ *${prefix}sandwrite*
├≽ *${prefix}3dwater*
├≽ *${prefix}graffiti*
├≽ *${prefix}graffiti2*
├≽ *${prefix}phlogo*
├≽ *${prefix}glitch*
├≽ *${prefix}graffiti3*
├≽ *${prefix}layeredtext*
├≽ *${prefix}vintage*
├≽ *${prefix}3dspace*
├≽ *${prefix}stonetext*
├≽ *${prefix}avengers*
├≽ *${prefix}marvellogo*
├≽ *${prefix}3dmetal*
├≽ *${prefix}lionlogo*
├≽ *${prefix}wolflogo*
├≽ *${prefix}ninjalogo*
├≽ *${prefix}pubglogo*
├≽ *${prefix}shadowtext*
├≽ *${prefix}smoketext*
├≽ *${prefix}romancetext*
├≽ *${prefix}carvedwood*
├≽ *${prefix}harrypotter*
├≽ *${prefix}flamingtext*
├≽ *${prefix}falleaves*
├≽ *${prefix}underwater*
├≽ *${prefix}wolfmetal*
├≽ *${prefix}woodboard*
├≽ *${prefix}undergrass*
├≽ *${prefix}coffetext*
├≽ *${prefix}lovetext*
├≽ *${prefix}burnpaper*
├≽ *${prefix}lovemessage*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.otherMenu = (prefix, ownerName) => {
    return `╒═══ 《 *OTHER MENU* 》 ═══
├────────────────────
├≽ *cekprefix*
├≽ *${prefix}stats*
├≽ *${prefix}limit*
├≽ *${prefix}balance*
├≽ *${prefix}runtime*
├≽ *${prefix}speed*
├≽ *${prefix}owner*
├≽ *${prefix}donasi*
├≽ *${prefix}sourcecode*
├≽ *${prefix}cekprem*
├≽ *${prefix}listprem*
├≽ *${prefix}listban*
├≽ *${prefix}listbadword*
├≽ *${prefix}buylimit*
├≽ *${prefix}buyglimit*
├≽ *${prefix}topglobal*
├≽ *${prefix}toplocal*
├≽ *${prefix}readmore*
├≽ *${prefix}cekapikey*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.hentaiMenu = (prefix, ownerName) => {
    return `╒═══ 《 *18+ MENU* 》 ═══
├────────────────────
├≽ *${prefix}randomhentong*
├≽ *${prefix}kemonomimi*
├≽ *${prefix}ero*
├≽ *${prefix}echi*
├≽ *${prefix}ahegao*
├≽ *${prefix}trap*
├≽ *${prefix}neko*
├≽ *${prefix}blowjob*
├≽ *${prefix}kitsune*
├≽ *${prefix}yuri*
├≽ *${prefix}boobs*
├≽ *${prefix}kuni*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.storageMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STORAGE MENU* 》 ═══
├────────────────────
├≽ *${prefix}sound*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}
