import { DummyNested } from "@/constants/DummyComments";
import { ReadCommentDto } from "@/types/comment.type";
import { FlashList } from "@shopify/flash-list";
import { useState, useEffect } from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";


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
      setIsFetchingComments(true);
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

export default CommentItem;