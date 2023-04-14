var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var trees_controller = require('../controllers/trees');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// trees ROUTES ///
// POST request for creating a trees.
router.post('/trees', trees_controller.trees_create_post);
// DELETE request to delete trees.
router.delete('/trees/:id', trees_controller.trees_delete);
// PUT request to update trees.
router.put('/trees/:id', trees_controller.trees_update_put);
// GET request for one trees.
router.get('/trees/:id', trees_controller.trees_detail);
// GET request for list of all trees items.
router.get('/trees', trees_controller.trees_list);
module.exports = router;