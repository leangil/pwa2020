var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/:id', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function (req, res, next) {
  res.send('post users');
});
router.put('/:id', function (req, res, next) {
  console.log(req.params.id)
  res.send('put users');
});
router.get('/login', function (req, res, next) {
  res.send('hola mundo');
});

module.exports = router;
