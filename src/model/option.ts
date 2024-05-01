import { CreationOptional, DataTypes } from "sequelize";
import sequelize, { Model } from ".";
import User from "./user";
import Vote from "./vote";

interface OptionModel extends Model<OptionModel>{
    user: string;
    vote: string;
    name: string;
    description: string;
    image: CreationOptional<string>;
}

const Option = sequelize.define<OptionModel>(
    "option",
    {
        user: {
            type: DataTypes.STRING(50),
            allowNull: false,
            references: {
                model: User,
                key: "id",
            }
        },
        vote: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: Vote,
                key: "id",
            }
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT("tiny"),
            allowNull: false,
        },
        image: {
            type: DataTypes.UUID,
        } 
    },
    {
        tableName: "option",
        timestamps: false,
    }
) 

export default Option;