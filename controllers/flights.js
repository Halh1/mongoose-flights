const Flight = require ('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
}


async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', {title: 'All Flights', flights});
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight', errorMsg: '' });
}

async function create(req, res) {
    for (let key in req,body) {
        if(req.body[key] === '') delete req.body[key];
    }
    try {
        const movie = await Flight.create(req.body);
        res.redirect(`/flights/${flight._id}`);
    }   catch (err) {
        console.log(err);
        res.render('/flights/new', { errorMsg: err.message });
    }
}