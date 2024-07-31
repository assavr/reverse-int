module.exports = function reverse(n) {
    return [...n.toString()]
        .filter((elem) => elem.match(/\d/))
        .reverse()
        .join("");
};
