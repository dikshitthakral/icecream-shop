'use strict';
const businessDetailsService = require('../services/businessDetails.service');

class BusinessDetails {

  static async getBusinessDetails(req, res) {
    try{
      const response = await businessDetailsService.getBusinessDetails()
      res.status(200).send(response);
    }catch(err){
      res.status(500).send({
        message: err.message || 'Error occured while fetching Business details.'
      })
    }
  }
}

module.exports = {
  getBusinessDetails: BusinessDetails.getBusinessDetails
}