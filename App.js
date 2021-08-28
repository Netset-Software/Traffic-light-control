/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [lightEast, setLightEast] = useState("green")
  const [lightEastTimer, setLightEastTimer] = useState(20)

  const [lightWest, setLightWest] = useState("red")
  const [lightWestTimer, setLightWestTimer] = useState(0)

  const [lightNorth, setLightNorth] = useState("red")
  const [lightNorthTimer, setLightNorthTimer] = useState(0)

  const [lightSouth, setLightSouth] = useState("red")
  const [lightSouthTimer, setLightSouthTimer] = useState(0)

  const [timer, setTimer] = useState(20)

  let tempTimer = 20
  let templightEastTimer = 20, templightWestTimer = 20, templightNorthTimer = 40, templightSouthTimer = 60
  let templightEast = "green", templightWest = "red", templightNorth = "red", templightSouth = "red"

  let greenLight = "east"
  const [light, setLight] = useState("east")

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    setInterval(() => {
      decreaseTimer()
    }, 1000);
  }, [])


  function decreaseTimer() {
    if (tempTimer == 0) {
      toggle()
      tempTimer = 20
    }
    // let temptimer = timer - 1
    // console.log(temptimer)
    setTimer(tempTimer - 1)

    templightEastTimer = templightEastTimer - 1
    templightWestTimer = templightWestTimer - 1
    templightNorthTimer = templightNorthTimer - 1
    templightSouthTimer = templightSouthTimer - 1

    setLightEastTimer(templightEastTimer - 1)
    setLightWestTimer(templightWestTimer - 1)
    setLightNorthTimer(templightNorthTimer - 1)
    setLightSouthTimer(templightSouthTimer - 1)

    console.log(lightEastTimer)
    tempTimer = tempTimer - 1
  }

  function toggle() {
    console.log("toggle", greenLight)
    if (greenLight == "east") {
      greenLight = "west"
      setLight("west")
      templightEastTimer = 60
      templightWestTimer = 20
      templightNorthTimer = 20
      templightSouthTimer = 40
    }
    else if (greenLight == "west") {
      greenLight = "north"
      setLight("north")

      templightEastTimer = 40
      templightWestTimer = 60
      templightNorthTimer = 20
      templightSouthTimer = 20
    } else if (greenLight == "north") {
      greenLight = "south"
      setLight("south")

      templightEastTimer = 20
      templightWestTimer = 40
      templightNorthTimer = 60
      templightSouthTimer = 20
    } else if (greenLight == "south") {
      greenLight = "east"
      setLight("east")

      templightEastTimer = 20
      templightWestTimer = 20
      templightNorthTimer = 40
      templightSouthTimer = 60
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{"East"}</Text>
            <View style={{ height: 100, width: 100, borderRadius: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: light == "east" ? "green" : lightEastTimer > 0 ? "red" : "yellow" }} >
              <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>{lightEastTimer > 0 && lightEastTimer}</Text>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{"West"}</Text>
            <View style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: light == "west" ? "green" : lightWestTimer > 0 ? "red" : "yellow" }} >
              <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>{lightWestTimer > 0 && lightWestTimer}</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{"North"}</Text>
            <View style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: light == "north" ? "green" : lightNorthTimer > 0 ? "red" : "yellow" }} >
              <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>{lightNorthTimer > 0 && lightNorthTimer}</Text>
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{"South"}</Text>
            <View style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: light == "south" ? "green" : lightSouthTimer > 0 ? "red" : "yellow" }} >
              <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>{lightSouthTimer > 0 && lightSouthTimer}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
