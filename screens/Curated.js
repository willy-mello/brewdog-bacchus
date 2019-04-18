import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import OneBeer from '../components/OneBeer'
import paramMaker from '../constants/utils'
import ChoiceBoard from '../components/ChoiceBoard'



export default class Curated extends React.Component {
  constructor() {
    super()
    this.state = {
      beers: [],
      filters: {

      }
    }
    this.updateFilters = this.updateFilters.bind(this)
  }
  componentDidUpdate() {
    console.log('filters in update', this.state.filters)
  }

  updateFilters(obj) {
    let valueToChange = obj.value
    let queryName = obj.key
    console.log('queryName in switch', queryName)
    switch (queryName) {

      case "abv_lt":
        this.setState({ filters: { ...this.state.filters, abv_lt: valueToChange } })
        break;
      case "abv_gt":
        this.setState({ filters: { ...this.state.filters, abv_gt: valueToChange } })
        break;
      case "ibu_lt":
        this.setState({ filters: { ...this.state.filters, ibu_lt: valueToChange } })
        break;
      case "ibu_gt":
        this.setState({ filters: { ...this.state.filters, ibu_gt: valueToChange } })
        break;
      case "beer_name":
        this.setState({ filters: { ...this.state.filters, beer_name: valueToChange } })


        break;
      default:
        this.setState({ ...this.state })
    }

  }
  getAssortedBeers = async () => {

    try {
      let res = await fetch('https://api.punkapi.com/v2/beers?' + paramMaker(this.state.filters));
      const beers = await res.json()
      this.setState({ beers, filters: {} })
    } catch (error) {
      console.error(error)
    }
  }
  performActions() {
    this.getAssortedBeers()
    this.setState({ beers: [], filters: {} })
  }
  render() {
    return (

      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <TouchableOpacity onPress={this.getAssortedBeers} >

              <Image
                source={
                  require('../assets/images/bacchus.png')
                }
                style={styles.bacchusImage}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.getStartedContainer}>


            <Text style={styles.getStartedText}>Specify Your Wishes</Text>
            {Object.keys(this.state.filters).length ?
              <Text style={styles.getStartedText}>
                Listening to your specifications
     </Text>
              :
              <Text style={styles.getStartedText}>
                You havent made choices
</Text>
            }

            {this.state.beers.length ?

              this.state.beers.map((elem, idx) => <OneBeer key={idx + 1} beer={elem} />)
              :
              <Text style={styles.getStartedText}>
                Tap Bacchus after you have made some choices
         </Text>
            }

          </View>
          <ChoiceBoard updateFilters={this.updateFilters} />


        </ScrollView>
        {this.state.beers.length ?
          <View style={styles.welcomeContainer}>
            <TouchableOpacity onPress={() => this.setState({ beers: [], filters: {} })} >

              <Image
                source={
                  require('../assets/images/laocoon.png')
                }
                style={styles.laocoonImage}
              />
            </TouchableOpacity>
          </View>
          :
          <View>
            <Text style={styles.getStartedText}>
              When Laocoon appears
            </Text>
            <Text style={styles.getStartedText}>
              tap him to reset your choices
            </Text>
          </View>

        }


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bacchusImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },


  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  laocoonImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  }
});

