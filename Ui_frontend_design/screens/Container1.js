import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Container1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container12}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Pressable
            style={styles.caretLeft1}
            onPress={() => navigation.navigate("Container")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/caret-left-1.png")}
            />
          </Pressable>
          <Text style={styles.details}>Details</Text>
        </View>
      </View>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <View style={styles.frame2}>
        <View style={styles.frame3}>
          <View style={styles.frame4}>
            <View style={styles.frame5}>
              <Text style={styles.limeSeedlings}>Lime Seedlings</Text>
              <Text style={styles.availableInStock}>Available in stock</Text>
            </View>
            <Text style={styles.pcs}>Rs 50</Text>
          </View>
          <View style={styles.frame6}>
            <View style={styles.frame7}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/star-1.png")}
              />
              <Text style={styles.text}>4.9 (192)</Text>
            </View>
            <Text style={styles.pcs1}>1pcs</Text>
          </View>
        </View>
        <View style={styles.frame8}>
          <Text style={styles.description}>Description</Text>
          <View style={styles.frame9}>
            <Text
              style={styles.limesAreClosely}
            >{`Limes are closely related to lemons. They even
Ilook similar to them. Lime tree harvest is easier
when you are familiar with the different types`}</Text>
            <Text style={styles.ofLimeTrees}>
              of lime trees and what... Read More
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.frame10}>
        <View style={styles.frame11}>
          <Text style={styles.relatedProducts}>Related Products</Text>
          <View style={styles.frame12}>
            <Image
              style={styles.image30Icon}
              contentFit="cover"
              source={require("../assets/image-30.png")}
            />
            <Image
              style={styles.image12Icon}
              contentFit="cover"
              source={require("../assets/image-12.png")}
            />
            <Image
              style={styles.image25Icon}
              contentFit="cover"
              source={require("../assets/image-25.png")}
            />
            <Image
              style={styles.image12Icon}
              contentFit="cover"
              source={require("../assets/image-10.png")}
            />
          </View>
        </View>
        <Button
          style={styles.button4}
          title="CONTACT"
          size="medium"
          status="primary"
          appearance="filled"
          color="#00b251"
          textStyle={styles.button4Text}
        >
          CONTACT
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button4Text: {
    fontFamily: "Inter-Regular",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  caretLeft1: {
    position: "relative",
    width: 20,
    height: 20,
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
    width: 183,
    height: 30,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame: {
    width: 292,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  frameIcon: {
    position: "relative",
    borderRadius: Border.br_9xs,
    width: 310,
    height: 196,
    overflow: "hidden",
    marginTop: 19,
  },
  limeSeedlings: {
    position: "relative",
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  availableInStock: {
    position: "relative",
    fontSize: FontSize.size_smi,
    lineHeight: 22,
    fontFamily: FontFamily.interRegular,
    color: Color.colorMediumseagreen,
    textAlign: "left",
    marginTop: 4,
  },
  frame5: {
    width: 154,
    height: 56,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: Padding.p_11xs,
  },
  pcs: {
    position: "relative",
    fontSize: FontSize.size_mid,
    lineHeight: 26,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
    textAlign: "left",
    marginLeft: 92,
  },
  frame4: {
    width: 292,
    height: 56,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 28,
    marginRight: 16,
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
    marginLeft: 3,
  },
  frame7: {
    width: 74,
    height: 22,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  pcs1: {
    fontSize: FontSize.size_mid,
    lineHeight: 26,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_100,
    textAlign: "left",
    width: 34,
    marginTop: 8,
    marginLeft: 155,
  },
  frame6: {
    width: 266,
    height: 34,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 44,
    marginTop: 3,
  },
  frame3: {
    width: 310,
    height: 93,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  description: {
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: Color.colorGray_100,
    textAlign: "left",
    height: 28,
    marginRight: 197,
  },
  limesAreClosely: {
    fontSize: FontSize.size_smi,
    lineHeight: 21,
    fontFamily: FontFamily.interRegular,
    color: Color.colorSilver,
    textAlign: "left",
    height: 63,
    marginRight: 15,
  },
  ofLimeTrees: {
    fontSize: FontSize.size_smi,
    lineHeight: 22,
    fontFamily: FontFamily.interRegular,
    color: Color.colorSilver,
    textAlign: "left",
    height: 22,
    marginRight: 90,
    marginTop: 4,
  },
  frame9: {
    width: 308,
    height: 89,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 6,
  },
  frame8: {
    width: 308,
    height: 123,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  frame2: {
    width: 310,
    height: 236,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 19,
  },
  relatedProducts: {
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.epilogueBold,
    color: Color.colorGray_100,
    textAlign: "left",
    height: 28,
    marginRight: 144,
  },
  image30Icon: {
    position: "relative",
    borderRadius: Border.br_9xs,
    width: 71,
    height: 72,
  },
  image12Icon: {
    position: "relative",
    borderRadius: Border.br_9xs,
    width: 70,
    height: 71,
    marginLeft: 9,
  },
  image25Icon: {
    position: "relative",
    borderRadius: Border.br_9xs,
    width: 71,
    height: 70,
    marginLeft: 9,
  },
  frame12: {
    width: 312,
    height: 72,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 4,
    marginTop: 2,
  },
  frame11: {
    width: 316,
    height: 102,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button4: {
    borderRadius: Border.br_9xs,
    width: 305,
    height: 49,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 108,
    paddingVertical: Padding.p_0,
    marginRight: 3,
    marginTop: 25,
  },
  frame10: {
    width: 316,
    height: 176,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 19,
  },
  container12: {
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
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 22,
    paddingTop: Padding.p_33xl,
    paddingBottom: Padding.p_14xl,
  },
});

export default Container1;
