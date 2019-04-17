import React from 'react';
import {
  StyleSheet,
  Button,
  Picker,
  View,
} from 'react-native';

export default class ChoiceBoard extends React.Component {
  constructor() {
    super()
    this.state = {
      type: ''
    }
  }


  render() {
    const updateFilters = this.props.updateFilters
    return (

      <View style={styles.allChoices}>



        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => updateFilters({ key: 'abv_gt', value: 6 })}
            title={'High ABV'}
          >

          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => updateFilters({ key: 'abv_lt', value: 6 })}
            title={'Low ABV'}
          >
            Low ABV
            </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => updateFilters({ key: 'ibu_gt', value: 80 })}
            title={'High IBU'}
          >
            High IBU
            </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => updateFilters({ key: 'ibu_lt', value: 80 })}
            title={'Low IBU'}
          >
            Low IBU
            </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Picker
            // selectedValue={this.state.type}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue) => updateFilters({ key: "beer_name", value: itemValue })

            }>
            <Picker.Item label="IPA" value="IPA" />
            <Picker.Item label="Lager" value="Lager" />
          </Picker>
        </View>



      </View>

    )
  }
}



const styles = StyleSheet.create({
  allChoices: {
    flexWrap: 'wrap',
    margin: 5,
    padding: 2,
    flexDirection: "row",

  },
  button: {
    height: 50,
    width: 50,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    padding: 5,
    margin: 5
  },
  container: {
    flexDirection: 'column'
  }
})
