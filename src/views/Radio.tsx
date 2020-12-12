import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  Modal,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {next} from '../util/controller';

export default function Radio(props: any) {
  const [tracks, setTracks] = React.useState<any>({});

  return (
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        animationType={"slide"}
        onDismiss={() => props.setRadioVisible(false)}>
        <View style={styles.modalView}>
          <Button title={"Dismiss"}
                  onPress={() => props.setRadioVisible(false)}/>
          <View style={styles.coverArt}>
            <Image
              style={styles.image}
              resizeMode={"center"}
              source={require('../../assets/icon.png')}/>
          </View>
          <Button
            title={"Next"}
            onPress={() => setTracks(next())}/>
        </View>
      </Modal>
    </View>
  );
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  modalView: {
    // margin: 20,
    marginTop: "20%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.5,
    resizeMode: "cover",
  },
  coverArt: {
    flex: 1,
    width: "100%",
    marginTop: "5%",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});