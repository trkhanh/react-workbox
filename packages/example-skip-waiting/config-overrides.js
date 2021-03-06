const {adjustWorkbox, override} = require('customize-cra');

module.exports = {
    webpack: override(
        adjustWorkbox(wb =>
            Object.assign(wb, {
                skipWaiting: true,
            })
        )),
};