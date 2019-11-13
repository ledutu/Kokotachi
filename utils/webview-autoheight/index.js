'use strict';

import React, { useState, useEffect, useMemo, useRef, useImperativeHandle, forwardRef } from 'react';

import { StyleSheet, Platform, ViewPropTypes, Linking, ActivityIndicator } from 'react-native';

import PropTypes from 'prop-types';

import { WebView } from 'react-native-webview';

import { getMemoInputProps, getMemoResult, getWidth, isSizeChanged } from './utils.js';
import { isAbsoluteUrl } from '../pureFunction';

const AutoHeightWebView = forwardRef((props, ref) => {
    let webView = useRef();
    useImperativeHandle(ref, () => ({
        stopLoading: () => webView.current.stopLoading()
    }));

    const { style, onMessage, onSizeUpdated } = props;

    const [size, setSize] = useState(() => ({
        height: style && style.height ? style.height : 1,
        width: getWidth(style)
    }));
    const hanldeMessage = event => {
        if (!event.nativeEvent) {
            return;
        }
        let data = {};
        // Sometimes the message is invalid JSON, so we ignore that case
        try {
            data = JSON.parse(event.nativeEvent.data);
        } catch (error) {
            console.error(error);
            return;
        }
        const { height, width } = data;
        const { height: previousHeight, width: previousWidth } = size;
        isSizeChanged({ height, previousHeight, width, previousWidth }) &&
            setSize({
                height,
                width
            });
        onMessage && onMessage(event);
    };

    const { source, script } = useMemo(() => getMemoResult(props), [getMemoInputProps(props)]);

    const { width, height } = size;
    useEffect(
        () =>
            onSizeUpdated &&
            onSizeUpdated({
                height,
                width
            }),
        [width, height]
    );
    return (
        <WebView
            {...props}
            ref={webView}
            startInLoadingState={true}
            renderLoading={() => { <ActivityIndicator size="large" style={{ marginTop: 30 }} /> }}
            onMessage={hanldeMessage}
            onShouldStartLoadWithRequest={event => {
                if (isAbsoluteUrl(event.url)) {
                    Linking.openURL(event.url)
                    return false
                }
                return true
            }}
            style={[
                styles.webView,
                {
                    width,
                    height: height + 20
                },
                style
            ]}
            injectedJavaScript={script}
            source={source}
            bounces={false}
            scrollEnabled={false}
        />
    );
});

AutoHeightWebView.propTypes = {
    onSizeUpdated: PropTypes.func,
    // 'web/' by default on iOS
    // 'file:///android_asset/web/' by default on Android
    baseUrl: PropTypes.string,
    // add baseUrl/files... to android/app/src/assets/ on android
    // add baseUrl/files... to project root on iOS
    files: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string,
            type: PropTypes.string,
            rel: PropTypes.string
        })
    ),
    style: ViewPropTypes.style,
    customScript: PropTypes.string,
    customStyle: PropTypes.string,
    // webview props
    originWhitelist: PropTypes.arrayOf(PropTypes.string),
    onMessage: PropTypes.func
};

let defaultProps = {
    originWhitelist: ['*'],
    baseUrl: 'web/'
};

Platform.OS === 'android' &&
    Object.assign(defaultProps, {
        baseUrl: 'file:///android_asset/web/',
        // if set to true may cause some layout issues (width of container will be than width of screen) on android
        scalesPageToFit: false
    });

AutoHeightWebView.defaultProps = defaultProps;

const styles = StyleSheet.create({
    webView: {
        backgroundColor: 'transparent'
    }
});

export default AutoHeightWebView;