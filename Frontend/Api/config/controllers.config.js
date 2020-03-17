var fs = require("fs-extra");

module.exports = app => {
    const dir = `${__dirname}/../controllers`;

    return fs
        .readdir(dir)
        .then(files =>
            files.forEach(fileName => {
                console.info(`>> Controller Found: ${fileName}`);
                app.use(require(`${dir}/${fileName}`));
            })
        )
        .then(() => app);
};
