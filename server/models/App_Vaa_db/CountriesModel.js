import CountriesModelGenerated from "./generated/CountriesModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CountriesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CountriesModelGenerated,
  ...customModel
};
