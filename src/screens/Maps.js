import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'



const Maps = () => {

    var mapStyle = require('../../assets/mapstyle.json')

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 24.4135615,
                    longitude: 54.4592446,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
                provider={PROVIDER_GOOGLE}
                customMapStyle={mapStyle}>
                <Marker
                    coordinate={{ latitude: 24.4135615, longitude: 54.4592446 }}
                />
                <Circle center={{ latitude: 24.4135615, longitude: 54.4592446 }}
                    radius={10}
                    fillColor='#f34D21'
                    zIndex={5} />

                <Marker draggable
                    coordinate={{ latitude: 24.4535615, longitude: 54.4692446 }}
                //onDragEnd={{}}
                />
            </MapView>
        </SafeAreaView>
    )
}

export default Maps

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject, //Very important. Check Readme.
    },

});