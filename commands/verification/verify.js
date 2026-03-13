const { SlashCommandBuilder } = require("discord.js");

module.exports = {

data: new SlashCommandBuilder()
.setName("verify")
.setDescription("Verify your Roblox username")
.addStringOption(option =>
option.setName("username")
.setDescription("Roblox username")
.setRequired(true)),

async execute(interaction){

const username = interaction.options.getString("username");

await interaction.member.setNickname(`${username} | ${interaction.user.username}`);

await interaction.reply({
content:`✅ Verified as **${username}**`,
ephemeral:true
});

}

};