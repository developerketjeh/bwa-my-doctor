import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ICArrowDark, ICArrowWhite } from '../../../assets'

const IconOnly = ({onPress, icon}) => {
    const Icon = () => {
        if (icon === 'back-dark') {
            return <ICArrowDark />
        }
        if (icon === 'back-light') {
            return <ICArrowWhite />
        }
        return <ICArrowDark />
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon />
        </TouchableOpacity>
    )
}

export default IconOnly

const styles = StyleSheet.create({})
