import { PaginationCommentDto } from "@/types/comment.type";
import { FlashList } from "@shopify/flash-list";
import { View, Text } from "react-native";
import CommentItem from "./CommentItem";

type Props = {
  dto: PaginationCommentDto;
};
const CommentSection = (props: Props) => {
  const {dto: {data: comments, total}} = props;

  return <View>
    <Text className="font-bold pb-4">Total Comments: {total}</Text>
    {comments && comments.length > 0 && (
      <FlashList
        data={comments}
        renderItem={({item}) => <CommentItem text={item.text} commentId={item.id} />}
        estimatedItemSize={97}
      />
    )}
  </View>
}

export default CommentSection;
