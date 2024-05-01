import { DataTypes } from "sequelize";
import sequelize, { Model } from ".";
import User from "./user";

interface ImageModel extends Model<ImageModel>{
    user: string;
    id: string;
    hash: string;
    content: Blob;
}

const Image = sequelize.define<ImageModel>(
    "image",
    {
        user: {
            type: DataTypes.STRING(50),
            allowNull: false,
            references: {
                model: User,
                key: "id",
            }
        },
        id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        hash: {
            type: DataTypes.TEXT("tiny"),
            allowNull: false,
        },
        content: {
            type: DataTypes.BLOB,
            allowNull: false,
        }
    },
    {
        tableName: "image",
        timestamps: false,
    }
) 

export async function hasIdenticalImage(hash: string): Promise<boolean>{
    let images = await Image.findAll({where: {hash: hash}});
    return images.length === 0;
}
export default Image;