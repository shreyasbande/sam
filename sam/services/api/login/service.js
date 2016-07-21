'use strict'
const dbAccess = include('common/dataAccess.js');
const queries  = include('api/login/queries.js');
const database = include('common/config.js');

class Info{
  constructor(id){
    console.log("id: ", id);
    this.db     = new dbAccess.Operations(id);

  }


  validateUser(){
    const base = this;
    var response={
      "resTypeCode"    :'',
      "resTypeMessage" : ''
    }
    return new Promises((resolve, reject) => {
      var user = 'Sujeet';
      var password = 'password';
      params.push(user,password);
      const userDetailsQuery = queries.userDetails(params);
      console.log("userDetailsQuery " ,userDetailsQuery.value);
      base.db.fetch(userDetailsQuery, database.samDb)
        .then((userDetails) => {
          console.log("userDetails "+JSON.stringify(userDetails));
          if(userDetails.username== user && userDetails.password==password){
            if(userDetails.isadmin){
             response.resTypeCode=200;
             response.resTypeMessage='Success';
            }
             else {
              response.resTypeCode=200;
              response.resTypeMessage="no privileges";
            }
          }
            else{
            response.resTypeCode=200;
            response.resTypeMessage='invalid user';
          }

          resolve(response);
        })
        .catch((error) => {
          console.log("error in getting the shift details of the week ", error);
        });
    })
  }
}

module.exports.Info = Info;