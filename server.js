const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const db = require("./db/database.js");


const multer = require("multer");

// CREATES A LOCAL FOLDER
const upload = multer({ dest: "uploads" });

const cloudinary = require("cloudinary").v2;



const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const hash = (pass) => bcrypt.hashSync(pass, 10);


// CLOUDINARY CONFIG
cloudinary.config({
  cloud_name: "whah",
  api_key: "967934588341829",
  api_secret: "5tGQ-PeH3P4psCWHmTkZfzbsEsc",
});

// ULOAD.ANY(0) TAKES ANY TYPE OF DATA
app.post("/upload", upload.any(0), (req, res) => {
  // REQ.FILES[0].PATH GIVE US THE PATH FROM THE LOCAL FOLDER WITH FILE NAME
  let image = req.files[0].path;
  console.log("REQ========> ", req.files[0].path);

  try {
    // UPLOAD IMG TO CLOUDINARY
    cloudinary.uploader.upload(image, (error, result) => {
      error && res.send({ status: false, msg: error });
      res.send({ status: true, msg: result });
    });
  } catch (err) {
    res.send({ status: false, msg: err });
  }
  // THE RESPONSE WILL HAVE ALL THE DATA ABOUT THE UPLOADED IMG WE ONLY NEED THE URL FOR NOW
});

