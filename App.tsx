import {StatusBar} from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import Home from './src/views/Home';
import Radio from './src/views/Radio';

async function lockPortraitMode() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
}

export default function App() {
  const [radioVisible, setRadioVisible] = React.useState<boolean>(false);

  lockPortraitMode();

  return (
    <SafeAreaView style={styles.container}>
      <Home setRadioVisible={setRadioVisible}/>
      {radioVisible &&
      <Radio setRadioVisible={setRadioVisible}/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdc576',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
