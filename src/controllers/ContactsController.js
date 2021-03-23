const { render } = require('ejs');
const Contact = require('../models/Contacts');

module.exports = {
    async index(req, res) {        
        try {
            const contacts = await Contact.find({});
            res.render('index', { contacts });

        } catch (err) {

            console.log(err);
            return render('index');
        }
    },
    async store(req, res) {
        const { email } = req.body;
        let contact = await Contact.findOne({email});

        if (!contact) {
            contact = await Contact.create(req.body)
        }

        return res.redirect('/');
    }
}