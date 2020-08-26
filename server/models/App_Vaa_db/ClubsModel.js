import ClubsModelGenerated from "./generated/ClubsModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ClubsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ClubsModelGenerated,
  ...customModel
};
