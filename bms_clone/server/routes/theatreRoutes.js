const router = require("express").Router();
const Theatre = require("../models/theatreModel");
const Show = require("../models/showModel");

router.post("/add", async (req, res) => {
  try {
    const theatre = new Theatre(req.body);
    await theatre.save();
    res.send({
      success: true,
      message: "Theatre created",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Internal Server Error",
    });
  }
});

router.get("/getAllTheatresByOwnerId/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const theatres = await Theatre.find({ owner: userId });
    res.send({
      success: true,
      message: "Thatres fetched successfully",
      data: theatres,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Something went wrong",
      data: error,
    });
  }
});

router.post("/getTheatresByMovieId", async (req, res) => {
  try {
    const { movie, date } = req.body;
    const shows = await Show.find({ movie, date }).populate("theatre");

    

    // get unique theatres
    let uniqueTheatres = [];
    shows.forEach((show) => {
      const theatre = uniqueTheatres.find(
        (theatre) => theatre._id === show.theatre._id
      );

      if (!theatre) {
        const showsForThisTheatre = shows.filter(
          (showObj) => showObj.theatre._id === show.theatre._id
        );
        console.log(show)
        uniqueTheatres.push({
            ...show.theatre._doc,
            shows: showsForThisTheatre
        })
      }
    });

    res.send({
      success: true,
      message: "Theatres fetched successfully",
      data: uniqueTheatres,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Something went wrong",
      data: error,
    });
  }
});

router.get("/getAllTheatres", async (req, res) => {
  try {
    const theatres = await Theatre.find().populate("owner");
    res.send({
      success: true,
      message: "Theatres fetched successfully",
      data: theatres,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Something went wrong",
      data: error,
    });
  }
});

router.post("/delete", async (req, res) => {
  try {
    await Theatre.findByIdAndDelete(req.body.theatreId);
    res.send({
      success: true,
      message: "Theatre deleted successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Something went wrong",
    });
  }
});

router.put("/update", async (req, res) => {
  try {
    await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
    res.send({
      success: true,
      message: "Theatre updated successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Something went wrong",
    });
  }
});

exports.router = router;
