import { StackActions, DrawerActions, CommonActions } from '@react-navigation/native'

let _navigator

function setTopLevelNavigator(r) {
    _navigator = r
}

function navigate(routeName, params) {
    _navigator.dispatch(
        CommonActions.navigate({
            name: routeName,
            params: params
        })
    )
}

function replace(routeName, params) {
    _navigator.dispatch(
        StackActions.replace(routeName, params)
    )
}

function openDrawer() {
    _navigator.dispatch(DrawerActions.openDrawer())
}
function closeDrawer() {
    _navigator.dispatch(DrawerActions.closeDrawer())
}

function back() {
    _navigator.dispatch(CommonActions.goBack())
}

const NavigationService = {
    navigate,
    setTopLevelNavigator,
    openDrawer,
    closeDrawer,
    back,
    replace
}

export default NavigationService
