import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countryActions from '../redux/actions/countryActions';
import JSONPretty from 'react-json-prettify';

const DetailPage = (props) => {
  const { actions, stateFromRedux } = props;
  let { code } = useParams();

  const getCountryDetailInfo = () => {
    let jsonData = (stateFromRedux.countries.filter(x => x.alpha3Code === code)[0]);
    return <JSONPretty json={jsonData} />;
  };

  return (
    <>
      <Container>
        <Paper>
            {getCountryDetailInfo(code)}
        </Paper>
      </Container>
    </>
  );
};


// --The state from redux is always mapped to the props with this method
function mapStateToProps(state) {
  return {
    stateFromRedux: state.countryReducer,
  };
}

// --The actipn dispatchers are always mapped to the props with this method
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(countryActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);