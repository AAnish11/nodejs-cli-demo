// Global decorator for handling function execution in try/catch
module.exports = async(fn) => {
    const execute = async() => {
        try {
            const resp = await fn();
            return resp;
        } catch (error) {
            return {
                error: error.message
            };
        }
    };
    return await execute();
}