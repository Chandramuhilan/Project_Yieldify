import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@ui-kitten/components";
import { Button as RNPButton } from "react-native-paper";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Container2 = () => {
  return (
    <View style={styles.container37}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <Image
              style={styles.caretLeft1}
              contentFit="cover"
              source={require("../assets/caret-left-11.png")}
            />
            <Text style={styles.details}>Details</Text>
          </View>
          <View style={styles.frame3}>
            <View style={styles.frame4}>
              <View style={styles.container25}>
                <View style={styles.frame5}>
                  <Text style={styles.soil}>Soil</Text>
                  <Text style={styles.clayType}>Clay type</Text>
                </View>
                <Text style={styles.text}>30%</Text>
              </View>
              <View style={styles.container24}>
                <View style={styles.frame6}>
                  <Text style={styles.soil}>water</Text>
                  <Text style={styles.nomalee}>Normal</Text>
                </View>
                <View style={styles.frame7}>
                  <Text style={styles.text1}>92%</Text>
                  <View style={styles.eAdd1} />
                </View>
              </View>
            </View>
            <Text style={styles.limeSeedlings}>Growing Crops</Text>
          </View>
        </View>
        <View style={styles.frame8}>
          <Image
            style={styles.image22Icon}
            contentFit="cover"
            source={require("../assets/image-22.png")}
          />
          <View style={styles.frame9}>
            <Text style={styles.limeSeedlings1}>Lime Plant</Text>
            <Button
              style={styles.button7}
              title="Condition"
              size="medium"
              status="primary"
              appearance="filled"
              color="#00b251"
              textStyle={styles.button7Text}
              onPress={() => {}}
            >
              Condition
            </Button>
          </View>
          <Button
            style={styles.button6}
            title="SPENDING MONEY"
            size="medium"
            status="primary"
            appearance="filled"
            color="#cc1a1a"
            textStyle={styles.button6Text}
          >
            SPENDING MONEY
          </Button>
        </View>
      </View>
      <Button
        style={styles.button5}
        title="INVESTMENT PREDICT"
        size="medium"
        status="primary"
        appearance="filled"
        color="#00b251"
        textStyle={styles.button5Text}
      >
        INVESTMENT PREDICT
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button7Text: {
    fontFamily: "Inter-Regular",
  },
  button6Text: {
    fontFamily: "Inter-Regular",
  },
  button5Text: {
    fontFamily: "Inter-Regular",
  },
  addToCart2Btn: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "Inter-Regular",
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
  frame2: {
    width: 183,
    height: 30,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 117,
  },
  soil: {
    position: "relative",
    fontSize: FontSize.size_mini,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  clayType: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    color: "#565e6c",
    textAlign: "left",
    marginTop: -6,
  },
  frame5: {
    width: 54,
    height: 38,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: Padding.p_12xs,
  },
  text: {
    position: "relative",
    fontSize: FontSize.size_3xl,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: Color.colorGray_100,
    textAlign: "left",
    marginTop: 13,
  },
  container25: {
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: 13,
    backgroundColor: "#f3f4f6",
    width: 102,
    height: 103,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_5xs,
    paddingTop: 10,
    paddingBottom: Padding.p_5xs,
  },
  nomalee: {
    position: "relative",
    fontSize: FontSize.size_mid,
    lineHeight: 26,
    fontFamily: FontFamily.interRegular,
    color: "#9095a0",
    textAlign: "left",
    marginTop: -5,
  },
  frame6: {
    width: 58,
    height: 45,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 0,
  },
  text1: {
    position: "relative",
    fontSize: FontSize.size_3xl,
    lineHeight: 34,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  eAdd1: {
    position: "relative",
    width: 12,
    height: 12,
    overflow: "hidden",
    marginLeft: 28,
  },
  frame7: {
    width: 83,
    height: 34,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 12,
  },
  container24: {
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: 10,
    backgroundColor: "#fafafb",
    width: 101,
    height: 103,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 7,
    paddingVertical: 4,
    marginLeft: 49,
  },
  frame4: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorForestgreen,
    width: 310,
    height: 196,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: Padding.p_14xl,
    paddingTop: Padding.p_18xl,
    paddingRight: Padding.p_6xl,
    paddingBottom: Padding.p_18xl,
  },
  limeSeedlings: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: Color.colorGray_100,
    textAlign: "left",
    height: 30,
    marginRight: 156,
    marginTop: 19,
  },
  frame3: {
    width: 310,
    height: 245,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 17,
  },
  frame1: {
    width: 310,
    height: 292,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_0,
    paddingVertical: 6,
  },
  image22Icon: {
    borderRadius: Border.br_9xs,
    width: 271,
    height: 147,
    marginRight: 23,
  },
  limeSeedlings1: {
    position: "relative",
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  button7: {
    borderRadius: Border.br_9xs,
    width: 305,
    height: 49,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 113,
    paddingVertical: Padding.p_2xs,
  },
  frame9: {
    width: 305,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: 0,
    height: 79,
    marginRight: 6,
    marginTop: 8,
  },
  button6: {
    borderRadius: Border.br_9xs,
    width: 305,
    height: 49,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 75,
    paddingVertical: Padding.p_2xs,
    marginRight: 6,
    marginTop: 8,
  },
  frame8: {
    width: 311,
    height: 309,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_0,
    paddingVertical: 14,
    marginTop: -3,
  },
  frame: {
    width: 311,
    height: 607,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button5: {
    borderRadius: Border.br_9xs,
    width: 305,
    height: 49,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_2xs,
    marginRight: 3,
    marginTop: 15,
  },
  container37: {
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
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 23,
    paddingTop: Padding.p_33xl,
    paddingRight: 26,
    paddingBottom: 55,
  },
});

export default Container2;
