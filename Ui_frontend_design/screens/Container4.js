import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button as RNEButton } from "@rneui/themed";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Container4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container39}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <View style={[styles.frame3, styles.frame3Position]}>
              <Text style={[styles.featuredProducts, styles.hpaPosition]}>
                Featured Products
              </Text>
            </View>
            <View style={[styles.frame4, styles.frameLayout6]}>
              <View style={[styles.frame5, styles.frameLayout6]}>
                <View style={styles.containerShadowBox2}>
                  <Image
                    style={[styles.image15Icon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/image-15.png")}
                  />
                  <View style={[styles.container6, styles.containerShadowBox1]}>
                    <Text style={styles.riceSeeds}>Disease predict</Text>
                    
                    <Button
                      style={styles.lime5}
                      title="Predict"
                      size="medium"
                      status="primary"
                      appearance="filled"
                      color="#171a1f"
                      textStyle={styles.lime5Text}
                    >
                      Predict
                    </Button>
                  </View>
                </View>
                <View style={styles.containerShadowBox}>
                  <Image
                    style={styles.image31Icon}
                    contentFit="cover"
                    source={require("../assets/image-31.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.container61, styles.container61Position]}>
              <Text style={styles.riceSeeds}>Pest prediction</Text>
              <RNEButton
                radius={5}
                iconPosition="left"
                type="solid"
                color="#6acc51"
                pest="1"
                containerStyle={styles.container41Btn}
                buttonStyle={styles.container41Btn1}
              />
              <Button
                style={styles.lime5}
                title="Predict"
                size="medium"
                status="primary"
                appearance="filled"
                color="#171a1f"
                textStyle={styles.lime51Text}
              >
                Predict
              </Button>
            </View>
            <View style={[styles.frame6, styles.frameLayout6]}>
              <View style={[styles.frame5, styles.frameLayout6]}>
                <View style={styles.containerShadowBox2}>
                  <Image
                    style={[styles.image15Icon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/image-151.png")}
                  />
                  <View
                    style={[styles.container62, styles.containerShadowBox1]}
                  >
                    <Text style={styles.riceSeeds}>{`Soil Prediction `}</Text>
                    <RNEButton
                      radius={5}
                      iconPosition="left"
                      type="solid"
                      color="#6acc51"
                      soil="2"
                      containerStyle={styles.container42Btn}
                      buttonStyle={styles.container42Btn1}
                    />
                    <Button
                      style={styles.lime5}
                      title="Predict"
                      size="medium"
                      status="primary"
                      appearance="filled"
                      color="#171a1f"
                      textStyle={styles.lime52Text}
                    >
                      Predict
                    </Button>
                  </View>
                </View>
                <View style={styles.containerShadowBox}>
                  <View
                    style={[styles.container63, styles.containerShadowBox1]}
                  >
                    <Text
                      style={styles.riceSeeds}
                    >{`Disease Prediction `}</Text>
                    <RNEButton
                      radius={5}
                      iconPosition="left"
                      type="solid"
                      color="#6acc51"
                      crop="4"
                      containerStyle={styles.container43Btn}
                      buttonStyle={styles.container43Btn1}
                    />
                    <Button
                      style={styles.lime5}
                      title="Predict"
                      size="medium"
                      status="primary"
                      appearance="filled"
                      color="#171a1f"
                      textStyle={styles.lime53Text}
                    >
                      Predict
                    </Button>
                  </View>
                  <Image
                    style={[styles.image20Icon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/image-20.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frame8, styles.frame8Position]}>
            <View style={[styles.container32, styles.frame8Position]}>
              <View style={styles.image21} />
              <View style={[styles.frame9, styles.frameLayout4]}>
                <View style={[styles.frame10, styles.frameLayout3]}>
                  <Text style={[styles.humidity, styles.windPosition]}>
                    Humidity
                  </Text>
                </View>
              </View>
              <Image
                style={styles.frameIcon}
                contentFit="cover"
                source={require("../assets/frame1.png")}
              />
              <View style={[styles.frame11, styles.framePosition1]}>
                <Text style={[styles.text, styles.hpaPosition]}>30%</Text>
              </View>
              <View style={styles.frame12}>
                <Text style={[styles.c, styles.cTypo]}>COIMBATORE</Text>
              </View>
              <View style={[styles.frame13, styles.frameLayout2]}>
                <View style={[styles.frame14, styles.frameLayout2]}>
                  <Text style={[styles.percipitation, styles.windPosition]}>
                    Percipitation
                  </Text>
                </View>
              </View>
              <View style={[styles.frame15, styles.framePosition1]}>
                <Text style={[styles.text, styles.hpaPosition]}>5.1ml</Text>
              </View>
              <View style={[styles.frame16, styles.c1Layout]}>
                <Text style={[styles.c1, styles.c1Layout]}>+17c</Text>
              </View>
              <View style={[styles.frame17, styles.framePosition]}>
                <Text style={[styles.hpa, styles.hpaPosition]}>450 hPa</Text>
              </View>
              <View style={[styles.frame18, styles.frameLayout1]}>
                <View style={[styles.frame19, styles.frameLayout1]}>
                  <Text style={[styles.pressure, styles.windPosition]}>
                    Pressure
                  </Text>
                </View>
              </View>
              <View style={[styles.frame20, styles.frameLayout]}>
                <View style={[styles.frame21, styles.frameLayout]}>
                  <Text style={[styles.wind, styles.windPosition]}>Wind</Text>
                </View>
              </View>
              <View style={[styles.frame22, styles.framePosition]}>
                <Text style={[styles.hpa, styles.hpaPosition]}>23 m/s</Text>
              </View>
            </View>
            <View style={styles.frame23} />
            <View style={styles.frame24} />
          </View>
        </View>
      </View>
      <View style={[styles.frame25, styles.frame25Layout]}>
        <View style={[styles.servicesParent, styles.frame25Layout]}>
          <Text style={[styles.services, styles.cartTypo]}>Services</Text>
          <Text style={[styles.profile, styles.cartTypo]}>Profile</Text>
          <Text style={[styles.cart, styles.cartTypo]}>growth</Text>
          <Pressable
            style={[styles.profile2, styles.frame3Position]}
            onPress={() => navigation.navigate("Container2")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/profile-2.png")}
            />
          </Pressable>
          <Pressable
            style={styles.image16}
            onPress={() => navigation.navigate("Container")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/image-16.png")}
            />
          </Pressable>
          <Image
            style={[styles.image33Icon, styles.container61Position]}
            contentFit="cover"
            source={require("../assets/image-33.png")}
          />
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.home, styles.cartTypo]}>Home</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container4Btn: {
    left: 11,
    top: 36,
    position: "absolute",
  },
  container4Btn1: {
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: 4,
    width: 50,
    height: 17,
  },
  lime5Text: {
    fontFamily: "Inter-Regular",
  },
  container41Btn: {
    left: 11,
    top: 36,
    position: "absolute",
  },
  container41Btn1: {
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: 4,
    width: 50,
    height: 17,
  },
  lime51Text: {
    fontFamily: "Inter-Regular",
  },
  container42Btn: {
    left: 11,
    top: 36,
    position: "absolute",
  },
  container42Btn1: {
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: 4,
    width: 50,
    height: 17,
  },
  lime52Text: {
    fontFamily: "Inter-Regular",
  },
  container43Btn: {
    left: 11,
    top: 36,
    position: "absolute",
  },
  container43Btn1: {
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: 4,
    width: 50,
    height: 17,
  },
  lime53Text: {
    fontFamily: "Inter-Regular",
  },
  frame3Position: {
    height: 28,
    top: 0,
    position: "absolute",
  },
  hpaPosition: {
    textAlign: "left",
    color: Color.colorGray_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameLayout6: {
    height: 182,
    overflow: "hidden",
    position: "absolute",
  },
  iconLayout1: {
    height: 107,
    position: "absolute",
    borderRadius: Border.br_9xs,
  },
  containerShadowBox1: {
    height: 67,
    width: 146,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(23, 26, 31, 0.12)",
  },
  container61Position: {
    left: 177,
    position: "absolute",
    borderRadius: Border.br_9xs,
  },
  frame8Position: {
    height: 205,
    left: 0,
    width: 352,
    top: 0,
    position: "absolute",
  },
  frameLayout4: {
    height: 76,
    top: 123,
  },
  frameLayout3: {
    height: 52,
    backgroundColor: Color.colorGray_200,
    left: 0,
    top: 0,
    borderRadius: Border.br_9xs,
  },
  windPosition: {
    color: Color.colorWhite,
    left: "50%",
    top: "50%",
    marginTop: -11,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  framePosition1: {
    height: 33,
    top: 166,
    overflow: "hidden",
    position: "absolute",
  },
  cTypo: {
    lineHeight: 56,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  frameLayout2: {
    width: 96,
    overflow: "hidden",
    position: "absolute",
  },
  c1Layout: {
    width: 223,
    position: "absolute",
  },
  framePosition: {
    height: 35,
    top: 164,
    overflow: "hidden",
    position: "absolute",
  },
  frameLayout1: {
    width: 71,
    overflow: "hidden",
    position: "absolute",
  },
  frameLayout: {
    width: 46,
    overflow: "hidden",
    position: "absolute",
  },
  frame25Layout: {
    height: 46,
    position: "absolute",
  },
  cartTypo: {
    color: Color.colorSilver,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    top: 26,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  featuredProducts: {
    fontSize: FontSize.size_lg,
    lineHeight: 28,
    fontFamily: FontFamily.epilogueBold,
    color: Color.colorGray_100,
    fontWeight: "700",
  },
  frame3: {
    left: 6,
    width: 336,
    overflow: "hidden",
  },
  image15Icon: {
    width: 145,
    top: 1,
    left: 2,
  },
  riceSeeds: {
    top: 6,
    left: 12,
    fontFamily: FontFamily.interRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorGray_100,
    position: "absolute",
  },
  lime5: {
    top: 34,
    left: 15,
    position: "absolute",
  },
  container6: {
    left: 1,
    top: 111,
    height: 67,
    width: 146,
    position: "absolute",
    borderRadius: Border.br_9xs,
  },
  containerShadowBox2: {
    height: 180,
    width: 152,
    top: 2,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xs,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(23, 26, 31, 0.12)",
  },
  image31Icon: {
    width: 147,
    height: 106,
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_9xs,
  },
  containerShadowBox: {
    left: 174,
    height: 180,
    width: 152,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xs,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(23, 26, 31, 0.12)",
  },
  frame5: {
    width: 326,
    left: 0,
    top: 0,
  },
  frame4: {
    top: 224,
    width: 340,
    left: 2,
  },
  container61: {
    top: 335,
    height: 67,
    width: 146,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(23, 26, 31, 0.12)",
  },
  container62: {
    left: 1,
    top: 111,
    height: 67,
    width: 146,
    position: "absolute",
    borderRadius: Border.br_9xs,
  },
  container63: {
    left: 1,
    top: 111,
    height: 67,
    width: 146,
    position: "absolute",
    borderRadius: Border.br_9xs,
  },
  image20Icon: {
    left: 4,
    width: 144,
    top: 0,
  },
  frame6: {
    top: 32,
    left: 0,
    width: 342,
  },
  frame2: {
    top: 222,
    left: 10,
    height: 406,
    width: 342,
    overflow: "hidden",
    position: "absolute",
  },
  image21: {
    top: -16,
    backgroundColor: Color.colorForestgreen,
    width: 322,
    height: 215,
    left: 16,
    position: "absolute",
    borderRadius: Border.br_9xs,
  },
  humidity: {
    marginLeft: -31.5,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    marginTop: -11,
  },
  frame10: {
    width: 75,
    overflow: "hidden",
    position: "absolute",
  },
  frame9: {
    width: 75,
    overflow: "hidden",
    position: "absolute",
    left: 16,
  },
  frameIcon: {
    top: 5,
    left: 22,
    width: 51,
    height: 194,
    overflow: "hidden",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_mini,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
  },
  frame11: {
    left: 30,
    width: 32,
  },
  c: {
    fontSize: 40,
    position: "absolute",
  },
  frame12: {
    top: 11,
    left: 66,
    width: 254,
    height: 188,
    overflow: "hidden",
    position: "absolute",
  },
  percipitation: {
    marginLeft: -42,
    fontFamily: FontFamily.interRegular,
  },
  frame14: {
    height: 52,
    backgroundColor: Color.colorGray_200,
    left: 0,
    top: 0,
    borderRadius: Border.br_9xs,
  },
  frame13: {
    left: 91,
    height: 76,
    top: 123,
  },
  frame15: {
    left: 120,
    width: 36,
  },
  c1: {
    fontSize: 64,
    height: 71,
    lineHeight: 56,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  frame16: {
    top: 77,
    height: 122,
    left: 176,
    overflow: "hidden",
  },
  hpa: {
    fontSize: FontSize.size_base,
    lineHeight: 26,
    fontFamily: FontFamily.interRegular,
  },
  frame17: {
    width: 64,
    left: 187,
  },
  pressure: {
    marginLeft: -29.5,
    fontFamily: FontFamily.interRegular,
  },
  frame19: {
    height: 52,
    backgroundColor: Color.colorGray_200,
    left: 0,
    top: 0,
    borderRadius: Border.br_9xs,
  },
  frame18: {
    left: 187,
    height: 76,
    top: 123,
  },
  wind: {
    marginLeft: -17,
    fontFamily: FontFamily.interRegular,
  },
  frame21: {
    height: 52,
    backgroundColor: Color.colorGray_200,
    left: 0,
    top: 0,
    borderRadius: Border.br_9xs,
  },
  frame20: {
    left: 269,
    height: 76,
    top: 123,
  },
  frame22: {
    left: 263,
    width: 53,
  },
  container32: {
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(23, 26, 31, 0.12)",
    height: 205,
    borderRadius: Border.br_9xs,
  },
  frame23: {
    left: 276,
    width: 48,
    height: 100,
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  frame24: {
    left: 19,
    width: 245,
    height: 103,
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  frame8: {
    overflow: "hidden",
  },
  frame1: {
    left: 7,
    width: 352,
    top: 0,
    overflow: "hidden",
    height: 628,
    position: "absolute",
  },
  frame: {
    top: 62,
    left: 3,
    width: 359,
    overflow: "hidden",
    height: 628,
    position: "absolute",
  },
  services: {
    left: 85,
  },
  profile: {
    left: 247,
  },
  cart: {
    left: 176,
  },
  icon: {
    overflow: "hidden",
  },
  profile2: {
    left: 257,
    width: 28,
  },
  icon1: {
    borderRadius: Border.br_9xs,
  },
  image16: {
    left: 97,
    width: 26,
    height: 26,
    top: 0,
    position: "absolute",
  },
  image33Icon: {
    width: 27,
    height: 24,
    top: 1,
  },
  vectorIcon: {
    height: "43.04%",
    width: "8.18%",
    top: "2.17%",
    right: "77.44%",
    bottom: "54.78%",
    left: "14.39%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  home: {
    left: 36,
  },
  servicesParent: {
    width: 285,
    left: 0,
    top: 0,
  },
  frame25: {
    top: 715,
    width: 293,
    left: 36,
    overflow: "hidden",
  },
  container39: {
    flex: 1,
    height: 778,
    width: "100%",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xs,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(23, 26, 31, 0.12)",
  },
});

export default Container4;
