module.exports = {
    admin: {
        'icepy': 'xiangwenwe@gmail.com'
    },
    database: {
        db: 'private_npm',
        username: 'root',
        password: '',
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        pool: {
            maxConnections: 10,
            minConnections: 0,
            maxIdleTime: 30000
        }
    },
    registryHost: 'localhost:7001',
    scopes: ['@icepy']
}