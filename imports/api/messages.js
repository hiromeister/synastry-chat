import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";


export const Messages = new Mongo.Collection("messages");


Meteor.methods({
  "tasks.insert"(text, user, time) {
    check(text, String);
    check(user, String);
    check(time, String);

    Messages.insert({
      text,
      user,
      time
    });
  }
});

if (Meteor.isServer) {
  console.log("server");
  Meteor.publish("listMessages", function messagesPublication() {
    return Messages.find();
  });
}
