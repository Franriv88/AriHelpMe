import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import Card from './Card'; // importo mi tarjeta componente

const CityItem = (props) => {
	return (
		<Card styles={styles.card}>
				<View style={styles.screen}>
						<View>
								<View style={styles.firstLine}>
										<Text>{props.prediction.item.name}</Text>
								</View>
								<View style={styles.secondLine}>
										<Text style={styles.value}>
												<Image style={styles.image} source={require('../Icons/celsius.png')}/>
												&nbsp;&nbsp;
												Sensación térmica: {props.prediction.item.main.feels_like + " \u00B0" + "C" }
										</Text>
										<Text style={styles.value}>
												<Image style={styles.image} source={require('../Icons/sunset.png')}/>
												&nbsp;&nbsp;Hora del atardecer: {new Date(props.prediction.item.sys.sunset * 1000).toLocaleTimeString()}
										</Text>
										<Text style={styles.value}>
												<Image style={styles.image} source={require('../Icons/dawn.png')}/>
												&nbsp;&nbsp;Hora del amanecer: {new Date(props.prediction.item.sys.sunrise * 1000).toLocaleTimeString()}
										</Text>
								</View>
						</View>
				</View>
		</Card>
	);
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 5
    },
    screen: {
        flexDirection: 'row',
    },
    image: {
        width: 20,
        height: 20
    },
    firstLine: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    secondLine: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD',
        flexWrap: 'wrap'
    },
    value: {
        marginHorizontal: 2,
    }
});

export default CityItem;
