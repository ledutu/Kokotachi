// NavigationService.js

import { NavigationActions, NavigationContainerComponent, StackActions } from 'react-navigation';

/**
 * @type {NavigationContainerComponent} navigatorRef 
 */
let _navigator;

/**
 * @param {NavigationContainerComponent} navigatorRef 
 */
export function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

/**
 * Navigating without the navigation prop.
 * Use this only with the top-level (root) navigator of your app.
 * 
 * @param {*} navigatorRef 
 * @see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 */
export function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

export function goBack() {
    _navigator.dispatch(NavigationActions.back())
}

export function popToTop() {
    _navigator.dispatch(NavigationActions.navigate('Home'));
}

export function pushNavigate(routeName, params) {
    _navigator.dispatch(
        StackActions.push({
            routeName,
            params,
        })
    );
}