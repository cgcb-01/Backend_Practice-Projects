import Monastery from "../models/Monastery.js";
import Submission from "../models/Submission.js";

// Search monasteries and show chosen video
export const searchMonasteries = async (req, res) => {
  try {
    const { q } = req.query;
    const filter = q ? { name: { $regex: q, $options: "i" } } : {};

    const monasteries = await Monastery.find(filter).populate(
      "chosen.video.submissionId"
    );

    const result = monasteries.map((m) => ({
      id: m._id,
      name: m.name,
      chosenVideo: m.chosen.video?.submissionId || null,
    }));

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all submissions for a monastery (chosen on top)
export const getMonasterySubmissions = async (req, res) => {
  try {
    const monastery = await Monastery.findById(req.params.id).populate(
      "chosen.video.submissionId"
    );
    if (!monastery)
      return res.status(404).json({ message: "Monastery not found" });

    const submissions = await Submission.find({
      monastery: monastery._id,
      status: { $ne: "rejected" },
    }).sort({ likes: -1, createdAt: -1 });

    let ordered = submissions;

    // Ensure chosen video comes first
    if (monastery.chosen.video?.submissionId) {
      const chosenId = monastery.chosen.video.submissionId._id.toString();
      ordered = [
        monastery.chosen.video.submissionId,
        ...submissions.filter((s) => s._id.toString() !== chosenId),
      ];
    }

    res.json({ monastery, submissions: ordered });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
