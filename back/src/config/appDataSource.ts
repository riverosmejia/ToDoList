import { DataSource } from "typeorm";


import {
    DB_TYPE,
    DB_HOST,
    DB_PORT,
    USERNAME,
    PASSWORD,
    DATABASE,
    DB_SYNCHRONIZE,
    DB_LOGGING,
    DB_DROPSCHEMA
} from "./envs";

export const AppDataSource = new DataSource({

    type: DB_TYPE as "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    synchronize: DB_SYNCHRONIZE === "true",
    logging: DB_LOGGING === "true",
    dropSchema: DB_DROPSCHEMA === "true",
    entities: [],
    subscribers: [],
    migrations: [],
});

export const getRepository = <Entity>(entity: new () => Entity) => {
    return AppDataSource.getRepository(entity);
};