//Requires
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//Temporary data
let data = [{item:'cook'}, {item:'clean'}, {item:'water plants'}];

//Module export
module.exports = (app)=>{

  app.get('/todo', (req, res)=>{
    res.render('todo', {todos:data});
  });

  app.post('/todo', urlencodedParser, (req, res)=>{
    data.push(res.body); //Add res.body onto the data array.
    res.json(data); //send data in json format back to the client as a response
  });

  app.delete('/todo/:item', (req, res)=>{
    data = data.filter((todo)=>{
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
  });

};
