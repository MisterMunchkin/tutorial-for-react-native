import { PaginationCommentDto, ReadCommentDto } from "@/types/comment.type";

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

export const DummyNested: ReadCommentDto[] = [
  {
    id: 3,
    text: 'Nexted First comment',
    user: 'Robin',
    createdAt: new Date(),
    parent: 1
  },
  {
    id: 4,
    text: 'Nexted 2 comment',
    user: 'Robin',
    createdAt: new Date(),
    parent: 1
  }
]