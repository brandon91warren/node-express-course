const { people } = require("../data");

const addPerson = (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });
};

const getPeople = (req, res) => {
    res.status(200).json(people);
};

const getPersonById = (req, res) => {
    const personId = parseInt(req.params.id, 10);
    const person = people.find(p => p.id === personId);
    if (!person) {
        return res.status(404).json({ success: false, message: "Person not found" });
    }
    res.status(200).json(person);
};

const updatePerson = (req, res) => {
    const personId = parseInt(req.params.id, 10);
    const person = people.find(p => p.id === personId);
    if (!person) {
        return res.status(404).json({ success: false, message: "Person not found" });
    }
    person.name = req.body.name || person.name;
    res.status(200).json({ success: true, name: person.name });
};

const deletePerson = (req, res) => {
    const personId = parseInt(req.params.id, 10);
    const personIndex = people.findIndex(p => p.id === personId);
    if (personIndex === -1) {
        return res.status(404).json({ success: false, message: "Person not found" });
    }
    people.splice(personIndex, 1);
    res.status(200).json({ success: true, message: "Person deleted" });
};

module.exports = { addPerson, getPeople, getPersonById, updatePerson, deletePerson };
