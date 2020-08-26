import ClassesModelGenerated from "./generated/ClassesModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ClassesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ClassesModelGenerated,
  ...customModel
};
