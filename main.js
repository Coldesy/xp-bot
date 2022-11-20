const {dailyReset,monthlyReset} = require('./scheduler.js')
const {Messages} = require('./schema.js')
const fs = require('fs');
const { Client, Collection, Intents,MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { StringDecoder } = require('string_decoder');
const { builtinModules } = require('module');
const { hyperlink } = require('@discordjs/builders');
require('dotenv').config()

const All = new Intents(7796)
const client = new Client({partials:['MESSAGE','CHANNEL','GUILD_MEMBER','USER'], intents: [Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILDS,Intents.FLAGS.MESSAGE_CONTENT,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_INTEGRATIONS] });

client.on('messageCreate', async msg => {
	
	if (msg.channelId === '1039533815292502096' && msg.author.bot === false) {
        await Messages.updateOne({'userid': msg.author.id},{$inc : {'messages': 1}})
    }
	
});
// section for events schedules
client.on('guildMemberAdd',async (member)=>{
    let members = new Messages({userid: member.id,messages: 0,dailyMsg:0,monthlyMsg:0})
    await members.save()

})

client.on('guildMemberRemove', async (member)=> {
    await Messages.deleteOne({'userid': member.id})
})

 
// When the client is ready, run this code (only once)
client.once('ready', async () => {
	console.log('ready');
    const guild = await client.guilds.fetch('752105258481877073')
    const members = await guild.members.fetch()
    let memArr = Array.from(members.keys())
    memArr.forEach(async member => {
        if (true){let memberObj = new Messages({userid: member,messages: 0})
        await memberObj.save()}
    });

});
dailyReset
monthlyReset

client.login('MTA0MzQ4MDUyNjA4ODA2MDk0OQ.GrXvOO.9h9i14145tc-l0TYhYKd6G7KFIJuYSVYpN819s');
