import { ComponentType } from "react";
import { Article } from "types/articles";

export interface LocationStates {
  "/"?: {};
  "/#"?: {};

  "/about"?: {};
  "/home"?: {};

  "/error"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}

export interface Board {
  boardId: number;
  articleId?: string;
  articleList?: Article[];
  article?: Article;
  edit?: boolean;
  updateRouter: (article: Article) => void;
}
