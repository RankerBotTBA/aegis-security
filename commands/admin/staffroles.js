const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const db = require("../../database/connection");

module.exports = {

    data: new SlashCommandBuilder()
        .setName("staffroles")
        .setDescription("Show registered staff roles")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {

        try {

            const conn = await db.getConnection();

            const rows = await conn.query(
                "SELECT * FROM staff_roles WHERE guild_id = ?",
                [interaction.guild.id]
            );

            conn.release();

            if (rows.length === 0) {

                return interaction.reply({
                    content: "⚠️ No staff roles registered.",
                    ephemeral: true
                });

            }

            const categories = {};

            for (const row of rows) {

                if (!categories[row.category]) {
                    categories[row.category] = [];
                }

                const role = interaction.guild.roles.cache.get(row.role_id);

                if (role) {
                    categories[row.category].push(role.name);
                }

            }

            let message = "🛡️ **Registered Staff Roles**\n\n";

            for (const category in categories) {

                message += `**${category}**\n`;

                categories[category].forEach(role => {
                    message += `• ${role}\n`;
                });

                message += "\n";

            }

            await interaction.reply({
                content: message,
                ephemeral: true
            });

        } catch (error) {

            console.error(error);

            await interaction.reply({
                content: "❌ Database error.",
                ephemeral: true
            });

        }

    }

};