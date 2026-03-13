const { SlashCommandBuilder } = require("discord.js");

module.exports = {

data: new SlashCommandBuilder()
.setName("warn")
.setDescription("Warn a user")
.addUserOption(option =>
option.setName("user")
.setDescription("User to warn")
.setRequired(true))
.addStringOption(option =>
option.setName("reason")
.setDescription("Reason")
.setRequired(true)),

async execute(interaction){

const user = interaction.options.getUser("user");
const reason = interaction.options.getString("reason");

await interaction.reply(`⚠️ ${user.tag} has been warned.\nReason: ${reason}`);

}

};