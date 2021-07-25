import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
    if(isAuthenticated) {
        return <Redirect to="/dashboard"></Redirect>
    }
    return(
        <section className="landing">
            <div className="dark-overlay">
                <div>
                    {/* <h1>Traveler</h1>
                    <p>Register, Login &amp; Login and Logout</p> */}
                    <br />
                    <div className="button">
                    {/* <Link to="/register">
                        Register
                    </Link>
                    <Link to="/login">
                        Login
                    </Link> */}

                    </div>
                </div>
            </div>
        </section>
    )
}

Landing.prototype = {
    isAuthenticated: PropTypes.bool,

}

const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated,
})

export default connect(mapStateToProps)(Landing)