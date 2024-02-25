const telegramBot = require('node-telegram-bot-api');
const token = "7064979491:AAG6cR0vPV9GF4FDNCaqJkDWg5A1Hqsauxo"
const bot = new telegramBot(token, { polling: true })

bot.on('message', msg => {
    const chatId = msg.chat.id;
    const message = msg.text.trim().toLowerCase()
    switch (message) {  
        case 'resim':
            bot.sendPhoto(chatId, "http://via.placeholder.com/640x360")
            break;
        case 'video':
            bot.sendVideo(chatId, 'https://media.istockphoto.com/id/1413207061/de/video/stra%C3%9Fenverkehr-in-delhi-stra%C3%9Fen.mp4?s=mp4-640x640-is&k=20&c=9ZNwQV4ls0zjRLHeMA-XeBshnH_T06cIE0H0SMqRquk=')
            break;
        case 'file':
            bot.sendDocument(chatId, './assets/The-Invention-of-the-Internet.pptx')
            break;
        default:
            bot.sendMessage(chatId, 'secenekler yok')
            break;
    }

})