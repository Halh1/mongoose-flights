const Flight = require ('../models/flight');
const Ticket = require('../models/ticket');
module.exports = {
    index,
    new: newFlight,
    create,
    show
}


async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights', flights });
} 

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const ticket = await Ticket.find({ flight: flight._id }); 
    //console.log(tickets);
    res.render('flights/show', { title: 'Flight Detail', flight, ticket });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight',  errorMsg: '' });
} 

async function create(req, res) { 
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
    try {
        const flight = await Flight.create(req.body);
        res.redirect(`/flights/${flight._id}`);
    }   catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
    }
} 