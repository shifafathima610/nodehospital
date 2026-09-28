const Docter = require("../models/doctermodel");
const Review = require("../models/reviewmodel");


exports.add = async (req, res) => {
  try {
    await Review.create(req.body);
    res.send("Review Added");
  } catch (err) {
    res.status(500).send(err.message);
  }
};


// Get all doctors
exports.get = async (req, res) => {
  try {
    const review = await Review.findAll({
      include:  [
        { model: Docter, as: "docter" }
      ]
    });
    res.json(review);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch review");
  }
};

exports.getreviewById = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (!review) {
      return res.status(404).json({ message: "reviw not found" });
    }
    res.json(review);
  } catch (err) {
    res.status(500).send(err.message);
  }
};