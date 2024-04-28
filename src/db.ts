import { DataTypes, Sequelize, Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import { env } from "process";

const sequelize = new Sequelize(env.DATABASE_NAME!, env.DATABASE_USERNAME!, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    dialect: "mariadb",
});

export default sequelize;

interface UserModal extends Model<InferAttributes<UserModal>, InferCreationAttributes<UserModal>>{
    name: string;
    email: string;
    picture: CreationOptional<string>;
    id: string;
} 
export const User = sequelize.define<UserModal>(
    "user",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture: {
            type: DataTypes.STRING,
        },
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
    },
    {
        tableName: "user",
        timestamps: false,
    }
) 