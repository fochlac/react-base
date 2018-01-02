let root_dir = '/home/florianr/react-base',
    config = {
        root: root_dir,
        client: root_dir + '/dist/',
        server: root_dir + '/server/',
        secretKey: 'asdahd123iuwjp23eqniewi23epjdms32dbzajidmkw1212313aeknd6568alhd567vnyd',
        port: 54321,
        host: 'localhost',
        mysql: {
            user: '',
            port: 12345,
            host: '',
            pass: '',
            db: ''
        }
    };

Object.keys(config).forEach(key => {
    if (!global[key]) {
        global[key] = config[key];
    }
})

module.exports = config;