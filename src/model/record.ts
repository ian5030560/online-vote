import { DataTypes } from "sequelize";
import sequelize, { Model } from ".";
import User from "./user";
import Vote from "./vote";
import Option from "./option";

interface RecordModel extends Model<RecordModel>{
    creator: string;
    user: string;
    vote: string;
    option: string;
}

const Record = sequelize.define<RecordModel>(
    "record",
    {
        creator: {
            type: DataTypes.STRING(50),
            allowNull: false,
            references: {
                model: User,
                key: "id",
            }
        },
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
        option: {
            type: DataTypes.CHAR(128),
            allowNull: false,
            references: {
                model: Option,
                key: "id",
            }
        },
    },
    {
        tableName: "record",
        timestamps: false,
    }
) 

Record.removeAttribute("id");
export default Record;