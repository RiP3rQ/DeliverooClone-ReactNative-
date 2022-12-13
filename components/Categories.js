import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
        {/* Category Card */}
        <CategoryCard imgUrl='http://links.papareact.com/gn7' title='Testing 1'/>
        <CategoryCard imgUrl='http://links.papareact.com/gn7' title='Testing 2'/>
        <CategoryCard imgUrl='http://links.papareact.com/gn7' title='Testing 3'/>
        <CategoryCard imgUrl='http://links.papareact.com/gn7' title='Testing 4'/>
        <CategoryCard imgUrl='http://links.papareact.com/gn7' title='Testing 5'/>
        <CategoryCard imgUrl='http://links.papareact.com/gn7' title='Testing 6'/>
    </ScrollView>
  )
}

export default Categories