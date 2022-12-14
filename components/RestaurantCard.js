import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
  return (
    <TouchableOpacity className="mr-3 bg-white shadow mb-3" style={styles.shadow}>
      <Image 
        source={{
            uri: urlFor(imgUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        
        {/* Name + Rating */}
        <View className="flex-row items-center space-x-1">
           <StarIcon color="green" opacity={0.5} size={22}/>
            <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> • {genre}
            </Text>
        </View>

        {/* Location */}
        <View className="flex-row items-center space-x-1">
            <MapPinIcon color="gray" opacity={0.4} size={22}/>
            <Text className="text-xs text-gray-500">Nearby • {address}</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.27,
        shadowRadius: 1.65,
        elevation: 2,
    }
})

export default RestaurantCard