import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

class GlobalApi extends React.Component{
  constructor(){
    super();
    this.state={
      global:{},
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
    const response = await fetch('https://covid19.mathdro.id/api')
    const global = await response.json()
    const { confirmed , recovered , deaths} = await global
    this.setState({
        global: {
            confirmed: await confirmed,
            recovered: await recovered,
            death: await deaths
        },
        refreshing: false
    })
  }

  render(){
    if (!this.state.global.confirmed) {
      return <Text>Loading..</Text>
    }
    if (!this.state.global.recovered){
      return <Text>Loading..</Text>
    }
    if (!this.state.global.death){
      return <Text>Loading..</Text>
    }
     return (
      <View>
        <View style={styles.containerHeader}></View>
        <View>
            <Text style={styles.judulGlobal}>Data Covid-19 Global & Indonesia</Text>
        </View>
        <View style={styles.subJudulContainer}>
            <Text style={styles.subJudulGlobal}>Global</Text>
        </View>
        <View style={styles.containerGlobalData}>
            <View style={styles.containerPositif}>
                <Text style={styles.dataPositif}>Positif</Text>
                <Text style={styles.dataPositif}>{this.state.global.confirmed.value}</Text>  
            </View>
            <View style={styles.containerSembuh}>
                <Text style={styles.dataSembuh}>Sembuh</Text>
                <Text style={styles.dataSembuh}>{this.state.global.recovered.value}</Text>
            </View>
            <View style={styles.containerMeninggal}>
                <Text style={styles.dataMeninggal}>Meninggal</Text>
                <Text style={styles.dataMeninggal}>{this.state.global.death.value}</Text>
            </View>
        </View>  
      </View>
    );
  }
}
export default GlobalApi;




const styles = StyleSheet.create({
   
    containerHeader: {
        height: 22,
        backgroundColor: '#a9a9a9'
    },
    judulGlobal:{
        textAlign: "center",
        fontSize: 22,
        color: '#006400',
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: 'bold',
        backgroundColor: '#dcdcdc'
    },
    subJudulContainer:{
        marginLeft: 40,
        marginRight: 40,
        marginTop: 15,
        backgroundColor: 'lightslategrey',
        borderWidth: 2,
        borderRadius: 15
    },
    subJudulGlobal:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'lavender'
    },
    containerGlobalData:{
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 15,
    },
    containerPositif:{
        marginRight: 30,
        marginLeft: 15,
        padding: 15,
        borderWidth: 2,
        borderRadius: 20,
        borderStyle: 'solid',
        borderColor: 'maroon',
        backgroundColor: '#EBEBEB'
    },
    dataPositif:{
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'maroon'
    },
    containerSembuh:{
        padding: 15,
        borderWidth: 2,
        borderRadius: 20,
        borderStyle: 'solid',
        borderColor: 'darkgreen',
        backgroundColor: '#EBEBEB'
    },
    dataSembuh:{
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'darkgreen'
    },
    containerMeninggal:{
        marginLeft: 30,
        padding: 15,
        borderWidth: 2,
        borderRadius: 20,
        borderStyle: 'solid',
        borderColor: '#008080',
        backgroundColor: '#EBEBEB'
    },
    dataMeninggal:{
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#008080'
    },    
})