// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {Platform, StyleProp, View, ViewStyle} from 'react-native';

import {useTheme} from '@context/theme';
import {changeOpacity, makeStyleSheetFromTheme} from '@utils/theme';

const getStyleSheet = makeStyleSheetFromTheme((theme) => {
    const groupSeparator: ViewStyle = {
        backgroundColor: changeOpacity(theme.centerChannelColor, 0.12),
        display: 'flex',
        flex: 1,
        marginHorizontal: 20,
        height: 1,
    };
    return {
        separator: {
            ...Platform.select({
                ios: {
                    ...groupSeparator,
                },
                default: {
                    display: 'none',
                },
            }),
        },
        groupSeparator: {
            ...groupSeparator,
            marginBottom: 16,
        },
    };
});
type SettingSeparatorProps = {
    lineStyles?: StyleProp<ViewStyle>;
    isGroupSeparator?: boolean;
}

const SettingSeparator = ({lineStyles, isGroupSeparator = false}: SettingSeparatorProps) => {
    const theme = useTheme();
    const styles = getStyleSheet(theme);

    return (<View style={[styles.separator, isGroupSeparator && styles.groupSeparator, lineStyles]}/>);
};

export default SettingSeparator;
