import { PaginationCommentDto, ReadCommentDto } from "@/types/comment.type";
import { FlashList } from "@shopify/flash-list";
import { useEffect } from "react";
import { View, Text } from "react-native";

type Props = {
  dto: PaginationCommentDto;
};
const CommentSection = (props: Props) => {
  const {dto: {data: comments, total}} = props;

  useEffect(() => {

  }, []);

  return <View>
    <Text>Total Comments: {total}</Text>
    {comments && comments.length > 0 && (
      <FlashList
        data={comments}
        renderItem={({item}) => <Text>{item.text}</Text>}
        estimatedItemSize={200}
      />
    )}
  </View>
}

type NestedCommentsProps = {
  comments: ReadCommentDto[];
}
const NestedComments = (props: NestedCommentsProps) => {
  const {comments} = props;
  return <View>

  </View>
}

export default CommentSection;