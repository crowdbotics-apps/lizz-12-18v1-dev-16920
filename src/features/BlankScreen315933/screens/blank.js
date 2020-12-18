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
      <View style={styles.View_232_3981}>
        <View style={styles.View_232_3982} />
        <View style={styles.View_232_3986}>
          <View style={styles.View_232_3987} />
          <View style={styles.View_232_3991} />
          <View style={styles.View_232_3995} />
        </View>
        <View style={styles.View_232_4002}>
          <View style={styles.View_232_4003} />
        </View>
      </View>
      <View style={styles.View_307_138}>
        <View style={styles.View_307_119}>
          <View style={styles.View_307_120}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ba/306d/d1704bab86a361d778214edd0a5bc532"
              }}
              style={styles.ImageBackground_307_121}
            />
          </View>
        </View>
        <View style={styles.View_307_131}>
          <Text style={styles.Text_307_131}>Harry</Text>
        </View>
      </View>
      <View style={styles.View_324_297}>
        <View style={styles.View_512_0}>
          <View style={styles.View_512_1}>
            <View style={styles.View_1013_0} />
            <View style={styles.View_512_2}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05e2/cc8a/ba43d75b781669c29ecb7a7b75c35949"
                }}
                style={styles.ImageBackground_512_3}
              />
            </View>
          </View>
          <View style={styles.View_512_5}>
            <Text style={styles.Text_512_5}>Alexis</Text>
          </View>
        </View>
        <View style={styles.View_307_133}>
          <View style={styles.View_232_4005}>
            <View style={styles.View_232_4006}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e30d/eb75/2b20ec0bf394dbf3a22a2d0900747e5e"
                }}
                style={styles.ImageBackground_232_4008}
              />
              <View style={styles.View_782_10} />
            </View>
          </View>
          <View style={styles.View_307_126}>
            <Text style={styles.Text_307_126}>James</Text>
          </View>
        </View>
        <View style={styles.View_307_136}>
          <View style={styles.View_232_4011}>
            <View style={styles.View_232_4012}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1587/4a22/986000cd61e062e5c030d1158d90bb9b"
                }}
                style={styles.ImageBackground_232_4013}
              />
            </View>
          </View>
          <View style={styles.View_307_129}>
            <Text style={styles.Text_307_129}>Olivia</Text>
          </View>
        </View>
        <View style={styles.View_307_134}>
          <View style={styles.View_307_127}>
            <Text style={styles.Text_307_127}>Sarah</Text>
          </View>
          <View style={styles.View_232_4027}>
            <View style={styles.View_232_4028}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd59/1ad9/77d0bdef77268562ffe093d42158eb6a"
                }}
                style={styles.ImageBackground_232_4030}
              />
              <View style={styles.View_782_11} />
            </View>
          </View>
        </View>
        <View style={styles.View_307_135}>
          <View style={styles.View_307_128}>
            <Text style={styles.Text_307_128}>Ostin</Text>
          </View>
          <View style={styles.View_232_4033}>
            <View style={styles.View_232_4034}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1673/a51f/ce28211421c502dcd581aa36ca63e667"
                }}
                style={styles.ImageBackground_232_4035}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_307_137}>
          <View style={styles.View_307_130}>
            <Text style={styles.Text_307_130}>Jenny</Text>
          </View>
          <View style={styles.View_307_122}>
            <View style={styles.View_307_123}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/091e/1979/f339fccd44e390a7423b9fcfdac4c66a"
                }}
                style={styles.ImageBackground_307_124}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_232_4038}>
        <View style={styles.View_232_4039}>
          <Text style={styles.Text_232_4039}>Family 8</Text>
        </View>
        <View style={styles.View_232_4040} />
      </View>
      <View style={styles.View_232_4041}>
        <View style={styles.View_232_4042}>
          <Text style={styles.Text_232_4042}>Invite</Text>
        </View>
        <View style={styles.View_232_4043}>
          <View style={styles.View_232_4044} />
        </View>
      </View>
      <View style={styles.View_232_4049}>
        <View style={styles.View_232_4050}>
          <Text style={styles.Text_232_4050}>Activity</Text>
        </View>
        <View style={styles.View_418_0}>
          <View style={styles.View_418_1} />
          <View style={styles.View_418_2}>
            <View style={styles.View_418_3}>
              <Text style={styles.Text_418_3}>James </Text>
            </View>
            <View style={styles.View_418_4}>
              <Text style={styles.Text_418_4}>
                responded to Jenny’s quesiton
              </Text>
            </View>
            <View style={styles.View_613_174}>
              <View style={styles.View_613_175} />
            </View>
            <View style={styles.View_418_9}>
              <Text style={styles.Text_418_9}>12 July</Text>
            </View>
          </View>
          <View style={styles.View_418_10}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fd8/260b/06b31cbda6fad6810b23c5b1620b573a"
              }}
              style={styles.ImageBackground_418_11}
            />
            <View style={styles.View_418_12} />
            <View style={styles.View_418_13}>
              <Text style={styles.Text_418_13}>0:57</Text>
            </View>
            <View style={styles.View_418_14} />
            <View style={styles.View_418_25} />
            <View style={styles.View_418_26}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4246/9b22/1cf0083190676fc63646d31616ee2a0a"
                }}
                style={styles.ImageBackground_418_27}
              />
              <View style={styles.View_418_28}>
                <Text style={styles.Text_418_28}>
                  10 things you like about me and Al?
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_232_4076}>
          <View style={styles.View_453_2201} />
          <View style={styles.View_232_4078}>
            <Text style={styles.Text_232_4078}>Sarah</Text>
          </View>
          <View style={styles.View_924_705}>
            <Text style={styles.Text_924_705}>
              posted new “I matter” statement
            </Text>
          </View>
          <View style={styles.View_924_706}>
            <View style={styles.View_924_707} />
          </View>
          <View style={styles.View_232_4080}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5017/5696/d909f8a960644cc0400278e41fc5bbf9"
              }}
              style={styles.ImageBackground_232_4081}
            />
            <View style={styles.View_924_733} />
            <View style={styles.View_924_734}>
              <Text style={styles.Text_924_734}>0:49</Text>
            </View>
            <View style={styles.View_924_735} />
            <View style={styles.View_924_746} />
            <View style={styles.View_924_747}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d46f/641d/a4d29526d32a0d73bcb161123490b305"
                }}
                style={styles.ImageBackground_924_748}
              />
              <View style={styles.View_924_749}>
                <Text style={styles.Text_924_749}>
                  Morning exercises with Jane
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_232_4082}>
            <Text style={styles.Text_232_4082}>12 July</Text>
          </View>
        </View>
        <View style={styles.View_232_4083}>
          <View style={styles.View_232_4084} />
          <View style={styles.View_232_4085}>
            <Text style={styles.Text_232_4085}>Jenny</Text>
          </View>
          <View style={styles.View_232_4086}>
            <Text style={styles.Text_232_4086}>
              posted new “I matter” statement
            </Text>
          </View>
          <View style={styles.View_613_358}>
            <View style={styles.View_613_359} />
          </View>
          <View style={styles.View_232_4087}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1435/97e3/2574814bfad67a7a21bdddd6900c9005"
              }}
              style={styles.ImageBackground_232_4088}
            />
            <View style={styles.View_924_1161} />
            <View style={styles.View_924_1162}>
              <Text style={styles.Text_924_1162}>0:49</Text>
            </View>
            <View style={styles.View_924_1160} />
          </View>
          <View style={styles.View_232_4089}>
            <Text style={styles.Text_232_4089}>10 July</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_232_4090}>
        <View style={styles.View_232_4091} />
        <View style={styles.View_232_4092}>
          <View style={styles.View_232_4093} />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_232_3981: {
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
  View_232_3982: {
    width: 375,
    minWidth: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_232_3986: {
    width: 66.661376953125,
    minWidth: 66.661376953125,
    height: 20.666584014892578,
    minHeight: 20.666584014892578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.66650390625,
    top: 8
  },
  View_232_3987: {
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
  View_232_3991: {
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
  View_232_3995: {
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
  View_232_4002: {
    width: 54,
    minWidth: 54,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 12
  },
  View_232_4003: {
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
  View_307_138: {
    width: 50,
    minWidth: 50,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 392,
    top: 120
  },
  View_307_119: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_307_120: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_307_121: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_307_131: {
    width: 35,
    minWidth: 35,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 60
  },
  Text_307_131: {
    color: "rgba(22, 31, 50, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_324_297: {
    width: 374.0002746582031,
    minWidth: 374.0002746582031,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6,
    top: 118
  },
  View_512_0: {
    width: 64.00025939941406,
    minWidth: 64.00025939941406,
    height: 77,
    minHeight: 77,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_512_1: {
    width: 64.00025939941406,
    minWidth: 64.00025939941406,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1013_0: {
    width: 22,
    height: 30,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_512_2: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 2
  },
  ImageBackground_512_3: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(247, 75, 115, 1)",
    borderWidth: "2",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70
  },
  View_512_5: {
    width: 35,
    minWidth: 35,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 60
  },
  Text_512_5: {
    color: "rgba(22, 31, 50, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_307_133: {
    width: 52,
    minWidth: 52,
    height: 76,
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 75,
    top: 1
  },
  View_232_4005: {
    width: 52,
    minWidth: 52,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_232_4006: {
    width: 52,
    minWidth: 52,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_232_4008: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 1,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70
  },
  View_782_10: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 3
  },
  View_307_126: {
    width: 36,
    minWidth: 36,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 59
  },
  Text_307_126: {
    color: "rgba(22, 31, 50, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_307_136: {
    width: 50,
    minWidth: 50,
    height: 75,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 262.00048828125,
    top: 2
  },
  View_232_4011: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_232_4012: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_232_4013: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_307_129: {
    width: 34,
    minWidth: 34,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 58
  },
  Text_307_129: {
    color: "rgba(22, 31, 50, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_307_134: {
    width: 52,
    minWidth: 52,
    height: 76,
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 137,
    top: 1
  },
  View_307_127: {
    width: 34,
    minWidth: 34,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 59
  },
  Text_307_127: {
    color: "rgba(22, 31, 50, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_232_4027: {
    width: 52,
    minWidth: 52,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_232_4028: {
    width: 52,
    minWidth: 52,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_232_4030: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 1,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_782_11: {
    width: 8,
    minWidth: 8,
    height: 8,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 3
  },
  View_307_135: {
    width: 50,
    minWidth: 50,
    height: 75,
    minHeight: 75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 200.00048828125,
    top: 2
  },
  View_307_128: {
    width: 32,
    minWidth: 32,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 58
  },
  Text_307_128: {
    color: "rgba(22, 31, 50, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_232_4033: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_232_4034: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_232_4035: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  View_307_137: {
    width: 50,
    minWidth: 50,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324.00048828125,
    top: 2
  },
  View_307_130: {
    width: 36,
    minWidth: 36,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 60
  },
  Text_307_130: {
    color: "rgba(22, 31, 50, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_307_122: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_307_123: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_307_124: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_232_4038: {
    width: 108,
    minWidth: 108,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21,
    top: 60
  },
  View_232_4039: {
    width: 84,
    minWidth: 84,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_232_4039: {
    color: "rgba(22, 31, 50, 1)",
    fontSize: 23,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_232_4040: {
    width: 12.000000953674316,
    minWidth: 12.000000953674316,
    height: 10.000000953674316,
    minHeight: 10.000000953674316,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96,
    top: 9
  },
  View_232_4041: {
    width: 66,
    minWidth: 66,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 67
  },
  View_232_4042: {
    width: 38,
    minWidth: 38,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_232_4042: {
    color: "rgba(160, 167, 182, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_232_4043: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_232_4044: {
    width: 15.416668891906738,
    height: 15.246691703796387,
    top: 2.291748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.29150390625
  },
  View_232_4049: {
    width: 335,
    minWidth: 335,
    height: 1649,
    minHeight: 1649,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 238
  },
  View_232_4050: {
    width: 73,
    minWidth: 73,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_232_4050: {
    color: "rgba(22, 31, 50, 1)",
    fontSize: 23,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_418_0: {
    width: 335,
    minWidth: 335,
    height: 494,
    minHeight: 494,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 45
  },
  View_418_1: {
    width: 335,
    minWidth: 335,
    height: 494,
    minHeight: 494,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_418_2: {
    width: 295,
    minWidth: 295,
    height: 42,
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  View_418_3: {
    width: 41,
    minWidth: 41,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_418_3: {
    color: "rgba(22, 31, 50, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_418_4: {
    width: 177,
    minWidth: 177,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 23
  },
  Text_418_4: {
    color: "rgba(160, 167, 182, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_613_174: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 22,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_613_175: {
    width: 19.96181297302246,
    height: 34.948543548583984,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -0.0458984375
  },
  View_418_9: {
    width: 37,
    minWidth: 37,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 258,
    top: 1
  },
  Text_418_9: {
    color: "rgba(160, 167, 182, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_418_10: {
    width: 335,
    minWidth: 335,
    height: 420,
    minHeight: 420,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 74
  },
  ImageBackground_418_11: {
    width: 335,
    minWidth: 335,
    height: 420,
    minHeight: 420,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_418_12: {
    width: 335,
    minWidth: 335,
    height: 117.00003051757812,
    minHeight: 117.00003051757812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_418_13: {
    width: 24,
    minWidth: 24,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291,
    top: 21
  },
  Text_418_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_418_14: {
    width: 335,
    minWidth: 335,
    height: 117,
    minHeight: 117,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 303,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_418_25: {
    width: 32,
    minWidth: 32,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 152,
    top: 177
  },
  View_418_26: {
    width: 284,
    minWidth: 284,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 365
  },
  ImageBackground_418_27: {
    width: 35,
    minWidth: 35,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_418_28: {
    width: 238,
    minWidth: 238,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 8
  },
  Text_418_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_232_4076: {
    width: 335,
    minWidth: 335,
    height: 494,
    minHeight: 494,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 555
  },
  View_453_2201: {
    width: 335,
    minWidth: 335,
    height: 494,
    minHeight: 494,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_232_4078: {
    width: 39,
    minWidth: 39,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  Text_232_4078: {
    color: "rgba(22, 31, 50, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_924_705: {
    width: 193,
    minWidth: 193,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 43
  },
  Text_924_705: {
    color: "rgba(160, 167, 182, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_924_706: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 42,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_924_707: {
    width: 18.552867889404297,
    minWidth: 18.552867889404297,
    height: 58.052371978759766,
    minHeight: 58.052371978759766,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.0947265625,
    top: 0.154541015625
  },
  View_232_4080: {
    width: 335,
    minWidth: 335,
    height: 420,
    minHeight: 420,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 74
  },
  ImageBackground_232_4081: {
    width: 335,
    minWidth: 335,
    height: 420,
    minHeight: 420,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_924_733: {
    width: 335,
    minWidth: 335,
    height: 117.00003051757812,
    minHeight: 117.00003051757812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_924_734: {
    width: 26,
    minWidth: 26,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 21
  },
  Text_924_734: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_924_735: {
    width: 335,
    minWidth: 335,
    height: 117,
    minHeight: 117,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 303,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_924_746: {
    width: 32,
    minWidth: 32,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 152,
    top: 177
  },
  View_924_747: {
    width: 231,
    minWidth: 231,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 365
  },
  ImageBackground_924_748: {
    width: 35,
    minWidth: 35,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  View_924_749: {
    width: 185,
    minWidth: 185,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 8
  },
  Text_924_749: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_232_4082: {
    width: 37,
    minWidth: 37,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278,
    top: 21
  },
  Text_232_4082: {
    color: "rgba(160, 167, 182, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_232_4083: {
    width: 335,
    minWidth: 335,
    height: 584,
    minHeight: 584,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1065
  },
  View_232_4084: {
    width: 335,
    minWidth: 335,
    height: 494,
    minHeight: 494,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_232_4085: {
    width: 43,
    minWidth: 43,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  Text_232_4085: {
    color: "rgba(22, 31, 50, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_232_4086: {
    width: 193,
    minWidth: 193,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46,
    top: 46
  },
  Text_232_4086: {
    color: "rgba(160, 167, 182, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_613_358: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_613_359: {
    width: 18.552867889404297,
    minWidth: 18.552867889404297,
    height: 58.052371978759766,
    minHeight: 58.052371978759766,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.0947265625,
    top: 0.15478515625
  },
  View_232_4087: {
    width: 335.0000305175781,
    minWidth: 335.0000305175781,
    height: 507,
    minHeight: 507,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 77
  },
  ImageBackground_232_4088: {
    width: 335,
    minWidth: 335,
    height: 507,
    minHeight: 507,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_924_1161: {
    width: 335,
    minWidth: 335,
    height: 117.00003051757812,
    minHeight: 117.00003051757812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_924_1162: {
    width: 26,
    minWidth: 26,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 289,
    top: 21
  },
  Text_924_1162: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_924_1160: {
    width: 32,
    minWidth: 32,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 151,
    top: 231
  },
  View_232_4089: {
    width: 39,
    minWidth: 39,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 276,
    top: 20
  },
  Text_232_4089: {
    color: "rgba(160, 167, 182, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_232_4090: {
    width: 60,
    minWidth: 60,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 295,
    top: 1575
  },
  View_232_4091: {
    width: 60,
    minWidth: 60,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(247, 75, 115, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_232_4092: {
    width: 14,
    minWidth: 14,
    height: 14,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 23
  },
  View_232_4093: {
    width: 14,
    minWidth: 14,
    height: 14,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_2: { height: 1675 }
})
