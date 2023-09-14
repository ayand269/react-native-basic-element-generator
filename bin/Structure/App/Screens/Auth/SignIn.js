import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, Container, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { useDispatch } from 'react-redux'
import { setUser } from '../../Redux/reducer/User'

const SignIn = () => {
    const dispatch = useDispatch();
    return (
        <Container
            style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >   
            <Text.Heading
                title='This is Auth Page'
                style={{
                    fontSize: moderateScale(18)
                }}
            />
            <AppButton
                title='Go To Home with Auth'
                textStyle={{
                    color: '#fff',
                    fontWeight: '700'
                }}
                style={{
                    paddingHorizontal: moderateScale(15),
                    marginTop: moderateScale(10)
                }}
                onPress={() => dispatch(setUser({}))}
            />
        </Container>
    )
}

export default SignIn

const styles = StyleSheet.create({})