import { CreationOptional, DataTypes } from "sequelize";
import sequelize, { Model } from ".";
import User from "./user";;

export interface VoteModal extends Model<VoteModal> {
    title: string;
    description: CreationOptional<string>;
    limit: CreationOptional<number>;
    start: Date;
    end: Date;
    id: string;
    user: string;
}

const Vote = sequelize.define<VoteModal>(
    "vote",
    {
        title: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT("medium"),
        },
        limit: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        start: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        end: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        id: {
            type: DataTypes.CHAR(128),
            primaryKey: true,
        },
        user: {
            type: DataTypes.STRING(50),
            references: {
                model: User,
                key: "id"
            }
        }
    },
    {
        tableName: "vote",
        timestamps: false,
    }
)

export default Vote;