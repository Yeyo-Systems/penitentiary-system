import { createApi } from '@reduxjs/toolkit/query/react';

import { fetchBaseQueryWithConfigurations } from './base/fetchBaseQueryWithConfigurations';
import { User } from '../../types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQueryWithConfigurations('/users'),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '',
      providesTags: ['User'],
    }),
    getUser: builder.query<User, string>({
      query: (id) => `/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'User', id }],
    }),
    createUser: builder.mutation<User, Partial<User>>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query: (body) => ({
        url: '/',
        method: 'PUT',
        body,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'User', id }],
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'User', id }, 'User'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
