require('dotenv').config()
const TelegramAPI = require('node-telegram-bot-api')

const token = process.env.TELEGRAM_TOKEN
const bot = new TelegramAPI(token, {polling: true})

bot.on('message', async (msg) => {
    console.log(msg.chat.id)
    await bot.sendMessage(msg.chat.id, msg.text)
})