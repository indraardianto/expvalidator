import { DataTypes } from "sequelize";
import database from "../../../config/database.js";

const Category = database.define(
    "categories",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            length: 100
        },
        description: {
            type: DataTypes.TEXT
        },
        status: {
            type: DataTypes.ENUM("active", "inactive"),
            defaultValue: "active"

        }
    },
    {
        freezeTableName: true
    }
);

database.sync();
export default Category;