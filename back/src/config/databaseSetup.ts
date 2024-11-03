import { Client } from "pg";
import { DB_HOST, DB_PORT, PASSWORD, USERNAME } from "./envs";

export function setupDatabase() {

  const client = new Client({
    
    host: DB_HOST,
    port: DB_PORT,
    user: USERNAME,
    password: PASSWORD,
    database: 'postgres'

  });

  return client.connect()

    .then(async () => {
      try {

        // Ejecuta la creación de la base de datos si no existe
        await client.query(`CREATE DATABASE "${process.env.DATABASE}"`);
        console.log(`Base de datos ${process.env.DATABASE} creada con éxito.`);

      } catch (error:any) {

        // Verifica si el error es porque la base de datos ya existe
        if (error.code === "42P04") { // Código 42P04 significa "base de datos ya existe"
            
          console.log(`La base de datos ${process.env.DATABASE} ya existe.`);
          
        }else {

          console.error("__Error creando la base de datos:", error);
          
        }
      } finally {
        
        await client.end(); // Cierra la conexión
      
      }
  
    })
    .catch((error) => {
    
      console.error("Error al conectar al servidor de PostgreSQL:", error);
      throw error;
    
    });

}
