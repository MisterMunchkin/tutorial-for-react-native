import { View, Text } from "react-native";

type Props = {
  text: string;
};
const CollapsibleComment = (props: Props) => {
  const {text} = props;

  return <View>
    <Text>{text}</Text>
  </View>
}

export default CollapsibleComment;