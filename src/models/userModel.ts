import mongoose, {Document, Schema} from "mongoose";

interface User {
    name: string;
    email: string;
    phone: number;
    age: number
}

interface UserModel extends User, Document {}

const UserSchema = new Schema<UserModel>({
    name: {
        type: String,
        required: true
    },
    email:{
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
})
const UserModel = mongoose.model<UserModel>('User',UserSchema);


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



export default UserModel;
// module.exports = mongoose.model('Data', UserSchema)