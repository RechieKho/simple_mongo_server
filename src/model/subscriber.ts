import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribeToChannel: {
    type: String,
    required: true,
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

export default mongoose.model("Subscriber", Schema);
