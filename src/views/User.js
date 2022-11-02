import { useEffect } from "react"
import { useState } from "react"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { get } from "../api"
import useAuth from "../hooks/useAuth"

const User=()=>{
    const { token } = useAuth()
    const [data, setData] = useState([]);

    const getUser = async () => {
        const res = await get (
            'https://ticketing-fairuz-lokman.herokuapp.com/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        setData(res?.data?.allUsers)
        // console.log(data, "hello");
    }

    useEffect(() => {
    getUser();
    }, []);

    return (
        <SafeAreaView >
            
            <View style={styles.container}>
                <View style={styles.userHeader}>
                    <Text style={{width: "10%", color: "white", fontWeight: "600"}}>No. </Text>
                    <Text style={{width: "20%", color: "white", fontWeight: "600"}}>Name </Text>
                    <Text style={{width: "50%", color: "white", textAlign: "center", fontWeight: "600"}}>Email </Text>
                    <Text style={{width: "20%", color: "white", textAlign: "center", fontWeight: "600"}}>Role </Text>
                </View>
                <FlatList data={data} renderItem={({item, index})=>{
                    return (
                        <View style={styles.textContainer}>
                            <Text style={{width:"10%"}}>{index + 1}.</Text>
                            <Text style={{width:"20%"}}>{item.name} </Text>
                            <Text style={{width:"50%"}}>{item.email}</Text>
                            <Text style={{width:"20%", textAlign: "center"}}>{item.role} </Text>
                        </View>
                    )
                }}/>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        alignItems: 'center',
        width:"100%",
        height:"100%"
    },
    userHeader: {
        flexDirection:"row",
        alignItems: "center",
        backgroundColor: "black",
        width:"100%",
        padding: 8,
    },
    textContainer:{
        backgroundColor: "white",
        flexDirection:"row",
        alignItems: "center",
        width:"100%",
        padding: 8,
        borderColor: "transparent",
        borderBottomColor: "#C5C5C5",
        borderWidth: 1.5
    }
})

export default User