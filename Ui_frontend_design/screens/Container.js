import * as React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Container = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container14, styles.containerShadowBox]}>
      <View style={[styles.frame, styles.frameFlexBox1]}>
        <Text style={styles.services}>Services</Text>
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <ImageBackground
              style={styles.image13Icon}
              resizeMode="cover"
              source={require("../assets/image13.png")}
            />
            <ImageBackground
              style={[styles.image27Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/image27.png")}
            />
          </View>
          <View style={[styles.frame3, styles.frameFlexBox]}>
            <ImageBackground
              style={[styles.image11Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/image11.png")}
            />
            <ImageBackground
              style={[styles.image26Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/image26.png")}
            />
          </View>
          <View style={[styles.frame4, styles.frameFlexBox]}>
            <ImageBackground
              style={styles.image14Icon}
              resizeMode="cover"
              source={require("../assets/image14.png")}
            />
            <ImageBackground
              style={[styles.image22Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/image22.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.container10, styles.frameFlexBox]}>
        <View style={[styles.frame5, styles.frameLayout1]}>
          <Pressable
            style={[styles.frame6, styles.frameLayout]}
            onPress={() => navigation.navigate("Container4")}
          >
            <Image
              style={[styles.home1Icon, styles.profile1Layout]}
              contentFit="cover"
              source={require("../assets/home-1.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </Pressable>
          <View style={styles.frame7}>
            <Image
              style={styles.image34Icon}
              contentFit="cover"
              source={require("../assets/image-34.png")}
            />
            <Text style={[styles.services1, styles.homeTypo]}>Services</Text>
          </View>
        </View>
        <View style={[styles.frame8, styles.frameLayout]}>
          <View style={styles.frame9}>
            <Image
              style={styles.image34Icon1}
              contentFit="cover"
              source={require("../assets/image-341.png")}
            />
            <Text style={styles.homeTypo}>Growth</Text>
          </View>
          <View style={[styles.frame10, styles.frameLayout]}>
            <Pressable
              style={styles.profile1Layout}
              onPress={() => navigation.navigate("Container2")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/profile-1.png")}
              />
            </Pressable>
            <Text style={[styles.home, styles.homeTypo]}>Profile</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerShadowBox: {
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(23, 26, 31, 0.12)",
    borderRadius: Border.br_9xs,
  },
  frameFlexBox1: {
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
  },
  iconLayout: {
    width: 151,
    borderRadius: Border.br_9xs,
  },
  frameFlexBox: {
    marginTop: 7,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameLayout1: {
    width: 126,
    flexDirection: "row",
  },
  frameLayout: {
    height: 46,
    overflow: "hidden",
    alignItems: "center",
  },
  profile1Layout: {
    height: 28,
    width: 28,
  },
  homeTypo: {
    color: Color.colorSilver,
    fontFamily: FontFamily.interRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  services: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  image13Icon: {
    width: 149,
    height: 184,
    borderRadius: Border.br_9xs,
  },
  image27Icon: {
    marginLeft: 9,
    height: 188,
  },
  frame2: {
    paddingTop: Padding.p_12xs,
    flexDirection: "row",
    height: 189,
    justifyContent: "center",
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  image11Icon: {
    height: 188,
  },
  image26Icon: {
    height: 186,
    marginLeft: 7,
  },
  frame3: {
    height: 189,
    marginTop: 7,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
  },
  image14Icon: {
    width: 148,
    height: 181,
    borderRadius: Border.br_9xs,
  },
  image22Icon: {
    marginLeft: 10,
    height: 188,
  },
  frame4: {
    height: 188,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
  },
  frame1: {
    marginTop: 22,
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frame: {
    alignSelf: "stretch",
  },
  home1Icon: {
    overflow: "hidden",
  },
  home: {
    marginTop: -2,
  },
  frame6: {
    width: 34,
  },
  image34Icon: {
    width: 26,
    height: 26,
    borderRadius: Border.br_9xs,
  },
  services1: {
    marginTop: 5,
  },
  frame7: {
    width: 49,
    height: 51,
    overflow: "hidden",
    alignItems: "center",
  },
  frame5: {
    justifyContent: "space-between",
    overflow: "hidden",
    alignItems: "center",
  },
  image34Icon1: {
    width: 27,
    height: 24,
    borderRadius: Border.br_9xs,
  },
  frame9: {
    width: 42,
    overflow: "hidden",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frame10: {
    width: 37,
    marginLeft: 47,
  },
  frame8: {
    marginLeft: 34,
    width: 126,
    flexDirection: "row",
  },
  container10: {
    height: 79,
    paddingLeft: 41,
    paddingTop: Padding.p_mid,
    paddingRight: Padding.p_14xl,
    paddingBottom: Padding.p_mid,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(23, 26, 31, 0.12)",
    borderRadius: Border.br_9xs,
  },
  container14: {
    flex: 1,
    paddingLeft: Padding.p_11xs,
    paddingRight: 3,
    alignItems: "center",
    width: "100%",
  },
});

export default Container;
