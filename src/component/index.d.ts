declare interface IPropsInputField {
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
  placeholder?: string;
}
