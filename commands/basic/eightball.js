// * Imports
const commando = require('discord.js-commando');
const config = require('../.././config.json');
const eightBallResponse = require('8ball')()

// * Class Setup
class eightball extends commando.Command {
    constructor(client) {
        // * Command Metadata
        super(client, {
            name: 'eightball',
            aliases: ['8ball', '八ボール'],
            group: 'basic',
            memberName: 'eightball',
            description: 'Katou responds to a question with a response from the magic eightball.',
            details: 'Katou responds to a question specified by the user with an answer depending on her mood that day.',
            format: '<question>',
            examples: ['k!eightball Is Vins#9790 best dev?', 'k!8ball Is Katou best bot?'],
            args: [{
                key: 'question',
                prompt: 'What would you like to ask?',
                type: 'string'
            }]
        });
    }
    // * Command Execution
    async run(message, args) {
        // TODO: Personalize Katou's responses, add more responses. Maybe quotes from anime?
        message.channel.send(eightBallResponse);
    }
}

// * Magic!
module.exports = eightball;