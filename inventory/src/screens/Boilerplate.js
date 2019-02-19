import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onInputChange, loginUser, resetLogin } from '../actions';
import { BaseContainer, Container } from '../components/common';
import { Styles as CommonStyles } from '../components/util/CommonStyles';

class Boilerplate extends Component {

    /** screen independent configuration options */
    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'white'
        },
    };

    /** Screen functions */
    // onInputChanged(value) {
    //     this.props.onInputChangeFunction('field', value);
    // }
    // onButtonPress() {
    //     this.props.onButtonPressFunction();
    // }

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

    /** MAIN RENDER */
    render() {
        return (
            <BaseContainer customStyle={Styles.screen}>
                
                <Container customStyle={Styles.inputContainer}>
                    {this.renderErrorMessage()}
                </Container>

            </BaseContainer>
        );
    };
}

/** Styles local to screen */
// const Styles = {
//     screen: {
//         justifyContent: 'space-around',
//     },
//     inputContainer: {
//         justifyContent: 'flex-start',
//         width: '100%',
//         flex: 3
//     },
//     buttons: {
//         height: 60,
//         width: 175
//     },
// };

// const mapStateToProps = ({auth}) => {
//     const { email, password, error, loading } = auth;

//     return {
//         email,
//         password,
//         error,
//         loading
//     }
// }

// export default connect(mapStateToProps, { 
//     onInputChange, loginUser, resetLogin
// })(Boilerplate);
