const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => { 
    //#swagger.tags=['Hello World']
    res.send('Hello World');
});

router.use('/pokemon', require('./pokemon'));
router.use('/trainer', require('./trainer'));

module.exports = router;