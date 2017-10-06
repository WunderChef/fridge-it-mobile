import React from 'react';
import {
  Button,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import * as itemActions from '../actions/itemActions'

const CategoryListEntry = (props) => {
  return (
    <View style={styles.listEntryContainer}>
      <View style={styles.listEntryRow}>
        <View style={{...styles.label, ...styles.quantityView}}>
          <Text style={{...styles.quantity, ...styles.text}}>{props.foodItem.quantity}</Text>
        </View>
        <View style={{...styles.label, ...styles.nameView}}>
          <Text style={{...styles.name, ...styles.text}}>{props.foodItem.name}</Text>
        </View>
        <View style={{...styles.label, ...styles.dateView}}>
          <Text style={{...styles.date, ...styles.text}} >{props.foodItem.createdAt.split('T')[0]}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={props.edit.bind(
              null, 
              {
                name: props.foodItem.name, 
                quantity: props.foodItem.quantity - 1,
                type: props.foodItem.type
              },
              props.foodItem.id
            )}
          >
            <View>
              <Image
                style={styles.image}
                source={require('../images/subtract.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button} 
            onPress={props.edit.bind(
              null, 
              {
                name: props.foodItem.name, 
                quantity: props.foodItem.quantity + 1,
                type: props.foodItem.type
              },
              props.foodItem.id
            )}
          >
            <View>
              <Image
                style={styles.image}
                source={require('../images/add.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button} 
            onPress={props.delete.bind(null, props.foodItem.id)}
          >
            <View>
              <Image
                style={styles.image}
                source={require('../images/trash.png')}
              />
            </View>
          </TouchableOpacity> 
        </View>
      </View>
    </View>
  )
}

const styles = {
  listEntryContainer: {
    height: 50,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 30
  },
  listEntryRow: {
    flex: 1,
    flexDirection: 'row'
  },
  label: {
    alignContent: 'center', 
    justifyContent: 'center',
  },
  quantityView: {
    flex: 1
  },
  nameView: {
    flex: 4
  },
  dateView: {
    flex: 4
  },
  quantity: {
    alignSelf: 'center'
  },
  name: {
    alignSelf: 'center'
  },
  date: {
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 5,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    alignSelf: 'center',
    height: 20,
    width: 20
  },
  text: {
    color: '#00000099'
  }

}

export default CategoryListEntry;