import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@ui-kitten/components";
import { Button as RNPButton } from "react-native-paper";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Container3 = () => {
  return (
    <View style={styles.container38}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Image
            style={styles.caretLeft1}
            contentFit="cover"
            source={require("../assets/caret-left-12.png")}
          />
          <Text style={styles.details}>Machinery</Text>
        </View>
        <Image
          style={styles.image37Icon}
          contentFit="cover"
          source={require("../assets/image-37.png")}
        />
      </View>
      <View style={styles.frame2}>
        <View style={styles.frame3}>
          <Text style={styles.limeSeedlings}>Lime Seedlings</Text>
          <View style={styles.frame4}>
            <View style={styles.frame5}>
              <Text style={styles.availableInStock}>Available near you</Text>
              <View style={styles.frame6}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
                <Text style={styles.text}>4.9 (192)</Text>
              </View>
            </View>
            <Text style={styles.pcs}>Rs 500/day</Text>
          </View>
        </View>
        <View style={styles.frame7}>
          <View style={styles.frame8}>
            <View style={styles.frame9}>
              <Text style={styles.description}>Description</Text>
              <Text style={styles.limesAreClosely}>
                ManufacturerM/s. Eicher tractor, 59 N.I.T., Faridabad,
                HaryanaType4 stroke dieselNo of cylinders1Bore length105 fuel
                usedHigh speed diesel oilB.H.P14Gear box6 forward, 1
                reverseWeight1200kg (approx)
              </Text>
            </View>
            <Text style={styles.relatedProducts}>Related Products</Text>
          </View>
          <View style={styles.frame10}>
            <View style={styles.frame11}>
              <Image
                style={styles.image32Icon}
                contentFit="cover"
                source={require("../assets/image-32.png")}
              />
              <Image
                style={styles.image35Icon}
                contentFit="cover"
                source={require("../assets/image-35.png")}
              />
              <View style={styles.image36Parent}>
                <Image
                  style={styles.image32Icon}
                  contentFit="cover"
                  source={require("../assets/image-32.png")}
                />
                <Image
                  style={styles.image35Icon}
                  contentFit="cover"
                  source={require("../assets/image-35.png")}
                />
              </View>
            </View>
            <Button
              style={styles.frame12}
              title="CONTACT"
              size="medium"
              status="primary"
              appearance="filled"
              textStyle={styles.frameText}
              onPress={() => {}}
            >
              CONTACT
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameText: {
    fontFamily: "Inter-Regular",
  },
  button4Btn: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "Inter-Regular",
  },
  button4Btn1: {
    paddingHorizontal: 108,
    paddingVertical: 0,
    borderRadius: 4,
    height: 49,
    width: 305,
  },
  caretLeft1: {
    position: "relative",
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  details: {
    position: "relative",
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: Color.colorGray_100,
    textAlign: "left",
    marginLeft: 92,
  },
  frame1: {
    width: 221,
    height: 30,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 93,
  },
  image37Icon: {
    borderRadius: 20,
    width: 305,
    height: 214,
    marginRight: 10,
    marginTop: 9,
  },
  frame: {
    width: 315,
    height: 253,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  limeSeedlings: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: Color.colorGray_100,
    textAlign: "left",
    height: 30,
    marginRight: 168,
  },
  availableInStock: {
    position: "relative",
    fontSize: FontSize.size_smi,
    lineHeight: 22,
    fontFamily: FontFamily.interRegular,
    color: Color.colorMediumseagreen,
    textAlign: "left",
  },
  frameChild: {
    position: "relative",
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text: {
    position: "relative",
    fontSize: FontSize.size_smi,
    lineHeight: 22,
    fontFamily: FontFamily.interRegular,
    color: Color.colorSilver,
    textAlign: "left",
    marginLeft: 2,
  },
  frame6: {
    width: 74,
    height: 22,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 3,
  },
  frame5: {
    width: 113,
    height: 47,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: Padding.p_12xs,
  },
  pcs: {
    position: "relative",
    fontSize: FontSize.size_mid,
    lineHeight: 26,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
    textAlign: "left",
    marginLeft: 106,
  },
  frame4: {
    width: 311,
    height: 48,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: Padding.p_12xs,
    marginRight: 12,
    marginTop: 3,
  },
  frame3: {
    width: 323,
    height: 81,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  description: {
    position: "relative",
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  limesAreClosely: {
    position: "relative",
    fontSize: FontSize.size_smi,
    lineHeight: 21,
    fontFamily: FontFamily.interRegular,
    color: Color.colorSilver,
    textAlign: "left",
    width: 310,
  },
  frame9: {
    width: 310,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 0,
    height: 133,
    marginRight: 10,
  },
  relatedProducts: {
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: Color.colorGray_100,
    textAlign: "left",
    height: 28,
    marginRight: 160,
    marginTop: 9,
  },
  frame8: {
    width: 320,
    height: 170,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image32Icon: {
    position: "relative",
    borderRadius: Border.br_9xs,
    width: 69,
    height: 72,
  },
  image35Icon: {
    position: "relative",
    borderRadius: Border.br_5xs,
    width: 63,
    height: 72,
    marginLeft: 22,
  },
  image36Parent: {
    width: 144,
    height: 72,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 22,
  },
  frame11: {
    width: 320,
    height: 72,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame12: {
    width: 322,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_0,
    marginTop: 23,
  },
  frame10: {
    width: 322,
    height: 144,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginTop: 4,
  },
  frame7: {
    width: 322,
    height: 318,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginTop: 32,
  },
  frame2: {
    width: 323,
    height: 431,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 9,
  },
  container38: {
    position: "relative",
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 778,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: Padding.p_6xl,
    paddingTop: Padding.p_14xl,
    paddingRight: 12,
    paddingBottom: Padding.p_14xl,
  },
});

export default Container3;
