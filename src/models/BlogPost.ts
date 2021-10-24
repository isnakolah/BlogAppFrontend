import { GetAuthorModel } from "./Author";

export interface GetBlogPostModel {
  author: GetAuthorModel;
  text: string;
  createdOn: string;
}

export interface CreateBlogPostModel {
  authorID: string;
  text: string;
}
