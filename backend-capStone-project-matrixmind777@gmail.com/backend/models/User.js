const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    followers: [{
        type: ObjectId,
        ref: "User"
    }],
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    following: [{
        type: ObjectId,
        ref: "User"
    }],
    password: {
        type: String,
        required: true,
    },
    dateofbirth: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    profileImg: {
        type: String,
        default: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b3de701-504a-4023-a7e8-85ef2c2ce5b1/ddbuvoi-2a6dd805-b394-4111-af62-b3c474cf0934.png/v1/fit/w_600,h_600,q_70,strp/i_made_a_picrew__by_sangled_ddbuvoi-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvOGIzZGU3MDEtNTA0YS00MDIzLWE3ZTgtODVlZjJjMmNlNWIxXC9kZGJ1dm9pLTJhNmRkODA1LWIzOTQtNDExMS1hZjYyLWIzYzQ3NGNmMDkzNC5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ciOTyFkSKkoClPlbzFa-M-dISWGC3FleaKqNI-mLx1s"
    }
}
    , {
        timestamps: {
            createdAt: 'created_at', // Use `created_at` to store the created date
            updatedAt: 'updated_at' // and `updated_at` to store the last updated date
        }
    }
);

mongoose.model("UserModel", userSchema);
