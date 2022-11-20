const fs = require('fs');
const { Client, Collection, Intents, MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { StringDecoder } = require('string_decoder');
const { builtinModules } = require('module');
const { hyperlink } = require('@discordjs/builders');
require('dotenv').config()

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb+srv://coldy:ekilrrPL1DyLow8j@hxhbot.ecke1.mongodb.net/registerdata", { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true });
}

const BattleStatsSchema = new mongoose.Schema({
    userid: {
        type: String,
        unique: true,
    },
    messages: {
        type: Number,
    },
    dailyMsg: {
        type: Number,
    },
    monthlyMsg: {
        type: Number,
    }

}
)

const msgs = mongoose.model('Messages', BattleStatsSchema)
module.exports.Messages = msgs