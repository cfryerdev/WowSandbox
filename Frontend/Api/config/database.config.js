
module.exports = app =>
    new Promise((resolve, reject) => {
        try {
           // Do some stuff

            resolve(app);
        } catch (err) {
            reject(err);
        }
    });
