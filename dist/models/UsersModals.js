import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false,
    },
    age: {
        type: Number,
        required: false
    }
});
const UserModel = mongoose.model('User', UserSchema);
// const UserSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email:{
//         type: String,
//         required: true
//     },
//     phone: {
//         type: String,
//         required: false,
//     },
//     age: {
//         type: Number,
//         required: false
//     }
// })
export default UserSchema;
// module.exports = mongoose.model('Data', UserSchema)
