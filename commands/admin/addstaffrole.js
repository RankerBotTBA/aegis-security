const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("addstaffrole")
        .setDescription("Register a staff role for the bot")
        .addRoleOption(option =>
            option.setName("role")
                .setDescription("Role to add")
                .setRequired(true))
        .addStringOption(option =>
            option.setName("category")
                .setDescription("Staff category")
                .setRequired(true)
                .addChoices(
                    { name: "Moderation", value: "Moderation" },
                    { name: "Administration", value: "Administration" },
                    { name: "Executive", value: "Executive" }
                ))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {

        const role = interaction.options.getRole("role");
        const category = interaction.options.getString("category");

        await interaction.reply({
            content: `✅ Role **${role.name}** added to **${category}** category.`,
            ephemeral: true
        });

    }
};
