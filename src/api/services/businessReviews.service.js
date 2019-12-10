const requestPromise = require('request-promise');
const properties = require('../../config/properties-config');

class BusinessReviews {

  async getReviewsByBusinessId(params) {
    var { businessId } = params;
    const url = `https://api.yelp.com/v3/businesses/${businessId}/reviews`;

    var options = {
      method: 'GET',
      uri: url,
      headers: {
        'Authorization': properties.Authorization
      },
      json: true
    };

    try {
      let businessReviewsResponse = await requestPromise.get(options);
      if (businessReviewsResponse) {
        return businessReviewsResponse.reviews;
      }
    }
    catch (e) {
      console.error(e);
    }
  }
}

module.exports = new BusinessReviews();