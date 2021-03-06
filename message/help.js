exports.menu = (prefix, i) => {
    return `*π«πππδΉπΎπ°π©πΌπΊπΆπ­π»*
`
}

exports.newMenu = (ucapan, ownerName, botName, prefix, pendaftar, runtime, pushname, isOwner, isPremium, sisalimit, limitCount, glimit, gcount, expired, tanggal, jam) => {
    return `${ucapan.data.result} ${pushname}
ββββ γ *${botName}* γ βββ
βββββββββββββββββββββ
ββ½ *Creator : ${ownerName}*
ββ½ *Lib : Baileys V.3.5.1*
ββ½ *Prefix : γ ${prefix} γ*
ββ½ *Total Fitur : 200+*
ββ½ *Total Pengguna : ${pendaftar.length}*
ββ½ *Tanggal : ${tanggal}*
ββ½ *Pukul : ${jam}*
ββ½ *Runtime Bot*
ββ½ *${runtime}*
βββββββββββββββββββββ
ββββ γ *USER INFO* γ βββ
βββββββββββββββββββββ
ββ½ *Name* : *${pushname}*
ββ½ *Status* : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Gratisan'}*
ββ½ *Limit* : *${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
ββ½ *Limit Game* : *${isOwner ? 'Unlimited' : `${glimit}/${gcount}`}*
ββ½ *Expired Prem : ${isOwner ? '-' : isPremium ? expired : 'Not Premium'}*
βββββββββββββββββββββ
ββββ γ *MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}stickermenu*
ββ½ *${prefix}creatormenu*
ββ½ *${prefix}groupmenu*
ββ½ *${prefix}sistemmenu*
ββ½ *${prefix}gabutmenu*
ββ½ *${prefix}gamemenu*
ββ½ *${prefix}downloadmenu*
ββ½ *${prefix}searchmenu*
ββ½ *${prefix}stalkmenu*
ββ½ *${prefix}randommenu*
ββ½ *${prefix}animemenu*
ββ½ *${prefix}nsfwmenu*
ββ½ *${prefix}toolsmenu*
ββ½ *${prefix}makermenu*
ββ½ *${prefix}storagemenu*
ββ½ *${prefix}othermenu*
βββββββββββββββββββββ
ββββ γ *THANKS TO* γ βββ
βββββββββββββββββββββ
ββ½ *π«πππδΉπΎπ°π©πΌπΊπΆπ­π»*
ββ½ *π«ππ*
ββ½ *πͺπππππππ*
ββ½ *π΅πππππ*
ββ½ *π¨ππππ*
ββ½ *πΉππππ*
ββ½ *π²ππππ*
ββ½ *π©ππππ*
ββ½ *π²πππππ*
ββββ γ *π©π ${ownerName}* γ βββ`
}

exports.stickerMenu = (prefix, ownerName) => {
    return `ββββ γ *STICKER MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}sticker*
ββ½ *${prefix}stickergif*
ββ½ *${prefix}swm*
ββ½ *${prefix}take*
ββ½ *${prefix}toimg*
ββ½ *${prefix}tovideo*
ββ½ *${prefix}attp*
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}

exports.ownerMenu = (prefix, ownerName) => {
    return `ββββ γ *CREATOR MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}addprem*
ββ½ *${prefix}delprem*
ββ½ *${prefix}ban*
ββ½ *${prefix}unban*
ββ½ *${prefix}join*
ββ½ *${prefix}addbaword*
ββ½ *${prefix}delbaword*
ββ½ *${prefix}addchangelog*
ββ½ *${prefix}public*
ββ½ *${prefix}self*
ββ½ *${prefix}exif*
ββ½ *${prefix}bc*
ββ½ *${prefix}setprefix*
ββ½ *${prefix}setthumb*
ββ½ *${prefix}clearall*
ββ½ *${prefix}>*
ββ½ *${prefix}$*
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}

