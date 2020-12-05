//@flow

import {StyleSheet} from 'react-native';

import {COLORS} from '../../../utils/colors';
import {rw, rbr} from '../../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    borderRadius: rbr(5),
    // marginBottom: rw(10),
    margin: rw(10),
  },
  searchContainer: {
    padding: rw(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortContainer: {
    paddingLeft: rw(15),
    alignItems: "center",
    flexDirection: "row",
  },
  search_icon: {width: rw(20), height: rw(20), tintColor: COLORS.LIGHT_GRAY},
  sort_icon: {width: rw(30), height: rw(30),  tintColor: COLORS.ORANGE_FLIP},
  sort_text: {fontWeight: 'bold', color: COLORS.ORANGE_FLIP},
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.8
    },
    shadowOpacity: 0.10,
    shadowRadius: 3,
    elevation: 5
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