import callApi from './../common/callApi.js';
import constants from './../common/constants.js';

export default class shiftService{
  constructor($http, $q,$cookies){
    console.log("into service constructor: ");
    this.http = $http;
    this.promise = $q;
    this.api = new callApi($http, $q,$cookies);
    this.constants = new constants();
  }

  getShiftMaster(){
    return this.promise((resolve, reject) =>{
      const shiftMasterUrl = this.constants.baseUrl + constants.shift().shiftMaster;
      console.log(shiftMasterUrl);
      this.api.get(shiftMasterUrl)
          .then((response) => {
            return resolve(response);
          })
          .catch((err) => {
            console.log("error occurred - get shift master shiftService.js - line#21 ");
            return reject(err);
          });
    })
  }

  getEmployeeShifts(weekNo, year){
    return this.promise((resolve, reject) => {
      const data = {
        "shiftInquiry":{
            "weekNo": weekNo,
            "year": year
        }
      };

      const getShiftsUrl = this.constants.baseUrl + constants.shift().getShifts;
      this.api.post(getShiftsUrl, data)
          .then((response) => {
            return resolve(response);
          })
          .catch((err) => {
            console.log("error occurred - post employee shifts shiftService.js - line#26 ");
            return reject(err);
          });
    })
  }
}
