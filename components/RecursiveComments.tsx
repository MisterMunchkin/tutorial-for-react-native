import { View, Text } from "react-native";
import { CommentInput } from "./CommentInput";

export type RecursiveCommentsProps = {
  comments: Comment[];
  onReplyEvent: (content: string, commentId?: number) => void;
}
export function RecursiveComments({comments}: RecursiveCommentsProps) {

  const onNestedReplyEvent = (content: string) => {

  }
  return <View>
    {comments.length > 0 && comments.map((comment) => (
      <View
        key={comment.id}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row' 
          }}
        >
          <Text style={{paddingLeft: 10}}>{comment.content}</Text>
          <CommentInput
            onReplyEvent={onNestedReplyEvent}
          />
        </View>
        <RecursiveComments
          comments={comment.replies}
        />
      </View>
    ))}
  </View>
}