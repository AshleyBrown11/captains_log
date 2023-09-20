const express =require('express')
const Log =require('../models/logs')
const router = express.Router()


// Index
router.get('/logs', async (req, res) => {
  try {
    const foundLogs = await Log.find({});
    console.log(foundLogs);
    res.status(200).render('Index', {
      logs: foundLogs,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

  // New
  router.get('/logs/new', (req, res) => {
    res.render('New');
  });

  router.put('/logs/:id', async (req, res) => {
    try {
      if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true;
      }
      else {
        req.body.shipIsBroken = false;
      }
      const updatedLog = await Log.findByIdAndUpdate(
        // id is from the url that we got by clicking on the edit <a/> tag
        req.params.id,
        // the information from the form, with the update that we made above
        req.body,
        // need this to prevent a delay in the update
        { new: true })
      console.log(updatedLog);
      res.redirect(`/logs/${req.params.id}`);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  // Delete
  router.delete('/logs/:id', async (req, res) => {
    // this is is going to actually implement the delete functionality from the database
    try {
      // we are getting this id from the req params (:id)
      await Log.findByIdAndDelete(req.params.id);
      res.status(200).redirect('/logs');
    } catch (err) {
      res.status(400).send(err);
    }
  
    // we had this in originally to test that the route worked.  
    // res.send('deleting...');
  })
  
  //Create
  router.post('/logs', async (req, res) => {
    try {
      // if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
      //   req.body.readyToEat = true; //do some data correction
      // } else { //if not checked, req.body.readyToEat is undefined
      //   req.body.readyToEat = false; //do some data correction
      // }
      req.body.shipIsBroken = req.body.shipIsBroken === 'on';
  
      const createdLog = await Log.create(req.body);
  
      res.status(201).redirect('/logs');
    } catch (err) {
      res.status(400).send(err);
    }
  });

  // // Edit
  router.get('/logs/:id/edit', async (req, res) => {
    try {
      // find the document in the database that we want to update 
      const foundLog = await Log.findById(req.params.id);
      res.render('Edit', {
        log: foundLog //pass in the foundFruit so that we can prefill the form
      })
    } catch (err) {
      res.status(400).send(err);
    }
  })
  
  // // Show 
  router.get('/logs/:id', async (req, res) => {
    try {
      const foundLog = await Log.findById(req.params.id);
  
      //second param of the render method must be an object
      res.render('Show', {
        
        log: foundLog,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  });


  module.exports = router
  