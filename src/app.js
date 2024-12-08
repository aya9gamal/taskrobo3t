const mongodb = require("mongodb");
const mongoclient = mongodb.MongoClient;
const connectionUrl = "mongodb://127.0.0.1:27017";
const dbname = "task-1";
mongoclient.connect(connectionUrl, (error, res1) => {
  if (error) {
    console.log("error has occured");
  } else {
    console.log("all pref");
  }
  const db = res1.db(dbname);
  //// insert one
//   db.collection('users').insertOne({
//       name : 'aya',
//       age :25,
//       city :'assuit'
//   },(error,data)=>{
//       if (error){
//           console.log(error)
//       }
//       console.log(data)
//   })

//   db.collection('users').insertOne({
//       name : "asmaa",
//       age :26,
//       city : 'cairo'
//   },(error,data)=>{
//       if (error){
//           console.log(error)
//       }
//       console.log(data)
//   })



  /////insertmany
//   db.collection('users').insertMany([
//       {
//           name : 'fatma',
//           age : 21,
//           city : 'Giza'

//       },
//       {
//           name : 'mona',
//           age :22,
//           city : 'mina'
//       },
//       {
//           name : 'omar',
//           age :23,
//           city : 'assuit'
//       },
//       {
//           name : 'ahmed',
//           age :24,
//           city : 'Cairo'
//       },
//       {
//           name : 'amr',
//           age :25,
//           city : 'giza'
//       },
//       {
//           name : 'mona',
//           age :27,
//           city : 'Cairo'
//       },
//       {
//           name : 'gamal',
//           age :27,
//           city : 'Assuit'
//       },
//       {
//           name : 'Mohmed',
//           age :27,
//           city : 'Assuit'
//       },
//       {
//           name : 'ali',
//           age :27,
//           city : 'Assuit'
//       },
//       {
//           name : 'rabab',
//           age :27,
//           city : 'Assuit'
//       }
//   ]).then((data)=>{console.log(data.insertedCount)})
//     .catch((error)=>{console.log(error)})

  // /// find age 27
     db.collection('users').find({age : 27}).toArray((error,data)=>{
      if ( error ){
          console.log("error ")
      }
      console.log(data)
     })

  //fin first 3

  db.collection('users').find({age : 27}).limit(3).toArray((error,data)=>{
      if ( error ){
          console.log("error ")
      }
      console.log(data)
     })

  //////upadat

  
// db.collection('users').find().limit(4).forEach(
//     (doc)=>{
//         db.collection('users').updateMany({
//             _id : doc._id
//         },{
//             $set:{name : "anor"},
           
//         })
//     }
// )

// $inc firt four age +10
// db.collection('users').find({age:27}).limit(4).forEach(
//     (doc)=>{
//         db.collection('users').updateMany({
//             _id : doc._id
//         },{
//             $inc :{age : 10} 
           
//         })
//     }
// )

// $inc all +10
//  db.collection('users').updateMany({},{
//     $inc : {age :10}
//  }).then((data)=>{console.log(data.modifiedCount)})
//  .catch((error)=>{console.log(error)})

// delate many age :47
// db.collection('users').deleteMany({age : 47})
// .then((data)=>{console.log(data.deletedCount)})
// .catch((error)=>{console.log(error)})

});
