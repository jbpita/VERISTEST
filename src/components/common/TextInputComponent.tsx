import React from 'react';
import { StyleSheet, Text, TextInput as NativeInput, View } from 'react-native';
import { theme } from '../../core/theme';


type Props = React.ComponentProps<typeof NativeInput> & {
    error?: boolean;
    label?: string;
    errorText?: string;
  };

const TextInputComponent = ({ label, errorText, ...props }: Props) => (
    <>
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <NativeInput
                style={styles.input}
                selectionColor={theme.colors.primary}
                {...props}
            />
        </View>
        {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </>
);

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        width: '100%',
        backgroundColor: theme.colors.surface,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    input: {
        width: '100%',
        color: theme.colors.secondary,
    },
    label: {
        color: theme.colors.secondary,
        paddingLeft: 4,
        opacity: 0.8,
    },
    error: {
        width: '100%',
        fontSize: 14,
        color: theme.colors.error,
        paddingHorizontal: 4,
    },
});

export default TextInputComponent;
