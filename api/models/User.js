const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true, unique: true},
        created_by: {type: String, required: true}
    },
    {timestamps: {createdAt: 'created_at', updatedAt: false}}
)

module.exports = mongoose.model("User", UserSchema)