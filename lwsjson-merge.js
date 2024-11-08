function mergeJSON(...jsonObjects) {
    return jsonObjects.reduce((acc, curr) => {
        return { ...acc, ...curr };
    }, {});
}

module.exports = mergeJSON;