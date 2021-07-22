const express = require("express");
const toursRouter = express.Router();

let tours = [
	{
		id: 1,
		breweryId: 9242,
		numberPeople: 2,
		date: "23/12/2021",
	},
	{
		id: 2,
		breweryId: 9180,
		numberPeople: 4,
		date: "22/12/2021",
	},
];

toursRouter.get("/", (req, res) => {
	const tourDate = req.query["tour_date"];
    console.log("req.query", req.query)
    console.log(tourDate)

    const isDateInDB = tours.filter(tour => tour.date === tourDate)

	if (isDateInDB.length !== 0) {
		res.json(isDateInDB);
	} else {
		res.json(`Sorry, there are no tours on the ${tourDate}`);
	}
});
toursRouter.get("/:id", (req, res) => {
	const tourId = Number(req.params.id);

	const foundTour = tours.find((tour) => tour.id === tourId);

	if (foundTour) {
		res.json(foundTour);
	} else {
		res.json({ msg: `Sorry, no tours with id: ${tourId}` });
	}
});
toursRouter.post("/", (req, res) => {
	const newTour = req.body;
	tours = [...tours, newTour];

	res.json({ newTour: newTour });
});
toursRouter.delete("/:id", (req, res) => {
	const tourToDeleteId = Number(req.params.id);

	const tourToDelete = tours.find((tour) => tour.id === tourToDeleteId);
	if (tourToDelete) {
		const newBreweries = breweries.map((tour) => {
			if (tour.id === tourToDeleteId) {
				return;
			} else {
				return tour;
			}
		});
		breweries = newBreweries;
		res.json({ deletedBrewerry: breweryToDelete });
	} else {
		res.status(404);
		res.json(`Error 404`);
	}
});

module.exports = toursRouter;
