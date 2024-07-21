//paginated list of comments. parent comments
export type PaginationCommentDto = {
  total: number;
  data: ReadCommentDto[];
}

export type ReadCommentDto = {
  id: number;
  text: string;
  user: string;
  post?: ReadPostDto;
  createdAt: Date;
  parent?: number; //references an id of readcommentDTO.
}

export type ReadPostDto = {
  id: number;
  title: string;
  content: string;
  user: string;
  likes: number;
  comments: number;
}