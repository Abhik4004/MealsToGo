import React from "react";
import { Text, Card } from "react-native-paper";
import { StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Abhik Restaurant",
    icon,
    photos = [
      "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg",
    ],
    address = "100 Random Stree",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarilt = false,
  } = restaurant;
  return (
    <>
      <RestaurantCard elevation={5} style={style.card}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </RestaurantCard>
    </>
  );
};

const style = StyleSheet.create({
  card: { marginBottom: "50px" },
});

const Title = styled(Text)`
  color: blue;
  padding: 16px;
  text-align: left;
  height: 50px;
`;
