import server from "./server";
import { PORT } from './config/envs';
import { AppDataSource } from "./config/appDataSource";
import { setupDatabase } from "./config/databaseSetup";

setupDatabase();
AppDataSource.initialize()
    .then(() => {
        console.log("Conexión a la base de datos establecida con éxito.");
        
    })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error durante la inicialización:", error);
    });
