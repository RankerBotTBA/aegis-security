const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const db = require("../../database/connection");

module.exports = {

data: new SlashCommandBuilder()
.setName("removestaffrole")
.setDescription("Remove a staff role from the bot")
.addRoleOption(option =>
option.setName("role")
.setDescription("Role to remove")
.setRequired(true))
.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

async execute(interaction){

const role = interaction.options.getRole("role");

const conn = await db.getConnection();

await conn.query(
"DELETE FROM staff_roles WHERE role_id = ? AND guild_id = ?",
[role.id, interaction.guild.id]
);

conn.release();

await interaction.reply({
content:`✅ Role **${role.name}** removed from staff roles.`,
ephemeral:true
});

}

};