import Monastery from "../models/Monastery.js";
import Submission from "../models/Submission.js";

// Approve & mark a submission as chosen for a monastery + type (e.g. video, painting, history)
export const chooseSubmission = async (req, res) => {
  try {
    const { monasteryId, submissionId, type } = req.body;
    // type must be one of: "video", "painting", "history", etc.

    const monastery = await Monastery.findById(monasteryId);
    if (!monastery)
      return res.status(404).json({ message: "Monastery not found" });

    const submission = await Submission.findById(submissionId);
    if (!submission)
      return res.status(404).json({ message: "Submission not found" });

    // Mark monastery chosen
    monastery.chosen[type] = {
      submissionId: submission._id,
      chosenAt: new Date(),
      chosenByAdmin: true,
    };
    await monastery.save();

    // Mark submission as approved
    submission.status = "approved";
    await submission.save();

    res.json({
      message: `Submission chosen as ${type} for ${monastery.name}`,
      monastery,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
