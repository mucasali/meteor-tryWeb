import Chat from '../imports/collection/chat'

Meteor.publish('chat', function (param){
    console.log('publish Chat ', param)

    // return res;
})

Meteor.methods({
    'Chat.insert': function(chat){
        console.log('chat insert ', chat)
        const id = Chat.insert(chat);

        return {success: true, data: chat, message: 'insert chat success'}
    },
})
