module.exports = {
    emptyValidator: (value) => {
        return !value.trim() ? false : true;
    },
    shouldBeNumber: (value) => {
        return !value || isNaN(value) ? false : true;
    }
}