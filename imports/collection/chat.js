import {Mongo} from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'

const Chat = new Mongo.Collection('chat');

Chat.schema = new SimpleSchema({
    _id: { type: String, label: 'id chat', optional: true},
    name: { type: String, label: 'Name Chat'},
    alamat: { type: String, label: 'Alamat'},
}).newContext()

// LinkedUser.attachSchema(schema)

export default Chat;
