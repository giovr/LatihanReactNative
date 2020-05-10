import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class ApiIndoProvinsi extends React.Component{
    constructor() {
        super();
        this.state = {
            indonesiaApi: [],
            refreshing: false
        }
        
    }

    renderItem = ({ item }) => (
        <View > 
            <View style={styles.container}>
                <View>
                    <Text style={styles.box1}>{item.provinsi}</Text>
                </View>
                <View>
                    <Text style={styles.box2}>{item.kasusPosi}</Text>
                </View>
                <View>
                    <Text style={styles.box3}>{item.kasusSemb}</Text>
                </View>
                <View>
                    <Text style={styles.box4}>{item.kasusMeni}</Text>
                </View>
            </View> 
        </View>
    )

    onRefresh = () => {
        this.getDataApiIndonesia();
    }

    componentDidMount = () => {    
        this.getDataApiIndonesia();
    }

    getDataApiIndonesia = async () => {   
        this.setState({ refreshing: true})
        const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
        const indonesiaApi = await response.json()
        const { data } = await indonesiaApi
        this.setState({
            indonesiaApi: {
                Data: await data,
            },
            refreshing: false
        })
    }

    
    render(){
        return(
            <View>
                
                <View style={styles.subJudulContainer}>
                    <Text style={styles.subJudulIndonesia}> Indonesia </Text>
                </View>
                
                <View style={styles.textIndoContainer}>
                    <Text style={styles.textPositif}> Positif </Text>
                    <Text style={styles.textSembuh}> Sembuh </Text>
                    <Text style={styles.textMeninggal}> Meninggal </Text>
                </View>    
                    <FlatList
                        data={this.state.indonesiaApi.Data}
                        keyExtractor={item => item.fid.toString()}
                        renderItem={this.renderItem}
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                        showsVerticalScrollIndicator={false}
                    />


            </View>
        )
    }
}

export default ApiIndoProvinsi;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        padding:5,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 3,
        marginRight: 3,
        backgroundColor: '#EBEBEB'
    },

    textIndoContainer:{
        justifyContent: 'center',
        flexDirection:'row',
        marginBottom: 5,
        marginTop: 20,
        marginLeft: 5
    },
    subJudulContainer:{
        marginLeft: 40,
        marginRight: 40,
        marginTop: 30,
        backgroundColor: 'lightslategrey',
        borderWidth: 2,
        borderRadius: 15
    },
    subJudulIndonesia:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'lavender'
    },
    textPositif:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:18,
        padding: 2,
        marginLeft: 3,
        color: 'maroon',
        borderWidth: 2,
        borderColor: 'maroon'
    },
    textSembuh:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:18,
        padding: 2,
        marginLeft: 15,
        color: 'darkgreen',
        borderWidth: 2,
        borderColor: 'darkgreen'
    },

    textMeninggal:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:18,
        padding: 2,
        marginLeft: 15,
        color: 'teal',
        borderWidth: 2,
        borderColor: 'teal'
    },
  
  
    box1:{
        width: 200,
        height:30,
        paddingTop: 5,
        fontSize: 14,
        fontWeight: 'bold'
    },
    box2:{
        width:50,
        height:30,
        marginLeft: 5,
        paddingTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        borderRadius: 10,
        backgroundColor:'maroon'
    },
    box3:{
        width:50,
        height:30,
        marginLeft:10,
        paddingTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        borderRadius: 10,
        backgroundColor:'darkgreen'
    },
    box4:{
        width:50,
        height:30,
        marginLeft:10,
        paddingTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        borderRadius: 10,
        backgroundColor:'teal'
    },
  })
  
   