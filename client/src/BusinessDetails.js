import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from "@material-ui/core/CardMedia";
import './App.css';

class BusinessDetails extends Component {
  constructor() {
    super();
    this.state = {
      businessDetails: []
    }
  }


  componentDidMount() {
    fetch('/api/businessDetails')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({ businessDetails: data });
        console.log(this.state.businessDetails);
      })
  }

  render() {
    return (<div>
      {this.state.businessDetails.map(businessDetail => {
        return (<Card>
          <CardContent>
            <h3>{businessDetail.name} , {businessDetail.alias}</h3>
            <p><strong>Ratings</strong> : {businessDetail.rating} <br />
              <strong>Address</strong> : {businessDetail.location.address1} , {businessDetail.location.city}</p>
            <ul>
              {businessDetail.reviews.map(review => {
                return (<>
                  <li><strong>Reviewer Name</strong> : {review.user.name}</li>
                  <li><strong>Reviewer Comment</strong> : {review.text}</li>
                </>)
              })}
            </ul>
            <img className="images" src={businessDetail.image_url} />
          </CardContent>
        </Card>);
      }
      )}
    </div>);

  }
}

export default BusinessDetails;