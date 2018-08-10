import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";


export const Messages = new Mongo.Collection("messages");


Meteor.methods({
  "tasks.insert"(text, time) {
    check(text, String);
    check(time, String);

    Messages.insert({
      text,
      time,
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },

  "messages.update"(messageId, newText){
    check(messageId, String);
    check(newText, String);
    Messages.update(messageId, { $set: { text: newText } });

  }
});

if (Meteor.isServer) {
  console.log("server");
  Meteor.publish("listMessages", function messagesPublication() {
    return Messages.find();
  });
}
