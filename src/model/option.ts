import { CreationOptional, DataTypes } from "sequelize";
import sequelize, { Model } from ".";
import User from "./user";
import Vote from "./vote";
import Image from "./image";

interface OptionModel extends Model<OptionModel>{
    user: string;
    vote: string;
    name: string;
    description: string;
    image: CreationOptional<string>;
    id: string;
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
            type: DataTypes.CHAR(128),
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
            type: DataTypes.STRING(50),
            references: {
                model: Image, 
                key: "id",
            }
        },
        id: {
            type: DataTypes.CHAR(128),
            primaryKey: true,
        },
    },
    {
        tableName: "option",
        timestamps: false,
    }
) 

export default Option;

export async function getOptionsInVote(user: string, vote: string){
    let options = await Option.findAll({where: {user, vote}});
    return options;
}