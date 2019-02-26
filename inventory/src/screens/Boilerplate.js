import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onInputChange, loginUser, resetLogin } from '../actions';
import { BaseContainer, Container } from '../components/common';
import { Styles as CommonStyles } from '../components/util/CommonStyles';

class Boilerplate extends Component {

    /** screen independent configuration options */
    // static navigationOptions = {
    //     headerStyle: {
    //         backgroundColor: 'white'
    //     },
    // };
    /*******************************************/

    /** Screen functions */
    // screenFunction(args) {
    //     ... function body
    // }
    /*******************************************/

    /** Rendering functions */
    // renderErrorMessage() {
    //     if (this.props.error) {
    //         return (
    //             <Text style={CommonStyles.errorMessage}>
    //                 {this.props.error}
    //             </Text>
    //         );
    //     }
    // }
    /*******************************************/

    /** MAIN RENDER */
    // render() {
    //      return (... JSX); 
    // };
}

/** Styles local to screen */
// const Styles = {
//     screenArtifact: {}
// };
/*******************************************/

/** Redux helpers */
// const mapStateToProps = (state) => {
// return { ... }
// }
/*******************************************/

// export default connect(mapStateToProps, { 
//      ... methods needing dispatch
// })(Boilerplate);
