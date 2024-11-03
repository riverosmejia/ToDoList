import "dotenv/config";

export const USERNAME = process.env.USERNAME;
export const PASSWORD = process.env.PASSWORD;

export const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000; // Este es para tu servidor
export const DATABASE: string = process.env.DATABASE || "database1"; // Asegúrate de que este sea correcto
export const DB_PORT: number = 5432; // Puerto para PostgreSQL

export const DB_TYPE: "mysql" | "mariadb" | "postgres" | "cockroachdb" | "sqlite" | "mssql" | "sap" | "oracle" | "cordova" | "nativescript" | "react-native" | "sqljs" | "mongodb" | "aurora-mysql" | "spanner" = 
    (process.env.DB_TYPE as "mysql" | "mariadb" | "postgres" | "cockroachdb" | "sqlite" | "mssql" | "sap" | "oracle" | "cordova" | "nativescript" | "react-native" | "sqljs" | "mongodb" | "aurora-mysql" | "spanner") || "postgres";
export const DB_HOST: string = process.env.DB_HOST || "localhost"; // Host de la base de datos
export const DB_SYNCHRONIZE: string = process.env.DB_SYNCHRONIZE || "false"; // Sincronización automática
export const DB_LOGGING: string = process.env.DB_LOGGING || "false"; // Habilitar logging
export const DB_DROPSCHEMA: string = process.env.DB_DROPSCHEMA || "false"; // Eliminar esquema en cada inicio
