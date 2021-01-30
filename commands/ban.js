module.exports = {
    name: 'ban',
    description: "This is ping command",
    execute(client, message, args, Discord) {
        if (message.member.roles.cache.some(r => r.name === "king")) {
            const target = message.mentions.users.first();
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
                let mutedRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(mutedRole.id);
                const embedMsg = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle('Banned:')
                    .setDescription(`<@${memberTarget.user.id}> has been banned`)
                    .addFields(
                        { name: 'Reason:', value: `${args[1]}` }

                    )
                message.channel.send(embedMsg);;
            }
            else {
                message.channel.send('cant find that member');
            }
        }
        else {
            message.reply('you have no permission');
        }
    }
}