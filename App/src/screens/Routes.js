import { StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'
import { Context } from '../context/authContext'

import Record from './Record'
import { useContext } from 'react'

const Tab = createBottomTabNavigator();

const Routes = () => {
const { state, dispatch } = useContext(Context);

    return (
        <Tab.Navigator screenOptions={{
            headerRight: () => (
                <Entypo
                    name='log-out'
                    size={20}
                    style={{ margin: 10 }}
                    collor="#000"
                    onPress={() => dispatch({type: 'logOut'})}
                />)
        }} >
            <Tab.Screen
                name="Record"
                component={Record}
                options={{
                    tabBarIcon: () => (
                        <Entypo name='record' size={30} />
                    )
                }}
            />
            {state.isAdmin ? (
                <Tab.Screen
                    name="User"
                    component={Record}
                    options={{
                        tabBarIcon: () => (
                            <Entypo name='user' size={30} />
                        )
                    }}
                />
            ) : (
                <></>
            )}
            
        </Tab.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({})