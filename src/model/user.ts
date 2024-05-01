import { CreationOptional, DataTypes } from "sequelize";
import sequelize, { Model } from ".";

interface UserModal extends Model<UserModal>{
    name: string;
    email: string;
    picture: CreationOptional<string>;
    id: string;
}

const User = sequelize.define<UserModal>(
    "user",
    {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        picture: {
            type: DataTypes.STRING(100),
        },
        id: {
            type: DataTypes.STRING(50),
            primaryKey: true,
        },
    },
    {
        tableName: "user",
        timestamps: false,
    }
) 

export default User;