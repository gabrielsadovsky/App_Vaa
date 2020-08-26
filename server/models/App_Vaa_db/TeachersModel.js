import TeachersModelGenerated from "./generated/TeachersModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await TeachersModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TeachersModelGenerated,
  ...customModel
};
