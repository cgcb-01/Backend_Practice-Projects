import Submission from "../models/Submission.js";
import Monastery from "../models/Monastery.js";

// Upload new submission
export const createSubmission = async (req, res) => {
  try {
    const { monasteryId, type, link } = req.body;
    const monastery = await Monastery.findById(monasteryId);
    if (!monastery)
      return res.status(404).json({ message: "Monastery not found" });

    const submission = await Submission.create({
      monastery: monasteryId,
      user: req.user.id,
      type,
      link,
    });

    res.json({ message: "Submission added", submission });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Like
export const likeSubmission = async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) return res.status(404).json({ message: "Not found" });

    submission.likes += 1;
    await submission.save();
    res.json({ likes: submission.likes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mark wrong
export const markWrong = async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) return res.status(404).json({ message: "Not found" });

    submission.wrongMarks += 1;

    if (submission.wrongMarks > 15) {
      submission.status = "rejected";
    }

    await submission.save();
    res.json({ wrongMarks: submission.wrongMarks, status: submission.status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
