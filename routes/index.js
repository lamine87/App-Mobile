var express = require('express');
var router = express.Router();

function logger(req, res, next){
 // firstname: req.params.name,
  if(req.params.name === "lamine") {
      req.params.name = "Truc";
      req.body.name = "Truc";
      req.query.name = "Truc";
  }
 
 console.log(req);
 next();
}



/**
 * @swagger
 * /profile/{val}:
 *  get:
 *    summary: Display name
 *    tags: [profile]
 *    parameters:
 *      - in: path
 *        name: val
 *        schema:
 *          type: string   
 *        required: true
 *        description: The name.
 *    responses:
 *      200:
 *        description: Get name
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *      500:
 *        description:  server error
 */

router.get('/profile/:val', async function(req, res, next) {
    
    const val = req.params.val * 2;
   
    const data = await fetch('https://f26d-92-154-123-241.ngrok-free.app/profile/process-number/' + val);
    const response = await data.json();
    res.json(response);

});











/* GET home page. */
// router.get('/:name?', logger, function(req, res, next) {
//   res.json({
//      firstname: req.params.name,
//     });
// });


module.exports = router;
