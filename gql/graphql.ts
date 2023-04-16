/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<Scalars['String']>;
  toggleTodo?: Maybe<Todo>;
};


export type MutationLoginArgs = {
  name: Scalars['String'];
};


export type MutationToggleTodoArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  todos?: Maybe<Array<Maybe<Todo>>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  updateTodo?: Maybe<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  complete?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: string | null };

export type ToggleTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ToggleTodoMutation = { __typename?: 'Mutation', toggleTodo?: { __typename?: 'Todo', id?: string | null } | null };

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', todos?: Array<{ __typename?: 'Todo', id?: string | null, text?: string | null, complete?: boolean | null } | null> | null };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const ToggleTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ToggleTodoMutation, ToggleTodoMutationVariables>;
export const TodosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}}]}}]}}]} as unknown as DocumentNode<TodosQuery, TodosQueryVariables>;