import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => { // tarjeta donde va a estar la información que quiero mostrar

    return (
    <View style={{ ...styles.card, ...props.styles }}>
    {props.children}
    </View>
    );
};

const styles = StyleSheet.create({
	card: {
		alignItems: 'center',
		shadowColor: 'black',
		shadowOffset: {
		width: 0,
		height: 2
	},
    shadowRadius: 6,
    shadowOpacity: 0.32,
    backgroundColor: 'white',
    elevation: 4,
    padding: 12,
    borderRadius: 12
    }
});

export default Card;
