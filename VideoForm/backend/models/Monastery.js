import mongoose from "mongoose";

const MonasterySchema = new mongoose.Schema(
  {
    code: { type: String, unique: true },
    name: { type: String, required: true },

    // Track the chosen (official) submission for each type
    chosen: {
      video: {
        submissionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Submission",
        },
        chosenAt: Date,
        chosenByAdmin: { type: Boolean, default: false },
      },
      painting: {
        submissionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Submission",
        },
        chosenAt: Date,
        chosenByAdmin: { type: Boolean, default: false },
      },
      history: {
        submissionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Submission",
        },
        chosenAt: Date,
        chosenByAdmin: { type: Boolean, default: false },
      },
      // add murals/events similarly if needed
    },
  },
  { timestamps: true }
);

export default mongoose.model("Monastery", MonasterySchema);
