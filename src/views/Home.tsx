import React from 'react';
import {StyleSheet, Text, SafeAreaView, Button, View} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

// Offical SoundCloud API
// const SC = require('soundcloud');

export default function Home(props: any) {
  // const _handleSignInBrowser = () => {
  //   WebBrowser.openAuthSessionAsync()
  // };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Sound</Text>
          <Text style={styles.title}>Cloud</Text>
          <Text style={styles.title}>Rad.io</Text>
        </View>
        <View>
          <Text>
            Discover new and random tracks
          </Text>
        </View>
      </View>
      <Button
        title={"Play"}
        onPress={() => props.setRadioVisible(true)}
        accessibilityLabel={"Tap me to tune in"}
      />
      <Button
        title={"Sign In"}
        color={"#ffffff"}
        onPress={() => {
        }}
        accessibilityLabel={"Tap here to sign in to SoundCloud"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "40%",
    backgroundColor: "#ffa55f",
  },
  headerContainer: {
    // flex: 1,
    // width: '100%',
    padding: 24,
    // marginBottom: '60%',
    backgroundColor: "#eaeaea"
  },
  header: {
    // flex: 1,
    // width: '100%'
  },
  title: {
    // marginTop: 16,
    // paddingVertical: 8,
    // borderWidth: 4,
    // borderColor: "#20232a",
    // borderRadius: 6,
    // backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "left",
    fontSize: 50,
    fontWeight: "bold"
  },
});