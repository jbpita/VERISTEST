import React from 'react';
import { StyleSheet, Text, TouchableOpacity as NativeButton } from 'react-native';
import { theme } from '../../core/theme';


type Props = React.ComponentProps<typeof NativeButton> & {
  title: string,
  bordered: boolean,
};

const ButtonComponent = ({ bordered, style, title, ...props }: Props) => (
    <NativeButton
        style={[
          styles.button,
          {
              backgroundColor: bordered ? theme.colors.surface : theme.colors.primary,
          },
          style,
        ]}
        {...props}
    >
        <Text
          style={[
              styles.text,
              { color: bordered ? theme.colors.primary : theme.colors.secondary },
          ]}
        >
          {title}
        </Text>
    </NativeButton>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: theme.colors.buttonBorder,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 26,
  },
});

export default ButtonComponent;
