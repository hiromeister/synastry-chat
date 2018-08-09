import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import '../imports/api/messages.js';
import App from "../imports/components/App";

Meteor.startup(() => {
  render(<App />, document.getElementById("root"));
});
