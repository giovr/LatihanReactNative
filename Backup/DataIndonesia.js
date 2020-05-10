import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class DataIndonesia extends Component {
    constructor(){
        super();
        this.state={
          dataApiKeseluruhan:{},
          refreshing: false
        }
      }
        
    onRefresh= () =>{
        this.getDataApi();
    }

    componentDidMount = () =>{
        this.getDataApi();
    }

    getDataApi = async () => {
        this.setState({refreshing: true})
        const response = await fetch('https://indonesia-covid-19.mathdro.id/api')
        const dataApiKeseluruhan = await response.json()
        const { jumlahKasus , sembuh , perawatan, meninggal} = await dataApiKeseluruhan
        this.setState({
            dataApiKeseluruhan: {
                jumlahKasus: await jumlahKasus,
                sembuh: await sembuh,
                perawatan: await perawatan,
                meninggal: await meninggal
            },
            refreshing: false
        })
    }

    render() {
        if (!this.state.dataApiKeseluruhan.jumlahKasus) {
            return <Text style={styles.textLoading}>Loading...</Text>
        }
        if (!this.state.dataApiKeseluruhan.sembuh){
            return <Text style={styles.textLoading}>Loading...</Text>
        }
        if (!this.state.dataApiKeseluruhan.perawatan){
            return <Text style={styles.textLoading}>Loading...</Text>
        }
        if (!this.state.dataApiKeseluruhan.meninggal){
            return <Text style={styles.textLoading}>Loading...</Text>
        }
        return (
            <View>
                {/* Bagian Search Bar */}
                <View style={styles.containerSearchBar}>
                    <View style={{position: 'relative'}}>
                        <TextInput 
                            placeholder = "Cari data berdasarkan provinsi"
                            placeholderTextColor = "lightslategrey"
                            style={styles.searchBar}/>
                        <Image source={require('../Icon/search1.png')} style={styles.containerIconSearch}/>
                    </View>
                </View>
                {/* Bagian Data Covid-19 Indonesia Keseluruhan*/}
                <View style={styles.containerDataIndo}>
                    <View style={styles.ContainerSubDataIndo}>
                        <Text style={styles.textDataIndo}>Data Indonesia</Text>
                    </View>
                    <View style={styles.containerDataApi}>
                        <View style={styles.containerIsiDataLabel}>
                            <Text style={styles.textLabelData}>Jumlah Kasus</Text>
                            <Text style={styles.textLabelData}>Sembuh</Text>
                            <Text style={styles.textLabelData}>Perawatan</Text>
                            <Text style={styles.textLabelData}>Meninggal</Text>
                        </View>
                        <View style={styles.containerIsiDataApi}>
                            <Text style={styles.dataJumlahKasus}>{this.state.dataApiKeseluruhan.jumlahKasus}</Text>
                            <Text style={styles.dataSembuh}>{this.state.dataApiKeseluruhan.sembuh}</Text>
                            <Text style={styles.dataPerawatan}>{this.state.dataApiKeseluruhan.perawatan}</Text>
                            <Text style={styles.dataMeninggal}>{this.state.dataApiKeseluruhan.meninggal}</Text>
                        </View>
                    </View>
                </View>
                {/* Bagian Data Covid-19 Indonesia Berdasarkan Provinsi */}
                <View>
                  
                </View>
            </View>
        )
    }
}

export default DataIndonesia;

const styles = StyleSheet.create({
    containerIconSearch:{
        position: 'absolute',
        top: 32,
        left: 10,
      },
      containerSearchBar:{
        marginHorizontal: 15,
      },
      textLoading:{
        marginTop: 300,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#000080'
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
      containerDataIndo:{
        marginTop: 16,
        marginHorizontal: 20,
      },
      ContainerSubDataIndo:{
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white'
      },
      textDataIndo:{
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '700',
        color: '#191970',
      },
      containerDataApi:{
        flexDirection: 'row',
        borderWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'white'
      },
      containerIsiDataLabel:{
        flex: 1,
        alignItems: 'flex-start',
        paddingVertical: 10,
        marginHorizontal: 15,
      },
      containerIsiDataApi:{
        flex: 1,
        alignItems: 'flex-end',
        paddingVertical: 10,
        marginHorizontal: 15,
      },
      textLabelData:{
        paddingBottom: 8,
        fontSize: 15,
        fontWeight: '700',
      },
      
      dataJumlahKasus:{
        paddingBottom: 8,
        fontSize: 15,
        fontWeight: '700',
        color: '#800000',
      },
      dataSembuh:{
        paddingBottom: 8,
        fontSize: 15,
        fontWeight: '700',
        color: 'darkgreen',
      },
      dataPerawatan:{
        paddingBottom: 8,
        fontSize: 15,
        fontWeight: '700',
        color: '#008080',
      },
      dataMeninggal:{
        fontSize: 15,
        fontWeight: '700',
        color: '#808000',
      },
      
})