exports.groupMenu = (prefix, ownerName) => {
    return `ββββ γ *GROUP MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}afk*
ββ½ *${prefix}infogrup*
ββ½ *${prefix}add*
ββ½ *${prefix}kick*
ββ½ *${prefix}promote*
ββ½ *${prefix}demote*
ββ½ *${prefix}linkgc*
ββ½ *${prefix}leave*
ββ½ *${prefix}setdesc*
ββ½ *${prefix}setgrupname*
ββ½ *${prefix}setppgrup*
ββ½ *${prefix}opengrup*
ββ½ *${prefix}closegrup*
ββ½ *${prefix}tagall*
ββ½ *${prefix}tagme*
ββ½ *${prefix}kontak*
ββ½ *${prefix}hidetag*
ββ½ *${prefix}getpp*
ββ½ *${prefix}mute*
ββ½ *${prefix}unmute*
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}

exports.sistemMenu = (prefix, ownerName) => {
    return `ββββ γ *SISTEM MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}antilink*
ββ½ *${prefix}antiwame*
ββ½ *${prefix}antibadword*
ββ½ *${prefix}welcome*
ββ½ *${prefix}left*
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}

exports.gabutMenu = (prefix, ownerName) => {
    return `ββββ γ *GABUTZ MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}apakah*
ββ½ *${prefix}bisakah*
ββ½ *${prefix}kapankah*
ββ½ *${prefix}hobby*
ββ½ *${prefix}rate*
ββ½ *${prefix}cekbapak*
ββ½ *${prefix}seberapagay*
ββ½ *${prefix}truth*
ββ½ *${prefix}dare*
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}

exports.gameMenu = (prefix, ownerName) => {
    return `ββββ γ *GAME MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}tictactoe*
ββ½ *${prefix}delttt*
ββ½ *${prefix}tebakgambar*
ββ½ *${prefix}family100*
ββ½ *${prefix}suit*
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}

exports.downloadMenu = (prefix, ownerName) => {
    return `ββββ γ *DOWNLOAD MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}ytmp3*
ββ½ *${prefix}ytmp4*
ββ½ *${prefix}play*
ββ½ *${prefix}playmp4*
ββ½ *${prefix}tiktok*
ββ½ *${prefix}tiktokmp3*
ββ½ *${prefix}instagram*
ββ½ *${prefix}facebook*
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}

exports.searchMenu = (prefix, ownerName) => {
    return `ββββ γ *SEARCH MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}yts*
ββ½ *${prefix}pinterest*
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}

exports.stalkMenu = (prefix, ownerName) => {
    return `ββββ γ *STALKER MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}igstalk*
ββ½ *${prefix}ghstalk*
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}

exports.randomMenu = (prefix, ownerName) => {
    return `ββββ γ *RANDOM MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}quotes*
ββ½ *${prefix}darkjokes
ββ½ *${prefix}pantun
ββ½ *${prefix}bucin
ββ½ *${prefix}cehor
ββ½ *${prefix}fakta
ββ½ *${prefix}katabijak
ββ½ *${prefix}motivasi
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}

exports.animeMenu = (prefix, ownerName) => {
    return `ββββ γ *ANIME MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}waifu*
ββ½ *${prefix}loli*
ββ½ *${prefix}husbu*
ββ½ *${prefix}shota*
ββ½ *${prefix}nekonime*
ββ½ *${prefix}megumin*
ββ½ *${prefix}sagiri*
ββ½ *${prefix}shinobu*
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}

exports.toolsMenu = (prefix, ownerName) => {
    return `ββββ γ *TOOLS MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}nulis*
ββ½ *${prefix}nuliskiri*
ββ½ *${prefix}nuliskanan*
ββ½ *${prefix}foliokiri*
ββ½ *${prefix}foliokanan*
ββ½ *${prefix}tinyurl*
ββ½ *${prefix}translate*
ββ½ *${prefix}ebase64*
ββ½ *${prefix}debase64*
ββ½ *${prefix}ehex*
ββ½ *${prefix}dehex*
ββ½ *${prefix}ebinary*
ββ½ *${prefix}debinary*
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}

