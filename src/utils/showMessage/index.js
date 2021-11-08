import { showMessage } from "react-native-flash-message"
import { colors } from "../colors"

export const showError = (message) => {
  return (
    showMessage({
      message: message,
      type: "danger",
      duration: 2000,
      backgroundColor: colors.error
    })
  )
}

export const showSuccess = (message) => {
  return (
    showMessage({
      message: message,
      type: "success",
      duration: 2000,
    })
  )
}

export const showWarning = (message) => {
  return (
    showMessage({
      message: message,
      type: "warning",
      duration: 2000,
    })
  )
}
