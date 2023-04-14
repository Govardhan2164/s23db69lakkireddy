var trees = require('../models/trees');
// List of all treess

exports.trees_list = function(req, res) {
 res.send('NOT IMPLEMENTED: trees list');
};
// for a specific trees.
exports.trees_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: trees detail: ' + req.params.id);
};
// Handle trees create on POST.
exports.trees_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: trees create POST');
};
// Handle trees delete form on DELETE.
exports.trees_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: trees delete DELETE ' + req.params.id);
};
// Handle trees update form on PUT.
exports.trees_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: trees update PUT' + req.params.id);
};// List of all treess

// List of all trees
exports.trees_list = async function(req, res) {
    try{
    thetrees = await trees.find();
    res.send(thetrees);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };



// VIEWS
// Handle a show all view
exports.trees_view_all_Page = async function(req, res) {
    try{
    thetrees = await trees.find();
    res.render('trees', { title: 'treess Search Results', results: thetrees });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


   // Handle Costume create on POST.
exports.trees_create_post = async function(req, res) {
    console.log(req.body)
    let document = new trees();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"trees_type":"goat", "cost":12, "size":"large"}
    document.trees_Name = req.body.trees_type;
    document.trees_height = req.body.trees_size;
    document.trees_cost = req.body.trees_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};