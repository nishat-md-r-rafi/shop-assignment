const mongooose = require("mongoose");

const ItemSchema = new mongooose.Schema(
    {
        name: {type: String, required: true, unique: true},
        created_by: {type: String, required: true, unique: false}
    },
    {timestamps: {createdAt: 'created_at', updatedAt: false}}
)

module.exports = mongooose.model("Item", ItemSchema)