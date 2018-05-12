// * Imports
// TODO: Figure out why python looking imports don't work though vscode yells they do
const commando = require('discord.js-commando');
const config = require('./config.json');

// * Client Initialization
const client = new commando.Client({
    owner: config.owner,
    commandPrefix: config.prefix
});

// * Core Event Handling
client.on('ready', () => { // Startup
    console.log(`Katou is online on ${client.guilds.size} guilds.`);
    client.user.setActivity("the stock market | k!", { type: 'WATCHING'});
});
client.on('message', () => {
    // TODO: Add in more message handling
});

// * Guild Events
client.on('guildCreate', guild => { // Joined Guild
    console.log(`Katou has joined ${guild.name}. ID: ${guild.id}`);
});
client.on('guildDelete', guild => { // Left Guild
    console.log(`Katou has left ${guild.name}. ID: ${guild.id}`);
});

// * Error Handling
client.on('error', (e) => console.error(e));
client.on('warn', (e) => console.warn(e));
//// client.on('debug', (e) => console.info(e));

// * Command Registry
client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['basic', 'Basic commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(`${__dirname}/commands`);

// * Magic!
client.login(config.token);