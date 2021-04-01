import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { Alert, Button, StyleSheet, Text, View, Image, Platform, Linking, TouchableOpacity } from 'react-native';
function images_risitas(n) {
  if(n==1) {
    var liste_risitas = ["2016/24/1466366209-risitas24.png",
    "2017/22/1496583962-risisingecigarette.png",
    "2018/10/1/1520256134-risitasue2.png",
    "2016/46/1479336095-risitasmacdo2.png",
    "2017/39/3/1506463228-risibg.png",
    "2021/11/1/1615833199-enormeculmanger.png",
    "2021/03/7/1611492741-ahi-gros.png",
    "2021/11/5/1616177140-ayahi-amiral-kizaruent.png",
    "2021/13/4/1617281925-parrain-luffy-poisson.png",
    "2021/06/2/1612846437-agningingi-wonki-annie-agniignigni-wonki.png",
    "2016/50/1482082001-jesusssssss.png",
    "2017/10/1489248741-risitas-roi.png",
    "2017/18/1493833836-maitre-cuck.jpg"];
    var x = Math.floor((Math.random() * liste_risitas.length));
    return(liste_risitas[x]);
  } else if(n==2) {
    var liste_zemmour = ["2017/09/1488387951-zemmour-lol.png",
    "2017/12/1490497882-zemmourrire.png",
    "2017/06/1486939407-111224548787845.png",
    "2017/23/1496932079-zemz1m.png",
    "2016/30/1469539438-zperplexe.png",
    "2016/23/1465693008-img10.png",
    "2017/09/1488501900-zemmour3.png",
    "2016/35/1472827781-1471849431-1465843407-img2.png",
    "2016/50/1482082185-molomolo.png",
    "2017/11/1489781973-ben-voyons.png",
    "2017/12/1490477703-stickerzemmour2.png",
    "2017/06/1486809348-zemmour-amen.png",
    "2017/15/1492294716-zemmour-coeur.png",
    "2017/06/1486929645-2222222444444444.png",
    "2017/09/1488205781-zemmouritas.png",
    "2021/10/2/1615328575-unitinu-1.png",
    "2021/08/7/1614523556-tbm-z-gun.png",
    "2021/09/7/1615149840-le-z-jeunistanien-v2.jpg",
    "2017/45/5/1510269338-1496583962-risisingecigarette.png",
    "2017/09/1488395041-zemmour-clodo1.png"];
    var x = Math.floor((Math.random() * liste_zemmour.length));
    return(liste_zemmour[x]); 
  } else if(n==3) {
    var liste_larry = ["2018/51/3/1545248326-larryreup.png",
    "2017/20/1494968374-pas-de-chance.png",
    "2017/19/1494619651-larryhome-2.png",
    "2019/14/1/1554077564-fishylarry.png",
    "2017/20/1495142553-1.png",
    "2017/20/1495053127-paslebol.png",
    "2017/21/1495904912-58489651.png",
    "2017/19/1494361873-luckylarry.png",
    "2021/13/4/1617273168-lary-cigare-3.jpg"];
    var x = Math.floor((Math.random() * liste_larry.length));
    return(liste_larry[x]);
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state={
      imageURL: "https://image.noelshack.com/fichiers/2017/15/1491864903-risitassalut.png"
    }
  }
  Load_New_Image_Risitas=()=> {
    this.setState({
      imageURL: "https://image.noelshack.com/fichiers/"+images_risitas(1)
    })
  }
  Load_New_Image_Zemmour=()=> {
    this.setState({
      imageURL: "https://image.noelshack.com/fichiers/"+images_risitas(2)
    })
  }
  Load_New_Image_Larry=()=> {
    this.setState({
      imageURL: "https://image.noelshack.com/fichiers/"+images_risitas(3)
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: this.state.imageURL}}
          style={{width: 360, height: 300}}
        />
        <Button color="black" title={this.state.imageURL} onPress={ ()=> Linking.openURL(this.state.imageURL)}/>
        <Button color="red" title="Risitas" onPress={this.Load_New_Image_Risitas}/>
        <Button color="red" title="Zemmour" onPress={this.Load_New_Image_Zemmour}/>
        <Button color="red" title="Larry chance" onPress={this.Load_New_Image_Larry}/>
        <StatusBar style="auto" />
     </View>
    );
  }    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    color: 'white',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    height: 20,
    fontSize: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginBottom: 10,
  },
});

