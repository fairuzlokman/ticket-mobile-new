import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InsetShadow from 'react-native-inset-shadow'

const TicketDetails = (props) => {
    
    const data = props.route.params.thisData 
    // console.log(data)
    
    return (
        <View style={styles.container}>
            <Text style={styles.textKey}>{data.title}</Text>
            <View style={{height: 150, marginTop: 10, marginBottom: 10, borderWidth: 1, borderColor: "#BDBDBD", borderRadius: 5, padding: 5, backgroundColor: "white"}}>
                <Text style={{padding: 10}}>{data.description}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.textKey}>Category </Text>
                <View style={{width: "50%", alignItems: "center", borderWidth: 1, borderColor: "#BDBDBD", borderRadius: 5, padding: 5, backgroundColor: "white"}}>
                    <Text>{data.category}</Text>
                </View>
            </View>
            <View style={styles.details}>
                <Text style={styles.textKey}>Priority </Text>
                <View style={{width: "50%", alignItems: "center", borderWidth: 1, borderColor: "#BDBDBD", borderRadius: 5, padding: 5, backgroundColor: "white"}}>
                    <Text>{data.priority}</Text>
                </View>
            </View>
            <View style={styles.details}>
                <Text style={styles.textKey}>Status </Text>
                {data.status == "Complete" ? <View style={{width: "50%", alignItems: "center", borderWidth: 1, borderColor: "#BDBDBD", borderRadius: 5, padding: 5, backgroundColor: "#22C55E"}}>
                    <Text style={{color: "white"}}>{data.status}</Text>
                </View>
                : data.status == "In-progress" ? <View style={{width: "50%", alignItems: "center", borderWidth: 1, borderColor: "#BDBDBD", borderRadius: 5, padding: 5, backgroundColor: "#EAB308"}}>
                    <Text style={{color: "white"}}>{data.status}</Text>
                </View>
                : <View style={{width: "50%", alignItems: "center", borderWidth: 1, borderColor: "#BDBDBD", borderRadius: 5, padding: 5, backgroundColor: "#DC2626"}}>
                    <Text style={{color: "white"}}>{data.status}</Text>
                </View>}
            </View>
            <View style={styles.details}>
                <Text style={styles.textKey}>Assigned to </Text>
                <View style={{width: "50%", alignItems: "center", borderWidth: 1, borderColor: "#BDBDBD", borderRadius: 5, padding: 5, backgroundColor: "white"}}>
                    <Text>{data.assign_to}</Text>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20
    },
    details: {
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "space-between",
        alignItems: "center"
    },
    textKey: {
        fontWeight: "600",
        paddingLeft: 20
    }
})

export default TicketDetails