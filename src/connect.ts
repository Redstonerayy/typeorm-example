import "reflect-metadata";
import { DataSource } from "typeorm";
import User from "./user.js";
import { CreateUserTable } from "./CreateUserTable.js";

// make connection
const connection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "test",
    entities: [User],
    synchronize: true, // only developement
});

connection
    .initialize()
    .then(async () => {
        // initialize
        const repository = connection.getRepository(User);

        // add user to db
        const user = new User();
        user.firstName = "Timber";
        user.lastName = "Saw";
        user.age = 25;

        await repository.save(user);

        // remove all users
        // await connection
        //     .getRepository(User)
        //     .createQueryBuilder("user")
        //     .delete()
        //     .from(User)
        //     .execute();
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
