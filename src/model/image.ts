import { DataTypes } from "sequelize";
import sequelize, { Model } from ".";
import User from "./user";

interface ImageModel extends Model<ImageModel>{
    user: string;
    id: string;
    content: Buffer;
    filename: string;
    mime: string;
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
            type: DataTypes.STRING(50),
            primaryKey: true,
        },
        content: {
            type: DataTypes.BLOB("long"),
            allowNull: false,
        },
        filename: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        mime: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    },
    {
        tableName: "image",
        timestamps: false,
    }
) 

export async function hasIdenticalImage(id: string): Promise<boolean>{
    let images = await Image.findAll({where: {id: id}});
    return images.length !== 0; 
}

export async function getImageById(user: string, id: string){
    return await Image.findOne({where: {user: user, id: id}});
}
export default Image;