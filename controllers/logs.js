module.exports = {
    create
  };
  
  function create(req, res) {
    // Baby step...
    res.json({
      user: {
        title: req.body.title,
        entry: req.body.entry
      }
    });
  }