///////////////////////// Rgistration sTUDENT //////////////////////////////
app.post("/api/users/registration", (req, res) => {
  console.log("this is consol =>>>", req.body);
  var registerArray = [
    req.body.name,
    req.body.last,
    req.body.country,
    req.body.city,
    req.body.address,
    req.body.licence,
    req.body.dateOfBirth,
    req.body.placeOfBirth,
    req.body.nationality,
    req.body.educationlvl,
    req.body.field,
    req.body.postalcode,
    req.body.dreamJob,
    req.body.facebook,
    req.body.skills,
    req.body.languages,
    req.body.hobbies,
    req.body.image,
    req.body.summary,
    "false",
    req.body.username,
  ];
  db.registere(registerArray, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

//////////////////////// Registration COMPANY //////////////////////////////////////////

app.post("/api/users/registerCompany", (req, res) => {
  console.log("this is consol =>>>", req.body);

  var registerArray = [
    req.body.email,
    req.body.owner,
    req.body.field,
    req.body.numberOfEmployee,
    req.body.location,
    req.body.website,
    req.body.logo,
    req.body.about,
    "false",
    req.body.name,
  ];
  db.registerCompany(registerArray, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});


////////////////////////////// Registration TRAINING CENTER /////////////////////////////////////

app.post("/api/users/registerTrainingCenter", (req, res) => {

  var registerArray = [
    req.body.email,
    req.body.owner,
    req.body.trainingOptions,
    req.body.numberOfStudent,
    req.body.location,


    req.body.website ,

    req.body.logo,
    req.body.about,
    "false" , 
    req.body.name,
  ];
  db.registerTrainingCenter(registerArray, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

////////////////////////////// waiting for validation ///////////////////////////
app.post("/api/users/sendVerificationRequest", (req, res) => {
  var array = ["true", req.body.username];
  db.verificationRequest(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////////////// waiting for validation company ///////////////////////////
app.post("/api/users/sendVerificationRequestCompany", (req, res) => {
  var array = ["true", req.body.name];
  db.verificationRequestCompany(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////////////// waiting for validation center ///////////////////////////
app.post("/api/users/sendVerificationRequestCenter", (req, res) => {
  var array = ["true", req.body.name];
  db.verificationRequestCenter(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
//////////////////// Admin Side : Student Verification //////////////////
app.post("/api/users/verifyStudent", (req, res) => {
  var array = ["true", req.body.username];
  db.verifyStudent(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/api/users/rejectStudent", (req, res) => {
  var array = ["false", req.body.username];
  db.rejectStudent(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////////// Admin Side : Company Verififcation //////////////////////////////
app.post("/api/users/verifyCompanies", (req, res) => {
  var array = ["true", req.body.name];
  db.verifyCompanies(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/api/users/rejectCompanies", (req, res) => {
  var array = ["false", req.body.name];
  db.rejectCompanies(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////////// Admin Side :Training Center /////////////////////////////////

app.post("/api/users/verifyCenter", (req, res) => {
  var array = ["true", req.body.name];
  db.verifyCenter(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/api/users/rejectCenter", (req, res) => {
  var array = ["false", req.body.name];
  db.rejectCenter(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
//////////////////////////////////////////////////////////////////////////////

app.get("/api/users/getNonVerifiedStudents", async (req, res) => {
  try {
    const requests = await db.getNonVerifiedStudents();
    res.status(200).send(requests);
  } catch (err) {
    console.error(err);
  }
});

app.get("/api/users/getNonVerifiedCompanies", async (req, res) => {
  try {
    const requests = await db.getNonVerifiedCompany();
    res.status(200).send(requests);
  } catch (err) {
    console.error(err);
  }
});

app.get("/api/users/getNonVerifiedCenters", async (req, res) => {
  try {
    const requests = await db.getNonVerifiedCenters();
    res.status(200).send(requests);
  } catch (err) {
    console.error(err);
  }
});

app.post("/api/users/getUsersatate", (req, res) => {
  console.log(req.body);
  db.getUserStatus(req.body.username, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

app.post("/api/users/getCompanysatate", (req, res) => {
  console.log(req.body);
  db.getCompanyStatus(req.body.name, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

app.post("/api/users/getCentersatate", (req, res) => {
  console.log(req.body);
  db.getCenterStatus(req.body.name, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});



app.post("/addStudents", (req, res) => {
  console.log(req.body);
  var arr = [
    req.body.username,
    req.body.secretinfo,
    hash(req.body.password),
    req.body.email,
  ];
  db.addStudent(arr, (err, data) => {
    if (err) throw err;

    res.send(`${req.body.username} added succsesfully`);
  });
});

app.post("/login", (req, res) => {
  db.getUserInfo(req.body.username, (err, data) => {
    if (err) throw err;

    console.log(data[0].password);
    var boolean = bcrypt.compareSync(req.body.password, data[0].password);
    var obj = {
      username: req.body.username,
      password: data[0].password,
    };
    boolean
      ? jwt.sign(
          {
            obj,
          },
          "privatekey",
          {
            expiresIn: "1h",
          },
          (err, token) => {
            err ? console.log(err) : res.status(200).json({ token: token });
            db.saveUserToken(req.body.username, token, (err, data) => {
              if (err) throw err;
              console.log("token saved");
            });
          }
        )
      : res.send({ err });
  });
});
app.post("/addCompany", (req, res) => {
  var array = [req.body.name, hash(req.body.password)];
  db.addCompany(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.post("/loginCompanies", (req, res) => {
  db.logCompanies(req.body.name, (err, data) => {
    if (err) throw err;

    console.log(data[0].password);
    var boolean = bcrypt.compareSync(req.body.password, data[0].password);
    var obj = {
      name: req.body.name,
      password: data[0].password,
    };
    boolean
      ? jwt.sign(
          {
            obj,
          },
          "privatekey",
          {
            expiresIn: "1h",
          },
          (err, token) => {
            err ? console.log(err) : res.status(200).json({ token: token });
            db.saveCompToken(req.body.name, token, (err, data) => {
              if (err) throw err;
              console.log("token saved");
            });
          }
        )
      : res.send({ err });
  });
});
app.post("/addTC", (req, res) => {
  var array = [req.body.name, hash(req.body.password)];
  db.addTC(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.post("/loginTC", (req, res) => {
  db.logTC(req.body.name, (err, data) => {
    if (err) throw err;

    console.log(data[0].password);
    var boolean = bcrypt.compareSync(req.body.password, data[0].password);
    var obj = {
      name: req.body.name,
      password: data[0].password,
    };
    boolean
      ? jwt.sign(
          {
            obj,
          },
          "privatekey",
          {
            expiresIn: "1h",
          },
          (err, token) => {
            err ? console.log(err) : res.status(200).json({ token: token });
            db.saveTcToken(req.body.name, token, (err, data) => {
              if (err) throw err;
              console.log("token saved");
            });
          }
        )
      : res.send({ err });
  });
});

app.post("/api/users/studentToken", (req, res) => {
  db.selectUserByToken(req.body.token, (err, data) => {
    if (err) throw err;
    console.log("token saved");
    res.send(data);
  });
});

app.post("/api/users/companyToken", (req, res) => {
  db.selectCompanyByToken(req.body.token, (err, data) => {
    if (err) throw err;
    console.log("token saved");
    res.send(data);
  });
});

app.post("/api/users/TcToken", (req, res) => {
  db.selectTcByToken(req.body.token, (err, data) => {
    if (err) throw err;
    console.log("token saved");
    res.send(data);
  });
});


app.post("/api/users/Update", (req, res) => {
  var token = req.body["2"];
  var username = "";
  jwt.verify(token, "privatekey", (err, decoded) => {
    username = decoded.obj.username;
  });
  var obj = {}
  for(var i = 0 ; i < req.body[0].length ; i++){
    obj[req.body[1][i]] = req.body[0][i]
  }
  for(var key in obj){
    if(!obj[key]){
      delete obj[key]
    }
  }
  db.updateUser(username , obj, (err, data)=>{
    err? console.log(err) :console.log(data)
  })
});

app.post('/api/users/findProfil', (req, res)=>{
  var user = req.body.profilName
 db.fetchAllProfile((err, data)=>{
   if(err) throw err;
   var arrName = data.map(element => Object.values(element)).flat();
   if(arrName.includes(user)){
     db.fetchProfile(user, (err, result)=>{
      if(err) throw err;
      res.send(result)
     })
   }else {
     res.send(`user dosen't exist`)
   }
  })
})



app.get("/api/users/getNonVerifiedCenters", async (req, res) => {
  try {
    const requests = await db.getNonVerifiedCenters();
    res.status(200).send(requests);
  } catch (err) {
    console.error(err);
  }
});

app.post("/api/users/getUsersatate", (req, res) => {
  console.log(req.body);
  db.getUserStatus(req.body.username, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

app.post("/api/users/getCompanysatate", (req, res) => {
  console.log(req.body);
  db.getCompanyStatus(req.body.name, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

app.post("/api/users/getCentersatate", (req, res) => {
  console.log(req.body);
  db.getCenterStatus(req.body.name, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});


app.post("/addStudents", (req, res) => {
  console.log(req.body);
  var arr = [
    req.body.username,
    req.body.secretinfo,
    hash(req.body.password),
    req.body.email,
  ];
  db.addStudent(arr, (err, data) => {
    if (err) throw err;

    res.send(`${req.body.username} added succsesfully`);
  });
});

app.post("/login", (req, res) => {
  db.getUserInfo(req.body.username, (err, data) => {
    if (err) throw err;

    console.log(data[0].password);
    var boolean = bcrypt.compareSync(req.body.password, data[0].password);
    var obj = {
      username: req.body.username,
      password: data[0].password,
    };
    boolean
      ? jwt.sign(
          {
            obj,
          },
          "privatekey",
          {
            expiresIn: "1h",
          },
          (err, token) => {
            err ? console.log(err) : res.status(200).json({ token: token });
            db.saveUserToken(req.body.username, token, (err, data) => {
              if (err) throw err;
              console.log("token saved");
            });
          }
        )
      : res.send({ err });
  });
});
app.post("/addCompany", (req, res) => {
  var array = [req.body.name, hash(req.body.password)];
  db.addCompany(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.post("/loginCompanies", (req, res) => {
  db.logCompanies(req.body.name, (err, data) => {
    if (err) throw err;

    console.log(data[0].password);
    var boolean = bcrypt.compareSync(req.body.password, data[0].password);
    var obj = {
      name: req.body.name,
      password: data[0].password,
    };
    boolean
      ? jwt.sign(
          {
            obj,
          },
          "privatekey",
          {
            expiresIn: "1h",
          },
          (err, token) => {
            err ? console.log(err) : res.status(200).json({ token: token });
            db.saveCompToken(req.body.name, token, (err, data) => {
              if (err) throw err;
              console.log("token saved");
            });
          }
        )
      : res.send({ err });
  });
});
app.post("/addTC", (req, res) => {
  var array = [req.body.name, hash(req.body.password)];
  db.addTC(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.post("/loginTC", (req, res) => {
  db.logTC(req.body.name, (err, data) => {
    if (err) throw err;

    console.log(data[0].password);
    var boolean = bcrypt.compareSync(req.body.password, data[0].password);
    var obj = {
      name: req.body.name,
      password: data[0].password,
    };
    boolean
      ? jwt.sign(
          {
            obj,
          },
          "privatekey",
          {
            expiresIn: "1h",
          },
          (err, token) => {
            err ? console.log(err) : res.status(200).json({ token: token });
            db.saveTcToken(req.body.name, token, (err, data) => {
              if (err) throw err;
              console.log("token saved");
            });
          }
        )
      : res.send({ err });
  });
});

app.post("/api/users/studentToken", (req, res) => {
  db.selectUserByToken(req.body.token, (err, data) => {
    if (err) throw err;
    console.log("token saved");
    res.send(data);
  });
});

app.post("/api/users/companyToken", (req, res) => {
  db.selectCompanyByToken(req.body.token, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/api/users/TcToken", (req, res) => {
  db.selectTcByToken(req.body.token, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/api/company/Update", (req, res)=>{
  console.log(req.body)
  var token = req.body['2']
  console.log(token)
  var username = "";
  jwt.verify(token, "privatekey", (err, decoded) => {
    username = decoded.obj.name;
    console.log(username)
  });
  var obj = {}
  for(var i = 0 ; i < req.body[0].length ; i++){
    obj[req.body[1][i]] = req.body[0][i]
  }
  for(var key in obj){
    if(!obj[key]){
      delete obj[key]
    }
  }
 db.updateCompany(username , obj, (err, data)=>{
   err? console.log(err) :console.log(data)
 })
})



app.post('/api/addPosts', (req, res)=>{
  var postData = req.body['0']
  console.log(postData)
  db.savePosts( postData, (err, data)=>{
    if (err) throw err;
   console.log(data);
  })
})

app.post('/api/center/update', (req, res)=>{
  console.log(req.body)
  var token = req.body['2']
  var username = "";
  jwt.verify(token, "privatekey", (err, decoded) => {
    username = decoded.obj.name;
  });
  var obj = {}
  for(var i = 0 ; i < req.body[0].length ; i++){
    obj[req.body[1][i]] = req.body[0][i]
  }
  for(var key in obj){
    if(!obj[key]){
      delete obj[key]
    }
  }
  db.updateTc(username , obj, (err, data)=>{
    err? console.log(err) :console.log(data)
  })
})

app.listen(port, () => console.log(`server is listening on port ${port}`));
