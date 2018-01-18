/**
*   Error Levels:
*   0: no error, very important info
*   1: error: critical error in app
*   2: error: internal error in app
*   3: error: minor error
*
*   4: info: important info (bad request/login)
*   5: info: minor info
*
*   6: trace: tracing informations
*
*  10: full trace: (requests objects, etc)
*
**/

module.exports = (level, ...message) => {
    let now = Date.now(),
        logMessage = now.day + ' - ' + now.time + ' - ' + level + ' - ' + message.map((item) => {
            let output;

            if (typeof item === 'string') {
                output = item;
            } else {
                try {
                    if (Object.prototype.toString.call(item) === "[object Error]") {
                        output = item.stack.replace(/\n\s*/g, ' |-| ')
                    } else {
                        output = JSON.stringify(item);
                    }
                }
                catch(err) {
                    console.log(item);
                    output = err;
                }
            }
            return output;
        }).join(' ') + '\n';

    console.log(logMessage);
};;