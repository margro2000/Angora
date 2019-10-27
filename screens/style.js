const React = require("react-native");

const { StyleSheet } = React;

export default {
	container: {
	  flex: 1,
	},

containerView: {
  flex: 1,
},
logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
logo: {
justifyContent: 'center',
height:100,
width: 600,
alignContent: 'center',
resizeMode: 'contain'
},
logoText: {
  fontSize: 40,
  fontFamily: 'Cochin',
  fontWeight: "1000",
  paddingTop: 30,
  paddingBottom: 30,
  marginBottom: 30,
  textAlign: 'center',
  backgroundColor: '#f1b3d7',
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
buttonContainer: {
  flex: 1,
  marginTop: 30,
  marginBottom: 50,
  padding: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  justifyContent: 'center',
},
match: {
	color:'blue',
	 fontFamily: 'Calibri',
	 fontWeight: "600"
},
found: {
	color:'green',
	fontFamily: 'Calibri',
	fontWeight: "600"
},
unsure: {
	color:'red',
	fontFamily: 'Calibri',
	fontWeight: "600"
},
resumeImage: {
  flex: .7,
  width: 20,
  height: 400,
  marginRight: 50,
  borderWidth: 5,
  borderRadius:10,
  borderColor: '#f1b3d7',
  marginLeft: 50
},
icons: {
	flex: .3,
	flexDirection: 'column',
	backgroundColor: '#FAF5F9',
	width: 200,
	height: 400,
	borderRadius:50,
	borderColor: '#f1b3d7',
	borderWidth: 1,
	marginRight:50,
	justifyContent: 'flex-start',
    alignItems: 'center',
},
iconDescription: {
	fontSize: 18,
	borderRadius:50,
    fontFamily: 'Cochin',
    fontWeight: "50000",
    paddingTop: 30,
    color: '#3897f1',
	marginBottom: 80,
	paddingTop: 5,
	paddingRight: 50,
	paddingLeft: 50,
	paddingBottom: 10,
	backgroundColor: '#f1b3d7',
},
icon: {
	marginBottom: 40,
	width: 50,
	height: 50
},
notesSubmit: {
	flexDirection: 'row'
},
noteTaker: {
  flex: .65,
  height: 50,
  width:900,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#f1b3d7',
  backgroundColor: '#fafafa',
  padding: 10,
  marginLeft: 50,
  marginRight: 20,
  marginTop: 10,
  marginBottom: 5,
},
submitButton: {
	marginLeft: 250,
	marginTop: 15,
	flex: .05,
	backgroundColor: '#f1b3d7',
	color: 'white',
	padding: 10,
	borderColor: '#f1b3d7',
	borderRadius: 2,
	borderWidth: 1,
},
resAnalysis: {
  flexDirection: 'col'
},
resEdit: {
  flexDirection: 'row',
  justifyContent: 'left',
  alignItems: 'left',
},
newRes: {
  marginTop: 200,
  borderRadius: 5,
  height: 60,
  marginTop: 40,
},
analysisStyle: {
  backgroundColor: '#f1b3d7',
  fontSize: 20,
  fontWeight: 800,
  margin: 30
},
searchButton: {
  margin: 50
},
codeInput: {
  flex: 1,
  height: 44,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  margin: 15,
},
enterCode: {
  flexDirection: 'row'
},
QRScan: {
	justifyContent: 'center',
	marginTop: 100,
	marginRight: 50,
	marginLeft: 50,
	paddingTop:100,
	paddingBottom:100,
	height: 500,
	flex: .05,
	backgroundColor: '#f1b3d7',
	color: 'white',
	padding: 10,
	borderColor: '#f1b3d7',
	borderRadius: 30,
	borderWidth: 1,
	fontSize: 30,
	textAlign: 'center'
}

};
