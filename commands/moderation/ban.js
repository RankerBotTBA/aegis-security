const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {

data: new SlashCommandBuilder()
.setName("ban")
.setDescription("Ban a member")
.addUserOption(option =>
option.setName("user")
.setDescription("User to ban")
.setRequired(true))
.addStringOption(option =>
option.setName("reason")
.setDescription("Reason")
.setRequired(false))
.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

async execute(interaction){

const user = interaction.options.getUser("user");
const reason = interaction.options.getString("reason") || "No reason";

await interaction.guild.members.ban(user.id,{reason});

await interaction.reply(`🔨 ${user.tag} has been banned.\nReason: ${reason}`);

}

};