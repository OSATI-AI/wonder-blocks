import * as React from "react";

import BirthdayPicker from "@osati-ai/wonder-blocks-birthday-picker";
import {View} from "@osati-ai/wonder-blocks-core";

import ComponentTile from "../component-tile";
import {styles} from "../styles";
import {CommonTileProps} from "../types";

export default function BirthdayPickerTile(props: CommonTileProps) {
    return (
        <ComponentTile
            name="BirthdayPicker"
            href="/?path=/docs/packages-birthdaypicker--docs"
            description={`Similar to a datepicker, but specifically
                    for birthdates. It consists of a set of dropdowns
                    to choose the date.`}
            {...props}
        >
            <View style={styles.centerContent}>
                <BirthdayPicker onChange={() => {}} />
            </View>
        </ComponentTile>
    );
}
