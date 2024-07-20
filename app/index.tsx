import { getPokemon } from "@/api/test-api";
import { Comment } from "@/types/comment.type";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput, ScrollView, TouchableOpacity } from "react-native";

const queryClient = new QueryClient();

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pokemon name='ditto' />
      </View>
    </QueryClientProvider>
  );
}

type PokemonProps = {
  name: string
}
export function Pokemon({name}: PokemonProps) {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: [name],
    queryFn: async () => getPokemon(name)
  });
  const [commentInput, setCommentInput] = useState<string>('');

  if (isPending) return <Text>'Loading...'</Text>;

  if (error) return <Text>'An error has occured: ' + error.message</Text>;

  const handleAddComment = () => {

  }

  return <View style={{
    flexDirection: 'column'
  }}>
    <ScrollView>
      {/* Post */}
      <View>
        <Text>Pokemon data</Text>
        <Text style={styles.titleText}>
          Name <Text style={styles.baseText}>{data.name}</Text>
        </Text>
        <Text style={styles.titleText}>
          Height <Text style={styles.baseText}>{data.height}</Text>
        </Text>
        <Text style={styles.titleText}>
          Weight <Text style={styles.baseText}>{data.weight}</Text>
        </Text>
        <Text style={styles.titleText}>
          Order <Text style={styles.baseText}>{data.order}</Text>
        </Text>
      </View>
      
      {/* Comments */}
      <View
      >
        <Text>Comments</Text>
      </View>
    </ScrollView>
    
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        marginHorizontal: 'auto'
      }}
    >
      <TextInput
        placeholder="Add comment"
        onChangeText={setCommentInput}
        value={commentInput}
      />
      <TouchableOpacity
        onPress={handleAddComment}
      >
        <Text>Reply</Text>
      </TouchableOpacity>
    </View>
  </View>
}


// export function CommentSection() {
//   const [comments, setComments] =  useState<Comment[]>([]);

//   const submitComment = (content: string, commentId?: number) => {
//     const commentIds = comments.map(c => c.id);
//     let newId = 1;
    
//     if (commentIds.length > 0) {
//       newId = Math.max(...commentIds) + 1;
//     }

//     const newCommentObject: Comment = {
//       id: newId,
//       content: content,
//       replies: []
//     };

//     let currentState = [...comments];
//     if (!commentId) {
//       currentState.push(newCommentObject);
//     } else {
//       let parentComment = currentState.find(c => c.id === commentId);
//       parentComment?.replies.push(newCommentObject);
//     }
//     setComments(currentState);
//     console.log(currentState);
//   }

//   return <>

//     <CommentInput
//       onReplyEvent={submitComment}

//     />
//     <RecursiveComments 
//       comments={comments}
//       onReplyEvent={submitComment}
//     />
//   </>
// }



const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});