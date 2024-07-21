import { PaginationCommentDto, ReadCommentDto } from "@/types/comment.type";
import { FlashList } from "@shopify/flash-list";
import { useEffect, useMemo, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Collapsible } from "./Collapsible";
import { DummyNested } from "@/constants/DummyComments";

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

const fetchNested = async (
  parentCommentId: number, 
  setNestedComments: React.Dispatch<React.SetStateAction<ReadCommentDto[]>>, 
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const result = DummyNested;
    setNestedComments(result);
    setIsLoading(false);
  } catch (error) {
    console.error(error);
  }
}

export default CommentSection;

type CommentItemProps = {
  text: string;
  commentId: number;
}
const CommentItem = (props: CommentItemProps) => {
  const [isReplying, setIsReplying] = useState(false);
  const [reply, setReply] = useState('');
  const [isFetchingComments, setIsFetchingComments] = useState(false);
  const [nestedComments, setNestedComments] = useState<ReadCommentDto[]>(new Array());
  const [expandNestedComments, setExpandNestedComments] = useState(false);

  useEffect(() => {
    if (expandNestedComments) {
      fetchNested(props.commentId, setNestedComments, setIsFetchingComments);
    }
  }, [expandNestedComments])

  return <View className="flex flex-col p-4 m-4">
    <TouchableOpacity
      onPress={() => setExpandNestedComments((prev) => !prev)}
    >
      <Text>{props.text}</Text>
    </TouchableOpacity>
    
    {isReplying ? (
      <TouchableOpacity
        onPress={() => setIsReplying(false)}
      >
        <Text>Cancel</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
      onPress={() => setIsReplying(true)}
    >
      <Text>Reply</Text>
    </TouchableOpacity>
    )}
    {isReplying && 
      <View className="flex flex-row">
          <TextInput
            placeholder="Reply to this comment"
            className="h-[30px] w-[120px] border-2 border-black"
            value={reply}
            onChangeText={setReply}
          />
          <TouchableOpacity>
            <Text>Submit</Text>
          </TouchableOpacity>
      </View>
    }  

    {isFetchingComments && (
      <Text>...Loading</Text>
    )}
    {expandNestedComments && !isFetchingComments && nestedComments?.length > 0 && (
      <FlashList
        data={nestedComments}
        renderItem={({item}) => <CommentItem text={item.text} commentId={item.id} />}
        estimatedItemSize={97}
      />
    )}
  </View>
}