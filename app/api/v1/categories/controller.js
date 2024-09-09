import Category from "./model.js";
import { body, validationResult, check } from "express-validator";

const findAll = (req, res) => {
    Category.findAll().then(categories => {
        res.json({
            status: 200,
            message: "Data Category",
            data: categories
        });
    })

};

const validate = [
    check("name").not().isEmpty().withMessage("Nama tidak boleh kosong"),
]

const createCategories = (req, res) => {
    const { name, description } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    Category.create({
        name,
        description
    }).then(() => {
        res.json({
            status: 200,
            message: "Data has been created"
        });
    })

};

export {
    findAll,
    createCategories,
    validate
}