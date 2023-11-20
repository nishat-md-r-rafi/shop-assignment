import { apiSlice } from "../api/apiSlice";


export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({  
        getUsers: builder.query({
            query: () => "/users",
            providesTags: ["Users"],
        }),

        getUser: builder.query({
            query:(id) => `/users/${id}`,
            providesTags: (result, error, arg) => [
                {type: "User", id: arg}
            ]
        }),

        updateUser: builder.mutation({
            query: ({id, data}) => ({  
                url: `/users/${id}`,
                method: 'PATCH',
                body: data
            }),

            invalidatesTags: (result, error, arg) => [
                {type: "User", id: arg.id}, "Users"
            ]
        }),

        deleteUser: builder.mutation({
            query: (id) => ({  
               url: `/users/${id}`,
               method: 'DELETE' 
            }),
            invalidatesTags: ["Users"]
        }),

        addUser: builder.mutation({
            query: (data) => ({  
                url: "/auth/register",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Users"]
        })

    })
})

export const {useGetUserQuery, useGetUsersQuery, useAddUserMutation, useDeleteUserMutation, useUpdateUserMutation} = usersApi