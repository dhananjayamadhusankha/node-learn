const mongoose = require("mongoose");
const constant = require("../constants");

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      maxlength: [100, "Full name shouldn't be exceed 100 characters"],
    },

    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      validate: {
        validator: (value) => {
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailRegex.test(value);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },

    picture: { type: String, required: [true, "User picture is required"] },

    role: {
      type: String,
      required: [true, "Role is required"],
      enum: {
        values: [constant.USER.ADMIN, constant.USER.USER],
        message: "Valid role is required..!",
      },
    },

    password: { type: String, required: [true, "Password is required"] },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
