import {StyleSheet} from 'react-native';

const colors = {
    primary: '#282C34',
    white: '#e20c79',
}

const baseStyles = StyleSheet.create({
    Title:{
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 25,
        letterSpacing: 5,
    }
});

export default baseStyles;