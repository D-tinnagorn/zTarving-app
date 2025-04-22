import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { GET_LOCAL } from "../../common/storage/LocalStorage";
import { ACCESS_TOKEN } from "../../common/storage/constant";

const Home = () => {

const [access_token,setAccess_Token] = useState("")
      
  const getDataFromLocal = async () => {
    const data = await GET_LOCAL(ACCESS_TOKEN);
    console.log(data);
    setAccess_Token(data.access_token)
    
  };
  useEffect(() => {
    getDataFromLocal();
  }, []);
  return (
    <View style={{flex:1,justifyContent:"center"}}>
      <Text>{access_token}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
