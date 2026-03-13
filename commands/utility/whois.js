const { SlashCommandBuilder } = require("discord.js");

module.exports = {

data: new SlashCommandBuilder()
.setName("whois")
.setDescription("Show user info")
.addUserOption(option =>
option.setName("user")
.setDescription("User")
.setRequired(true)),

async execute(interaction){

const user = interaction.options.getUser("user");
const member = interaction.guild.members.cache.get(user.id);

await interaction.reply(
`👤 **User Info**

Name: ${user.tag}
Joined: ${member.joinedAt.toDateString()}
ID: ${user.id}`
);

}

};