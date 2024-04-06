const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
}

async function newTicket(req, res) {
    const flightId = await req.params.id;
    res.render('tickets/new', { title: 'Tickets', flightId})
}

async function create(req, res) {
    req.body.flight = req.params.id;
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.redirect(`/flights${req.params.id}`);
}