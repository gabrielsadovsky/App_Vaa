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
 *  TO CUSTOMIZE APIS IN StudentsApiGenerated.js PLEASE EDIT ../StudentsApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class StudentsApiGenerated {

  static contextUrl = properties.endpoint + "/students";

  // CRUD METHODS

  /**
  * StudentsService.create
  *   @description CRUD ACTION create
  *
  */
  static createStudents(students) {
    return axios.post(StudentsApiGenerated.contextUrl, students )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * StudentsService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteStudents(id) {
    return axios.delete(StudentsApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * StudentsService.findBy_classes
  *   @description CRUD ACTION findBy_classes
  *   @param Objectid key Id of model to search for
  *
  */
  static findBy_classes(id) {
    return axios.get(StudentsApiGenerated.contextUrl + "/findBy_classes/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * StudentsService.findBy_clubs
  *   @description CRUD ACTION findBy_clubs
  *   @param Objectid key Id of model to search for
  *
  */
  static findBy_clubs(id) {
    return axios.get(StudentsApiGenerated.contextUrl + "/findBy_clubs/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * StudentsService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneStudents(id) {
    return axios.get(StudentsApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * StudentsService.list
  *   @description CRUD ACTION list
  *
  */
  static getStudentsList() {
    return axios.get(StudentsApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * StudentsService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveStudents(students) {
    return axios.post(StudentsApiGenerated.contextUrl + "/" + students._id, students )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default StudentsApiGenerated;
