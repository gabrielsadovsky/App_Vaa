/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE APIS IN ClassesApiGenerated.js PLEASE EDIT ../ClassesApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class ClassesApiGenerated {

  static contextUrl = properties.endpoint + "/classes";

  // CRUD METHODS

  /**
  * ClassesService.create
  *   @description CRUD ACTION create
  *
  */
  static createClasses(classes) {
    return axios.post(ClassesApiGenerated.contextUrl, classes )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ClassesService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteClasses(id) {
    return axios.delete(ClassesApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ClassesService.findBy_club
  *   @description CRUD ACTION findBy_club
  *   @param Objectid key Id of model to search for
  *
  */
  static findBy_club(id) {
    return axios.get(ClassesApiGenerated.contextUrl + "/findBy_club/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ClassesService.findBy_student
  *   @description CRUD ACTION findBy_student
  *   @param Objectid key Id of model to search for
  *
  */
  static findBy_student(id) {
    return axios.get(ClassesApiGenerated.contextUrl + "/findBy_student/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ClassesService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneClasses(id) {
    return axios.get(ClassesApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ClassesService.list
  *   @description CRUD ACTION list
  *
  */
  static getClassesList() {
    return axios.get(ClassesApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ClassesService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveClasses(classes) {
    return axios.post(ClassesApiGenerated.contextUrl + "/" + classes._id, classes )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default ClassesApiGenerated;