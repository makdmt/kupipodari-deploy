
export default () => ({
    server: {
        port: parseInt(process.env.NEST_PORT) || 3000
    },
    database: {
        host: process.env.POSTGRES_HOST || '127.0.0.1',
        port: parseInt(process.env.POSTGRES_PORT) || 5432,
        user: process.env.POSTGRES_USER || 'student',
        password: process.env.POSTGRES_PASSWORD || 'student',
        name: process.env.POSTGRES_DB || 'kupipodariday',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'secret-key',
        ttl: process.env.JWT_TTL || '6000s',
    }
})