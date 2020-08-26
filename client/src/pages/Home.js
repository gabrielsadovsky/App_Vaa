import React, { Component } from "react";
import { Link } from "react-router-dom";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions
import UserActions from '../redux/actions/UserActions';

// START IMPORT ACTIONS

// END IMPORT ACTIONS

/** APIs

**/

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>

        <h3>Sitemap</h3>
                    
        <div>
          <Link to="/users">Link to UserList</Link>
        </div>
        <div>
          <Link to="/teacherses">Link to TeachersList</Link>
        </div>
        <div>
          <Link to="/studentses">Link to StudentsList</Link>
        </div>
        <div>
          <Link to="/clubses">Link to ClubsList</Link>
        </div>
        <div>
          <Link to="/eventses">Link to EventsList</Link>
        </div>
        <div>
          <Link to="/countrieses">Link to CountriesList</Link>
        </div>
        <div>
          <Link to="/stateses">Link to StatesList</Link>
        </div>
        <div>
          <Link to="/citieses">Link to CitiesList</Link>
        </div>
        <div>
          <Link to="/classeses">Link to ClassesList</Link>
        </div>
        
            
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsUser: bindActionCreators(UserActions, dispatch)
  };
};

// Validate types
Home.propTypes = {
  actionsUser: PropTypes.object.isRequired
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    user: state.LoginReducer.user
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
