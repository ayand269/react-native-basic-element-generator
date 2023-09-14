import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, Container, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/reducer/User'

const Home = () => {
    const dispatch = useDispatch();
    return (
        <Container
            style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >   
            <Text.Heading
                title='This is Home Page'
                style={{
                    fontSize: moderateScale(18)
                }}
            />
            <AppButton
                title='Go To Auth with Logout'
                textStyle={{
                    color: '#fff',
                    fontWeight: '700'
                }}
                style={{
                    paddingHorizontal: moderateScale(15),
                    marginTop: moderateScale(10)
                }}
                onPress={() => dispatch(logout())}
            />
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({})