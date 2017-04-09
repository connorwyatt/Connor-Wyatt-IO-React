const functions = require('firebase-functions');

exports.message = functions.database.ref('/rawMessages/{pushId}')
  .onWrite(event => {
    // If the function is being called due to the deletion that occurs at the end of this function.
    if (!event.data.exists()) {
      return;
    }

    const message = event.data.val();
    const currentTimestamp = Date.now();

    const updatedMessage = Object.assign({}, message, {
      createdAt: currentTimestamp
    });

    console.info(`Received message from '"${message.name}" <${message.email}>':\n${message.message}`);

    return event.data.adminRef.root.child('/messages').push(updatedMessage).then(() => {
      return event.data.adminRef.remove();
    });
  });
