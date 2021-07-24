import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { stat } from "fs";

const Dashboard = ({ auth: {user} }) => {
    return (
        <>
        <div style={{ marginTop: "6rem", textAlign: "center" }}>
            <h1>Welcome, {user && user.name}</h1>
        </div>
        </>
    )
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
}

const mapStateTopProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateTopProps)