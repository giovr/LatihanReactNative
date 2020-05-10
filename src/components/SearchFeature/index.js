import React from 'react';
import { View, TextInput, Image, StyleSheet} from 'react-native';


const SearchFeature = () => {
    return(
        <View style={styles.containerSearchBar}>
            <View style={{position: 'relative'}}>
                <TextInput 
                    placeholder = "Cari data berdasarkan provinsi"
                    placeholderTextColor = "lightslategrey"
                    style={styles.searchBar}/>
                <Image source={require('../../../assets/Icon/search1.png')} style={styles.containerIconSearch}/>
            </View >
        </View>
    )
}

export default SearchFeature;

const styles = StyleSheet.create({
    containerIconSearch:{
        position: 'absolute',
        top: 32,
        left: 10,
      },
      containerSearchBar:{
        marginHorizontal: 15,
      },
      searchBar:{
        marginTop:25,
        height: 40,
        paddingLeft: 50,
        paddingRight: 20,
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#808080',
        backgroundColor: 'white'
      },
})