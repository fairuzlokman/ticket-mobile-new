import { useEffect, useState } from "react";
import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { get } from "../api";
import useAuth from "../hooks/useAuth";

const Ticket=(props)=>{
    const { token } = useAuth()
    const [data, setData] = useState([]);
  
    const getTicket = async () => {
        const res = await get (
            'https://ticketing-fairuz-lokman.herokuapp.com/api/ticket', {
                headers: {
                Authorization: `Bearer ${token}`
                }
            }
        )
        setData(res?.data?.data)
        // console.log(data)
    }
  
    useEffect(() => {
        getTicket();
    }, []);

    // const onPress = () => {
    //     props.navigation.navigate("TicketDetails")
    // }

    const onPress = (thisData) => {
        props.navigation.navigate("TicketDetails", {
            thisData,
        })
    }

    return(
        <ScrollView>
           <View style={styles.container}>
                <Text style={styles.textLabel}>Backlog</Text>
                <FlatList
                    horizontal
                    data = {data}
                    renderItem = {({item}) => {
                    if (item.status == "Backlog")
                        return (
                            <Pressable onPress={() => {onPress(item)}} style={styles.ticketContainer}>
                                <View style={styles.ticketHeader}>
                                    <Text style={styles.textKey}>{item.title}</Text>
                                    <View style={{flexDirection: "row"}}>
                                        <Text style={styles.textKey}>Ticket ID:</Text>
                                        <Text style={styles.textKey}>{item.ticket_id}</Text>
                                    </View>
                                </View>
                                <View style={styles.ticketBody}>
                                    <View style={styles.ticketDetails}>
                                        <Text style={styles.textKey}>Category:</Text>
                                        <Text>{item.category}</Text>
                                    </View>
                                    <View style={styles.ticketDetails}>
                                        <Text style={styles.textKey}>Priority:</Text>
                                        <Text>{item.priority}</Text>
                                    </View>
                                    <View style={styles.ticketDetails}>
                                        <Text style={styles.textKey}>Assigned to:</Text>
                                        <Text>{item.assign_to}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        )
                    }} 
                />
                <Text style={styles.textLabel}>In-progress</Text>
                <FlatList
                    horizontal
                    data = {data}
                    renderItem = {({item}) => {
                    if (item.status == "In-progress")
                        return (
                            <Pressable onPress={() => {onPress(item)}} style={styles.ticketContainer}>
                                <View style={styles.ticketHeader}>
                                    <Text style={styles.textKey}>{item.title}</Text>
                                    <View style={{flexDirection: "row"}}>
                                        <Text style={styles.textKey}>Ticket ID:</Text>
                                        <Text style={styles.textKey}>{item.ticket_id}</Text>
                                    </View>
                                </View>
                                <View style={styles.ticketBody}>
                                    <View style={styles.ticketDetails}>
                                        <Text style={styles.textKey}>Category:</Text>
                                        <Text>{item.category}</Text>
                                    </View>
                                    <View style={styles.ticketDetails}>
                                        <Text style={styles.textKey}>Priority:</Text>
                                        <Text>{item.priority}</Text>
                                    </View>
                                    <View style={styles.ticketDetails}>
                                        <Text style={styles.textKey}>Assigned to:</Text>
                                        <Text>{item.assign_to}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        )
                    }} 
                />
                <Text style={styles.textLabel}>Completed</Text>
                <FlatList
                    horizontal
                    data = {data}
                    renderItem = {({item}) => {
                    if (item.status == "Complete")
                        return (
                            <Pressable onPress={() => {onPress(item)}} style={styles.ticketContainer}>
                                <View style={styles.ticketHeader}>
                                    <Text style={styles.textKey}>{item.title}</Text>
                                    <View style={{flexDirection: "row"}}>
                                        <Text style={styles.textKey}>Ticket ID:</Text>
                                        <Text style={styles.textKey}>{item.ticket_id}</Text>
                                    </View>
                                </View>
                                <View style={styles.ticketBody}>
                                    <View style={styles.ticketDetails}>
                                        <Text style={styles.textKey}>Category:</Text>
                                        <Text>{item.category}</Text>
                                    </View>
                                    <View style={styles.ticketDetails}>
                                        <Text style={styles.textKey}>Priority:</Text>
                                        <Text>{item.priority}</Text>
                                    </View>
                                    <View style={styles.ticketDetails}>
                                        <Text style={styles.textKey}>Assigned to:</Text>
                                        <Text>{item.assign_to}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        )
                    }} 
                />
            </View> 
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container: {
        // backgroundColor: 'black',
    },
    ticketHeader: {
        backgroundColor: "#BDBDBD",
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 10
    },
    ticketBody: {
        padding: 10
    },
    ticketContainer: {
        width: 250,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    ticketDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5
    },
    textKey: {
        fontWeight: '600'
    },
    textLabel: {
        textAlign: "center",
        fontWeight: "600",
        width: "100%",
        color: "white",
        backgroundColor: "black",
        padding: 8
    }
})

export default Ticket