exports.makerMenu = (prefix, ownerName) => {
    return `ββββ γ *MAKER MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}hartatahta*
ββ½ *${prefix}neon*
ββ½ *${prefix}matrix*
ββ½ *${prefix}blackpink*
ββ½ *${prefix}halloween*
ββ½ *${prefix}thundername*
ββ½ *${prefix}devilwings*
ββ½ *${prefix}cloudtext*
ββ½ *${prefix}bloodtext*
ββ½ *${prefix}bloodtext2*
ββ½ *${prefix}steeltext*
ββ½ *${prefix}lavatext*
ββ½ *${prefix}toxiclogo*
ββ½ *${prefix}dropwater*
ββ½ *${prefix}metaldark*
ββ½ *${prefix}sandwrite*
ββ½ *${prefix}3dwater*
ββ½ *${prefix}graffiti*
ββ½ *${prefix}graffiti2*
ββ½ *${prefix}phlogo*
ββ½ *${prefix}glitch*
ββ½ *${prefix}graffiti3*
ββ½ *${prefix}layeredtext*
ββ½ *${prefix}vintage*
ββ½ *${prefix}3dspace*
ββ½ *${prefix}stonetext*
ββ½ *${prefix}avengers*
ββ½ *${prefix}marvellogo*
ββ½ *${prefix}3dmetal*
ββ½ *${prefix}lionlogo*
ββ½ *${prefix}wolflogo*
ββ½ *${prefix}ninjalogo*
ββ½ *${prefix}pubglogo*
ββ½ *${prefix}shadowtext*
ββ½ *${prefix}smoketext*
ββ½ *${prefix}romancetext*
ββ½ *${prefix}carvedwood*
ββ½ *${prefix}harrypotter*
ββ½ *${prefix}flamingtext*
ββ½ *${prefix}falleaves*
ββ½ *${prefix}underwater*
ββ½ *${prefix}wolfmetal*
ββ½ *${prefix}woodboard*
ββ½ *${prefix}undergrass*
ββ½ *${prefix}coffetext*
ββ½ *${prefix}lovetext*
ββ½ *${prefix}burnpaper*
ββ½ *${prefix}lovemessage*
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}

exports.otherMenu = (prefix, ownerName) => {
    return `ββββ γ *OTHER MENU* γ βββ
βββββββββββββββββββββ
ββ½ *cekprefix*
ββ½ *${prefix}stats*
ββ½ *${prefix}limit*
ββ½ *${prefix}balance*
ββ½ *${prefix}runtime*
ββ½ *${prefix}speed*
ββ½ *${prefix}owner*
ββ½ *${prefix}donasi*
ββ½ *${prefix}sourcecode*
ββ½ *${prefix}cekprem*
ββ½ *${prefix}listprem*
ββ½ *${prefix}listban*
ββ½ *${prefix}listbadword*
ββ½ *${prefix}buylimit*
ββ½ *${prefix}buyglimit*
ββ½ *${prefix}topglobal*
ββ½ *${prefix}toplocal*
ββ½ *${prefix}readmore*
ββ½ *${prefix}cekapikey*
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}

exports.hentaiMenu = (prefix, ownerName) => {
    return `ββββ γ *18+ MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}randomhentong*
ββ½ *${prefix}kemonomimi*
ββ½ *${prefix}ero*
ββ½ *${prefix}echi*
ββ½ *${prefix}ahegao*
ββ½ *${prefix}trap*
ββ½ *${prefix}neko*
ββ½ *${prefix}blowjob*
ββ½ *${prefix}kitsune*
ββ½ *${prefix}yuri*
ββ½ *${prefix}boobs*
ββ½ *${prefix}kuni*
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}

exports.storageMenu = (prefix, ownerName) => {
    return `ββββ γ *STORAGE MENU* γ βββ
βββββββββββββββββββββ
ββ½ *${prefix}sound*
ββββββββββββββββββββββ
ββββ γ *By ${ownerName}* γ βββ`
}
