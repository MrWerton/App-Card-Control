import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './BottomTab';

const AppRoutes: React.FC = () =>{
    return (
        <NavigationContainer>
            <BottomTab/>
        </NavigationContainer>
    )
}

export {AppRoutes}
