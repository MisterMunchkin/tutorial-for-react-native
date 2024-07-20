import { useState } from "react";
import { Button, TextInput, View } from "react-native";

type CommentInputProps = {
  onReplyEvent: (comment: string) => void;
}
export function CommentInput({onReplyEvent}: CommentInputProps) {
  const [commentContent, setCommentContent] = useState<string>('');

  const onReply = (content: string) => {
    onReplyEvent(content);
    setCommentContent('');
  }

  return <View
      style={{
        flex: 1,
        flexDirection: 'row',
        maxHeight: 40
      }}
    >
      <TextInput
        style={{
          height: 40, 
          width: 250,
          borderWidth: 1,
          padding: 10,
          borderRadius:10
        }}
        placeholder="Add comment"
        onChangeText={setCommentContent}
        value={commentContent}
      />
      <Button
        onPress={() => onReply(commentContent)}
        title="Reply"
        accessibilityLabel="Add comment to this post"
      />
    </View>
}