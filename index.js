const dc = require('./dc');

(async() => {
    await dc.initialize();
    await dc.login();
})();