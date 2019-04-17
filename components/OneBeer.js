import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default OneBeer = (props) => {

  let image = props.beer.image_url
  let name = props.beer.name
  let tagline = props.beer.tagline
  let abv = props.beer.abv
  let ibu = props.beer.ibu
  let foodPairing = props.beer.food_pairing.join(' or ')

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      {
        image !== null ?
          <Image style={{ width: 50, height: 200 }} source={{ uri: image }} />
          :
          <Image style={{ width: 50, height: 200 }} source={require('../assets/images/beer.png')} />
      }
      <View style={{ flexDirection: 'column', alignSelf: 'center' }}>

        <Text style={styles.descriptionText} >
          The Gods have chosen for you to enjoy {name} this eve.
        It is a {tagline}
        </ Text>

        <Text style={styles.descriptionText}>
          ABV: {abv}% , IBU: {ibu}
        </Text>
        <Text style={styles.descriptionText}>
          Enjoy this brew with {foodPairing.toLowerCase()}.
      </Text>
      </View>
    </ View>
  )

}

const styles = StyleSheet.create({
  descriptionText: {
    margin: 5,
    padding: 2

  }
})