import { PaginationCommentDto } from "@/types/comment.type";

export const DummyComments: PaginationCommentDto = {
  total: 100,
  data: [
    {
      id: 1,
      text: 'Parent First comment',
      user: 'Robin',
      createdAt: new Date(),
    },
    {
      id: 2,
      text: 'Parent 2 comment',
      user: 'Robin',
      createdAt: new Date(),
    },
    {
      id: 3,
      text: 'Parent 3 comment',
      user: 'Robin',
      createdAt: new Date(),
    },
    {
      id: 4,
      text: 'Parent 4 comment',
      user: 'Robin',
      createdAt: new Date(),
    }
  ]
}