// A simple file to launch an instance of the mail server for debugging and manual testing.
"use strict";
var fluid = require("infusion");
fluid.setLogging(true);

var gpii  = fluid.registerNamespace("gpii");

require("../index.js");

gpii.test.mail.smtp({
    port: 4425,
    listeners: {
        "onMessageReceived.log": {
            funcName: "fluid.log",
            args: ["I received a message, which is now saved to '", "{that}.mailServer.currentMessageFile", "'..."]
        }
    }
});
