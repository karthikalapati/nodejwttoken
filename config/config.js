const database = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'Srinandu@18',
      database : 'shiftmanagment'
    }
  });

  database.connection((err)=>{
      if(err){
          console.log("Database not connected...");
      }else{
          console.log("Database connected...");
      }
  })

  module.exports=database