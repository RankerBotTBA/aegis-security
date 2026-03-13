const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {

data: new SlashCommandBuilder()
.setName("kick")
.setDescription("Kick a member")
.addUserOption(option =>
option.setName("user")
.setDescription("User to kick")
.setRequired(true))
.addStringOption(option =>
option.setName("reason")
.setDescription("Reason")
.setRequired(false))
.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

async execute(interaction){

const member = interaction.options.getMember("user");
const reason = interaction.options.getString("reason") || "No reason";

await member.kick(reason);

await interaction.reply(`👢 ${member.user.tag} has been kicked.\nReason: ${reason}`);

}

};

// Might not work