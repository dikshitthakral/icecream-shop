
const requestPromise = require('request-promise');
const businessReviews = require('./businessReviews.service');
const properties = require('../../config/properties-config');

class BusinessDetails {

  async getBusinessDetails() {
    const url = `https://api.yelp.com/v3/businesses/search?location=Alpharetta&categories=icecream&limit=5&sort_by=rating`;

    var options = {
      method: 'GET',
      uri: url,
      headers: {
        'Authorization': properties.Authorization
      },
      json: true
    };
    try {
      let businessDetailsResponse = await requestPromise.get(options);
      let businessDetailsResult;
      if (businessDetailsResponse) {
        var businessDetail = businessDetailsResponse.businesses;
        businessDetailsResult = await this.fetchBusinessReviews(businessDetail);
      }
      return businessDetailsResult;
    }
    catch (e) {
      console.error(e);
    }
  }

  async fetchBusinessReviews(businessDetails) {
    for (let i = 0; i < businessDetails.length; i++) {
      let reviews = await businessReviews.getReviewsByBusinessId({ businessId: businessDetails[i].id });
      businessDetails[i].reviews = reviews;
    }
    return businessDetails;
  }
}
module.exports = new BusinessDetails();
