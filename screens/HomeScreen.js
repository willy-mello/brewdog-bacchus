import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import OneBeer from '../components/OneBeer'


export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      randomBeer: {}
    }
  }
  static navigationOptions = {
    header: null,
  };
  getRandomBeer = async () => {
    console.log('random pressed')
    try {
      const res = await fetch('https://api.punkapi.com/v2/beers/random')
      const beer = await res.json()
      this.setState({ randomBeer: beer[0] })
      console.log('rando beer', beer[0])
      console.log('state', this.state.randomBeer)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>

          </View>

          <View style={styles.getStartedContainer}>


            <Text style={styles.getStartedText}>Welcome to Beer Prayers</Text>
            <Text style={styles.getStartedText}>Let the Gods decide which of BrewDog Brewing's beers you shoud be drinking.</Text>
            <TouchableOpacity onPress={this.getRandomBeer} >
              <Image
                source={
                  require('../assets/images/bacchus.png')
                }
                style={styles.bacchusImage}
              />
            </TouchableOpacity>
            {this.state.randomBeer.abv ?

              <OneBeer beer={this.state.randomBeer} />
              :
              <Text style={styles.getStartedText}>
                Tap Bacchus to have a prayer answered.
         </Text>
            }

          </View>


        </ScrollView>


      </View>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  bacchusImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
