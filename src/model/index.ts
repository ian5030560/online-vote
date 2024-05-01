import { env } from "process";
import { InferAttributes, InferCreationAttributes, Sequelize, Model as DataModel } from "sequelize";

const sequelize = new Sequelize(env.DATABASE_NAME!, env.DATABASE_USERNAME!, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    dialect: "mariadb",
});

export default sequelize;
export type Model<T extends DataModel<any, any>> = DataModel<InferAttributes<T>, InferCreationAttributes<T>>;

export function initDB(){
    sequelize.sync()
    .then(() => {
        console.log("initialized database");
    });
}