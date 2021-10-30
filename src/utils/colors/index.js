const mainColors = {
    green1: '#0BCAD4',
    green2: '#EDFCFD',
    dark1: '#112340',
    dark2: '#495A75',
    grey1: '#7D8797',
    grey2: '#E9E9E9',
    grey3: '#8092AF',
    grey4: '#EDEEF0',
    blue1: '#0066CB',
    black1: '#000000',
    black2: 'rgba(0, 0, 0, 0.5)',
    red1: '#E06379'
}

export const colors = {
    primary: mainColors.green1,
    secondary: mainColors.dark1,
    tertiary: mainColors.blue1,
    text: {
        primary: mainColors.dark1,
        secondary: mainColors.grey1,
        menuInactive: mainColors.dark2,
        menuActive: mainColors.green1,
        role: mainColors.grey3,
    },
    white: '#FFFFFF',
    black: '#000000',
    button: {
        primary: {
            background: mainColors.green1,
            text: '#FFFFFF'
        },
        secondary: {
            background: '#FFFFFF',
            text: mainColors.dark1
        },
        message: {
            background: mainColors.blue1
        }
    },
    border: mainColors.grey2,
    cardLight: mainColors.green2,
    disabled: mainColors.grey4,
    loadingBackground: mainColors.black2,
    error: mainColors.red1
}