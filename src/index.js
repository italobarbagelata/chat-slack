const { App } = require('@slack/bolt');
const app = new App({
    signingSecret: '14a1bb97bb2fca408ed8e9d0a8fae18a',
    token: 'xoxb-6168189570691-6165931942149-yusB53yZHhjB80Y8YoMIFqBf',
});

(async () => {
    await app.start(process.env.PORT || 12000);

    app.message(async ({ message, say }) => {
        
        console.log(message)
      });


    console.log(`⚡️ Bolt app is running!`);
})();