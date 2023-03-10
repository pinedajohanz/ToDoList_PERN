export = {
    development: {
        client: "postgresql",
        connection: {
            host: "localhost",
            port: "5432",
            database: "todolist_pern",
            user: "postgres",
            password: "redalert333"
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: __dirname + "/migrations",
            tableName: "knex_migrations",
            extensions: "ts",
        },
    },
} as { [key: string]: object };