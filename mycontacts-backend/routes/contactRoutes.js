const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController');

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// router.route('/').get((req, res) => {
//   res.status(200).json({ message: 'get all contact request' });
// });

// router.route('/').post((req, res) => {
//   res.status(200).json({ message: 'post contact request' });
// });

// router.route('/:id').get((req, res) => {
//   const {id}=req.params
//   console.log(id);
//   console.log(req.query);
//   res.status(200).json({ message: 'get single contact request' });
// });
// router.route('/:id').put((req, res) => {
//   console.log(req.params);
//   res.status(201).json({ message: 'update single contact request' });
// });
// router.route('/:id').delete((req, res) => {
//   console.log(req.params);
//   res.status(200).json({ message: 'delete single contact request' });
// });

// router.get(':id', (req, res) => {
//   const id = req.params;
//   console.log(id);
//   res.status(200).json({ message: `requested id is ${id} `});
// });

// router.get('/', (req, res) => {
//   res.status(200).json({ message: 'get request' });
// });
// router.post('/', (req, res) => {
// const {name,email}=req.body;
//   res.status(200).json({ message: `post request data = ${name} and ${email}` });
// });

module.exports = router;
