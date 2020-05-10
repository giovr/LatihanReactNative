import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

class DataGlobal extends React.Component{
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
        <Text >Positif</Text>
        <Text >{this.state.global.confirmed.value}</Text> 
        <Text> Sembuh</Text>
        <Text> {this.state.global.recovered.value}</Text>
        <Text>Meninggal</Text>
        <Text>{this.state.global.death.value}</Text>
          
      </View>
    );
  }
}
export default DataGlobal;




const styles = StyleSheet.create({
   
    
})