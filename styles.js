import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    header: {
        backgroundColor: "#ff2a30",
        borderBottomColor: "#ff2a30"
    },
    pangolin_font: {
        fontFamily: 'Pangolin-Regular'
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row'
    },
    flexColumn: {
        flex: 1,
        flexDirection: 'column'
    },
    contentCenter: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    flexRowCenter: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    flexColumnCenter: {
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    itemSearchEvent: {
        marginBottom: 10, 
        marginTop: 10
    },
    inputTextSearchEvent: {
        backgroundColor: 'red',
        borderWidth: 1
    },
    textCenter: {
        textAlign: 'center'
    },
    textLeft: {
        textAlign: 'left',
        alignSelf: 'flex-start'
    },
    alignLeft: {
        alignSelf: 'flex-start'
    },
    itemForm: {
        marginTop: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ced4da',
        padding: 10,
        marginTop: 10
    },
    textInputIcon: {
        borderWidth: 1,
        borderColor: '#ced4da',
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        flex: 1
    },
    btnCloseModal: {
        fontSize: 30
    },
    btnBlue: {
        backgroundColor: '#007bff',
        color: 'white'
    },
    iconEyeAbs: {
        right: 0,
        top: 0,
        position: 'relative',
        backgroundColor: 'blue'
    },
    wrapPicker: {
        borderWidth: 1, 
        borderColor: '#bdc3c7', 
        overflow: 'hidden', 
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemStylePicker: {
        fontSize: 14,
        color: 'red',
        textAlign: 'right'
    },
    placeholderStylePicker: {
        color: 'black', 
        paddingLeft: 10, 
        marginLeft: 0,
        fontSize: 14
    },
    iconPicker: {
        paddingRight: 17, 
        fontSize: 25,
        marginTop: 12
    },
    headerRed: {
        color: '#FF292F',
        textTransform: 'uppercase',
        fontSize: 16,
        marginLeft: 10,
        fontWeight: 'bold'
    }
})