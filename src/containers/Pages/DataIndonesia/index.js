import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import SearchFeature from '../../../components/SearchFeature';
import BottomNavBar from '../../../components/BottomNavBar';

class DataIndonesia extends Component {
    constructor(){
        super();
        this.state={
          dataApiKeseluruhan:{},
          dataApiProvinsi:[],
          refreshing: false
        }
      }
        
    onRefresh= () =>{
        this.getDataIndoKeseluruhan();
        this.getDataApiProvinsi();
    }

    componentDidMount = () =>{
        this.getDataIndoKeseluruhan();
        this.getDataApiProvinsi();
    }

    // Mengambil Data API Indonesia Keseluruhan
    getDataIndoKeseluruhan = async () => {
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

    // Mengambil Data API Provinsi
    getDataApiProvinsi = async () => {   
      this.setState({ refreshing: true})
      const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
      const dataApiProvinsi = await response.json()
      const { data } = await dataApiProvinsi
      this.setState({
          dataApiProvinsi: {
              Data: await data,
          },
          refreshing: false
      })
    }

    renderItem = ({ item }) => (
        <View style={styles.containerDataProvinsi}>
        
            <View style={styles.containerlabelProvinsi}>
              <Text style={styles.textLabelProvisi}>{item.provinsi}</Text>
            </View>
            <View style={styles.containerIsiDataProvinsi}>
                <Text style={styles.textDataPositif}>{item.kasusPosi}</Text>
                <Text style={styles.textDataSembuh}>{item.kasusSemb}</Text>
                <Text style={styles.textDataMeninggal}>{item.kasusMeni}</Text>
            </View>
          
        </View> 
        
    )


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
                <SearchFeature />
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
                    {/* Bagian Data Covid-19 Indonesia Berdasarkan Provinsi */}
                    <View>
                      {/* Sub Judul Data Provinsi */}
                      <View style={styles.containerSubJudulProvinsi}>
                        <Text style={styles.textSubJudulProvinsi}>Data Provinsi</Text>
                      </View>
                      <View style={styles.containerIndikatorWarna}>
                        <Text style={styles.indikatorPositif}>Positif</Text>
                        <Text style={styles.indikatorSembuh}>Sembuh</Text>
                        <Text style={styles.indikatorMeninggal}>Meninggal</Text>
                      </View>
                      <View style={styles.containerPembatas}></View>
                      
                      <FlatList
                              data={this.state.dataApiProvinsi.Data}
                              keyExtractor={item => item.fid.toString()}
                              renderItem={this.renderItem}
                              refreshing={this.state.refreshing}
                              onRefresh={this.onRefresh}
                              showsVerticalScrollIndicator={false}
                          />
                          
                    </View>
                    
                </View>
                
                
            </View>
        )
    }
}

export default DataIndonesia;

const styles = StyleSheet.create({

      textLoading:{
        marginTop: 300,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#000080'
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
        borderBottomWidth: 0,
        backgroundColor: 'white'
      },
      textDataIndo:{
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '700',
        color: '#696969',
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

      // Pembatas Content
      containerPembatas:{
        height: 7,
        backgroundColor: '#EBEBEB',
      },

      // Styling Sub Judul Data Provinsi
      containerSubJudulProvinsi:{
        marginTop: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderBottomWidth: 0,
        paddingVertical: 5,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: 'white',
      },
      textSubJudulProvinsi:{
        fontWeight: '700',
        fontSize: 17,
        color: '#696969'
      },

      // Styling Indikator Warna
      containerIndikatorWarna:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        paddingVertical: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: 'white',
      },
      indikatorPositif:{
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#800000',
      },
      indikatorSembuh:{
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'green',
      },
      indikatorMeninggal:{
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#808000',
      },

      // Styling Data Provinsi
      containerDataProvinsi: {  
        flex: 1,
        top: 10,
        marginVertical: 3,
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      containerlabelProvinsi:{
          flexDirection:'row',
          padding:5,
          backgroundColor: '#006400'
          
      },
      textLabelProvisi:{
        flex: 1,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
      },
      containerIsiDataProvinsi:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      },
      textDataPositif:{
        flex: 1,
        paddingVertical: 3,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#800000',
      },
      textDataSembuh:{
        flex: 1,
        paddingVertical: 3,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: 'green',
      },
      textDataMeninggal:{
        flex: 1,
        paddingVertical: 3,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#808000',
      },
      
    
})