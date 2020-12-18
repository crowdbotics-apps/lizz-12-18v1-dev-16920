import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_117_145}>
        <Text style={styles.Text_117_145}>New York</Text>
      </View>
      <View style={styles.View_117_146} />
      <View style={styles.View_117_147}>
        <Text style={styles.Text_117_147}>Search in</Text>
      </View>
      <View style={styles.View_117_148} />
      <View style={styles.View_117_149} />
      <View style={styles.View_117_150} />
      <View style={styles.View_117_151} />
      <View style={styles.View_117_152}>
        <Text style={styles.Text_117_152}>New</Text>
      </View>
      <View style={styles.View_117_153}>
        <Text style={styles.Text_117_153}>Loft</Text>
      </View>
      <View style={styles.View_117_154}>
        <Text style={styles.Text_117_154}>Modern</Text>
      </View>
      <View style={styles.View_117_155}>
        <Text style={styles.Text_117_155}>Popular</Text>
      </View>
      <View style={styles.View_117_156}>
        <View style={styles.View_117_157}>
          <View style={styles.View_117_158} />
        </View>
      </View>
      <View style={styles.View_117_160} />
      <View style={styles.View_117_161}>
        <Text style={styles.Text_117_161}>Casual</Text>
      </View>
      <View style={styles.View_117_162}>
        <View style={styles.View_117_163} />
        <View style={styles.View_117_164}>
          <View style={styles.View_117_165} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97ec/80a8/5771c3fcaf8a44abfe97f1ac53c2c611"
            }}
            style={styles.ImageBackground_117_166}
          />
        </View>
        <View style={styles.View_117_167} />
        <View style={styles.View_117_168}>
          <View style={styles.View_117_169}>
            <View style={styles.View_117_170} />
          </View>
        </View>
        <View style={styles.View_117_172} />
        <View style={styles.View_117_173} />
        <View style={styles.View_117_174}>
          <View style={styles.View_117_175} />
        </View>
        <View style={styles.View_117_180}>
          <Text style={styles.Text_117_180}>Invest</Text>
        </View>
        <View style={styles.View_117_181}>
          <Text style={styles.Text_117_181}>Trending</Text>
        </View>
      </View>
      <View style={styles.View_117_182}>
        <View style={styles.View_117_183} />
        <View style={styles.View_117_184}>
          <View style={styles.View_117_185} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a28d/a5f1/952c78f417901f25cd9da51c2bd3c5c1"
            }}
            style={styles.ImageBackground_117_186}
          />
        </View>
        <View style={styles.View_117_187} />
        <View style={styles.View_117_188} />
        <View style={styles.View_117_189}>
          <View style={styles.View_117_190}>
            <View style={styles.View_117_191} />
          </View>
        </View>
        <View style={styles.View_117_193}>
          <Text style={styles.Text_117_193}>Trending</Text>
        </View>
        <View style={styles.View_117_194} />
        <View style={styles.View_117_195}>
          <View style={styles.View_117_196} />
        </View>
        <View style={styles.View_117_201}>
          <Text style={styles.Text_117_201}>Invest</Text>
        </View>
      </View>
      <View style={styles.View_117_202}>
        <View style={styles.View_117_203} />
        <View style={styles.View_117_204}>
          <View style={styles.View_117_205} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f7f/002a/d3846d41561731acf4edee5a1d8bf778"
            }}
            style={styles.ImageBackground_117_206}
          />
          <View style={styles.View_117_207}>
            <View style={styles.View_117_208}>
              <View style={styles.View_117_209} />
            </View>
          </View>
          <View style={styles.View_117_211}>
            <Text style={styles.Text_117_211}>Trending</Text>
          </View>
        </View>
        <View style={styles.View_117_212} />
        <View style={styles.View_117_213} />
        <View style={styles.View_117_214} />
        <View style={styles.View_117_215}>
          <View style={styles.View_117_216} />
        </View>
        <View style={styles.View_117_221}>
          <Text style={styles.Text_117_221}>Invest</Text>
        </View>
      </View>
      <View style={styles.View_117_222}>
        <Text style={styles.Text_117_222}>Modern flat</Text>
      </View>
      <View style={styles.View_117_223}>
        <Text style={styles.Text_117_223}>Modern loft home</Text>
      </View>
      <View style={styles.View_117_224} />
      <View style={styles.View_117_225} />
      <View style={styles.View_117_226}>
        <Text style={styles.Text_117_226}>205 East 59 Street</Text>
      </View>
      <View style={styles.View_117_227}>
        <Text style={styles.Text_117_227}>55 Thompson Street</Text>
      </View>
      <View style={styles.View_117_228}>
        <View style={styles.View_117_229} />
        <View style={styles.View_117_230} />
        <View style={styles.View_117_232}>
          <View style={styles.View_117_233}>
            <View style={styles.View_117_234} />
          </View>
        </View>
        <View style={styles.View_117_236} />
        <View style={styles.View_117_237}>
          <View style={styles.View_117_238}>
            <View style={styles.View_117_239} />
          </View>
          <View style={styles.View_117_241}>
            <View style={styles.View_117_242} />
          </View>
        </View>
      </View>
      <View style={styles.View_117_244}>
        <View style={styles.View_I117_244_7330_56}>
          <View style={styles.View_I117_244_7330_57} />
        </View>
        <View style={styles.View_I117_244_7330_61}>
          <View style={styles.View_I117_244_7330_62} />
          <View style={styles.View_I117_244_7330_66} />
          <View style={styles.View_I117_244_7330_70} />
        </View>
        <View style={styles.View_I117_244_7330_77}>
          <View style={styles.View_I117_244_7330_78} />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_117_145: {
    flexGrow: 1,
    height: 54,
    top: 93,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24
  },
  Text_117_145: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 36,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_146: {
    width: 327,
    minWidth: 327,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 147
  },
  View_117_147: {
    flexGrow: 1,
    height: 18,
    top: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24
  },
  Text_117_147: {
    color: "rgba(188, 195, 200, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_148: {
    width: 72,
    minWidth: 72,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 166,
    borderColor: "rgba(226, 231, 234, 1)",
    borderWidth: "1",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_149: {
    width: 68,
    minWidth: 68,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 98,
    top: 166,
    borderColor: "rgba(226, 231, 234, 1)",
    borderWidth: "1",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_150: {
    width: 83,
    minWidth: 83,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 260,
    top: 166,
    borderColor: "rgba(226, 231, 234, 1)",
    borderWidth: "1",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_151: {
    width: 84,
    minWidth: 84,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 166,
    borderColor: "rgba(226, 231, 234, 1)",
    borderWidth: "1",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_152: {
    flexGrow: 1,
    height: 18,
    top: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31
  },
  Text_117_152: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_153: {
    flexGrow: 1,
    height: 18,
    top: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 106
  },
  Text_117_153: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_154: {
    flexGrow: 1,
    height: 18,
    top: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273
  },
  Text_117_154: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_155: {
    flexGrow: 1,
    height: 18,
    top: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184
  },
  Text_117_155: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_156: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327,
    top: 107,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_157: {
    width: 24,
    height: 16,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_158: {
    width: 24,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_160: {
    width: 84,
    minWidth: 84,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 349,
    top: 166,
    borderColor: "rgba(226, 231, 234, 1)",
    borderWidth: "1",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_161: {
    flexGrow: 1,
    height: 18,
    top: 176,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 362
  },
  Text_117_161: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_162: {
    width: 327,
    minWidth: 327,
    height: 286,
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 239
  },
  View_117_163: {
    width: 327,
    minWidth: 327,
    height: 286,
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(249, 251, 252, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_164: {
    width: 327,
    minWidth: 327,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_117_165: {
    width: 327,
    minWidth: 327,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  ImageBackground_117_166: {
    width: 333.79815673828125,
    minWidth: 333.79815673828125,
    height: 253,
    minHeight: 253,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -4,
    top: -9,
    resizeMode: "cover"
  },
  View_117_167: {
    width: 149,
    minWidth: 149,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 146,
    backgroundColor: "rgba(139, 170, 224, 1)",
    opacity: 0.6499999761581421,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_117_168: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 23,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_169: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.6171875
  },
  View_117_170: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_172: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 146,
    backgroundColor: "rgba(139, 170, 224, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_117_173: {
    width: 23,
    minWidth: 23,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192,
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_174: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_175: {
    width: 24,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_180: {
    flexGrow: 1,
    height: 23.34373664855957,
    top: 159.18310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76
  },
  Text_117_180: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_181: {
    flexGrow: 1,
    height: 23.503164291381836,
    top: 23.000244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64
  },
  Text_117_181: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_182: {
    width: 327,
    minWidth: 327,
    height: 286,
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 549
  },
  View_117_183: {
    width: 327,
    minWidth: 327,
    height: 286,
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(249, 251, 252, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_184: {
    width: 327,
    minWidth: 327,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_117_185: {
    width: 327,
    minWidth: 327,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  ImageBackground_117_186: {
    width: 333.79815673828125,
    minWidth: 333.79815673828125,
    height: 253,
    minHeight: 253,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -4,
    top: -9,
    resizeMode: "cover"
  },
  View_117_187: {
    width: 149,
    minWidth: 149,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 146,
    backgroundColor: "rgba(139, 170, 224, 1)",
    opacity: 0.6499999761581421,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_117_188: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 146,
    backgroundColor: "rgba(139, 170, 224, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_117_189: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 23,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_190: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.6171875
  },
  View_117_191: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_193: {
    flexGrow: 1,
    height: 23.503164291381836,
    top: 23.000244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 64
  },
  Text_117_193: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_194: {
    width: 23,
    minWidth: 23,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192,
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_195: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_196: {
    width: 24,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_201: {
    flexGrow: 1,
    height: 23.34373664855957,
    top: 159.18310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76
  },
  Text_117_201: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_202: {
    width: 327,
    minWidth: 327,
    height: 286,
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 859
  },
  View_117_203: {
    width: 327,
    minWidth: 327,
    height: 286,
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  View_117_204: {
    width: 327,
    minWidth: 327,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_117_205: {
    width: 327,
    minWidth: 327,
    height: 210,
    minHeight: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  ImageBackground_117_206: {
    width: 333.79815673828125,
    minWidth: 333.79815673828125,
    height: 253,
    minHeight: 253,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -4,
    top: -9,
    resizeMode: "cover"
  },
  View_117_207: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 20,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_208: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.6171875
  },
  View_117_209: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_211: {
    flexGrow: 1,
    height: 23.503164291381836,
    top: 20.000244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58
  },
  Text_117_211: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_212: {
    width: 149,
    minWidth: 149,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 146,
    backgroundColor: "rgba(164, 114, 198, 1)",
    opacity: 0.550000011920929,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_117_213: {
    width: 53,
    minWidth: 53,
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 146,
    backgroundColor: "rgba(164, 114, 198, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_117_214: {
    width: 23,
    minWidth: 23,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 192,
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_215: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_216: {
    width: 24,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_221: {
    flexGrow: 1,
    height: 23.34373664855957,
    top: 159.18310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76
  },
  Text_117_221: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_222: {
    flexGrow: 1,
    height: 21,
    top: 465,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54
  },
  Text_117_222: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_223: {
    flexGrow: 1,
    height: 21,
    top: 775,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54
  },
  Text_117_223: {
    color: "rgba(1, 36, 60, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_224: {
    width: 20.870187759399414,
    height: 20,
    top: 399,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 301
  },
  View_117_225: {
    width: 20.870187759399414,
    height: 20,
    top: 709,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 301
  },
  View_117_226: {
    flexGrow: 1,
    height: 18,
    top: 489,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54
  },
  Text_117_226: {
    color: "rgba(188, 195, 200, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_227: {
    flexGrow: 1,
    height: 18,
    top: 799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54
  },
  Text_117_227: {
    color: "rgba(188, 195, 200, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_117_228: {
    width: 375,
    minWidth: 375,
    height: 71,
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 977
  },
  View_117_229: {
    width: 375,
    minWidth: 375,
    height: 71,
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(239, 244, 246, 1)"
  },
  View_117_230: {
    width: 24,
    height: 24,
    top: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44
  },
  View_117_232: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    top: 21,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_233: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.6171875
  },
  View_117_234: {
    width: 18.7659912109375,
    height: 23.999940872192383,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_236: {
    width: 25.044225692749023,
    height: 24,
    top: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 305
  },
  View_117_237: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 221,
    top: 21,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_117_238: {
    width: 23.99995231628418,
    height: 23.99995231628418,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_239: {
    width: 23.99995231628418,
    height: 23.99995231628418,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_241: {
    width: 20,
    height: 20,
    top: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  View_117_242: {
    width: 20,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_117_244: {
    width: 375,
    minWidth: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I117_244_7330_56: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: -2
  },
  View_I117_244_7330_57: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I117_244_7330_61: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 8
  },
  View_I117_244_7330_62: {
    width: 24.32803726196289,
    minWidth: 24.32803726196289,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.33349609375,
    top: 9.333251953125
  },
  View_I117_244_7330_66: {
    width: 15.27237606048584,
    minWidth: 15.27237606048584,
    height: 10.965571403503418,
    minHeight: 10.965571403503418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.02685546875,
    top: 9.33056640625
  },
  View_I117_244_7330_70: {
    width: 17,
    minWidth: 17,
    height: 10.666666984558105,
    minHeight: 10.666666984558105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 9.66650390625
  },
  View_I117_244_7330_77: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 12
  },
  View_I117_244_7330_78: {
    width: 54,
    minWidth: 54,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_2: { height: 1048 }
})
