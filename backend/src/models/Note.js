import mongoose from "mongoose";
//1-create a shema
//2-model base off of that schema
const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }, //createAt ,updataAt
);

const Note = mongoose.model("Note", noteSchema);
export default Note;