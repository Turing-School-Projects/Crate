import React, { Component } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import StyleSurveyBox from "./StyleSurveyBox";
import {connect} from 'react-redux'

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import { H3, H4 } from "../../ui/typography";
import Button from "../../ui/button";
import Icon from "../../ui/icon";
import { textLevel1 } from "../../ui/common/shadows";
import { white, grey, grey2, grey3 } from "../../ui/common/colors";

import { APP_URL } from "../../setup/config/env";
import userRoutes from "../../setup/routes/user";

const StyleSurvey = (props) => {
  return (
    <section>
      <Helmet>
        <title>My Style Preferences</title>
      </Helmet>
      { !props.user.stylePreference ? (
       <div>
       <Grid style={{ backgroundColor: grey }}>
         <GridCell style={{ padding: "2em", textAlign: "center" }}>
           <H3 font="secondary">My Style Preferences</H3>

           <p style={{ marginTop: "1em", color: grey2 }}>
             Please complete the survey below.
           </p>
         </GridCell>
       </Grid>
       <GridCell style={{ textAlign: "center", backgroundColor: grey }}>
         {/* <p style={{ marginBottom: '1em', color: grey2 }}>Like what you see?</p> */}
         <StyleSurveyBox />
       </GridCell>
       </div>
       ) : (
        <Grid style={{ backgroundColor: grey }}>
        <GridCell style={{ padding: "2em", textAlign: "center" }}>
          <H3 font="secondary">My Style Preferences</H3>

          <p style={{ marginTop: "1em", color: grey2 }}>
            Your style is ${props.user.stylePreference}
             {/* user.props.stylePreferneces and add profile state to bottom */}
          </p>
        </GridCell>
      </Grid>
       )}

      <Grid></Grid>
    </section>
  );
};

StyleSurvey.propTypes = {};

function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, null)(StyleSurvey)
// export default StyleSurvey;
