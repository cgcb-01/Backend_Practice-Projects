import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema(
  {
    monastery: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Monastery",
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: {
      type: String,
      enum: [
        "video",
        "sculpture",
        "painting",
        "mural",
        "description",
        "history",
        "events",
      ],
      required: true,
    },
    link: String,
    likes: { type: Number, default: 0 },
    wrongMarks: { type: Number, default: 0 },
    replacementText: String,
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Submission", SubmissionSchema);
