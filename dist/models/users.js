import mongoose from "mongoose";
// interface User {
//     name: string;
//     email: string;
//     phone: number;
//     age: number
// }
// interface UserModel extends User, Document {}
// const UserSchema = new Schema<UserModel>({
//     name: {
//         type: String
//     }
// })
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false,
    },
    age: {
        type: Number,
        required: false
    }
});
export default UserSchema;
// module.exports = mongoose.model('Data', UserSchema)
