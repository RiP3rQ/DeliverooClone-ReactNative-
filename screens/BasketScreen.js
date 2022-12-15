import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { XCircleIcon } from "react-native-heroicons/outline";
import { urlFor } from '../sanity';
import Currency from "react-currency-formatter"

const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const dispatch = useDispatch()
    const basketTotal = useSelector(selectBasketTotal)


    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results
        },{})

        setGroupedItemsInBasket(groupedItems)
    }, [items])
  
    return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 bg-gray-100">
            <View className="p-5 border-b border-[#00CCBB] bg-white">
                {/* TOP PART */}
                <View>
                    <Text className="text-lg font-bold text-center">Basket</Text>
                    <Text className="text-center text-gray-400">{restaurant.title}</Text>
                </View>
                {/* EXIT BUTTON */}
                <TouchableOpacity 
                onPress={navigation.goBack}
                className="rounded-full bg-gray-100 absolute top-0 right-5"
                >
                    <XCircleIcon 
                    color="#00CCBB"
                    size={50}
                    />
                </TouchableOpacity>
            </View>
            {/* END OF TOP PART */}

            {/* DELIVERY PART */}
            <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                <Image 
                     source={{
                         uri: "http://links.papareact.com/wru"
                    }}
                    className="h-8 w-8 bg-gray-300 p-4 rounded-full"
                />
                <Text className="flex-1">Delivery in 50-75 min</Text>
                <TouchableOpacity>
                    <Text className="text-[#00CCBB]">Change</Text>
                </TouchableOpacity>
            </View>


            {/* LIST OF ITEMS IN THE BASKET */}
            <ScrollView className="divide-y divide-gray-300">
                {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                    <View 
                    key={key} 
                    className="flex-row items-center space-x-3 bg-white py-2 px-5">
                        <Text className="text-[#00CCBB]">{items.length} x</Text>
                        <Image 
                            source={{
                                uri: urlFor(items[0]?.image).url()
                            }}
                            className="h-12 w-12 rounded-full"
                        />
                        <Text className="flex-1">{items[0]?.name}</Text>

                        <Text className="text-gray-600">
                            <Currency quantity={items[0]?.price} currency="GBP"/>
                        </Text>

                        <TouchableOpacity>
                            <Text 
                            onPress={() => dispatch(removeFromBasket({ id: key}))}
                            className="text-[#00CCBB] text-xs">
                                Remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            
            {/* SUBTOTAL BOTTOM PART */}
            <View className="p-5 bg-white mt-5 space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Subtotal</Text>
                    <Text className="text-gray-400">
                        <Currency quantity={basketTotal} currency="GBP"/>
                    </Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Delivery Fee</Text>
                    <Text className="text-gray-400">
                        <Currency quantity={5.99} currency="GBP"/>
                    </Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="">Order Total</Text>
                    <Text className="font-extrabold">
                        <Currency quantity={basketTotal + 5.99} currency="GBP"/>
                    </Text>
                </View>
                {/* PAYMENT BUTTON */}
                <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-3">
                    <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                </TouchableOpacity>
            </View>

        </View>
    </SafeAreaView>
    )
}

export default BasketScreen