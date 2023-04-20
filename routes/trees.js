var express = require('express');



const trees_controlers= require('../controllers/trees');
var router = express.Router();
/* GET treess */
router.get('/', trees_controlers.trees_view_all_Page );
module.exports = router;

/* GET detail trees page */
router.get('/detail', trees_controlers.trees_view_one_Page);

/* GET create trees page */
router.get('/create', trees_controlers.trees_create_Page);


/* GET create update page */
router.get('/update', trees_controlers.trees_update_Page);

router.get('/delete', trees_controlers.trees_delete_Page);