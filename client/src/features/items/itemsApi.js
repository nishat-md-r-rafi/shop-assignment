import { apiSlice } from "../api/apiSlice";


export const itemsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({  
        getItems: builder.query({
            query: () => "/items",
            providesTags: ["Items"],
        }),

        getItem: builder.query({
            query:(id) => `/items/${id}`,
            providesTags: (result, error, arg) => [
                {type: "Item", id: arg}
            ]
        }),

        updateItem: builder.mutation({
            query: ({id, data}) => ({  
                url: `/items/${id}`,
                method: 'PATCH',
                body: data
            }),

            invalidatesTags: (result, error, arg) => [
                {type: "Item", id: arg.id}, "Items"
            ]
        }),

        deleteItem: builder.mutation({
            query: (id) => ({  
               url: `/items/${id}`,
               method: 'DELETE' 
            }),
            invalidatesTags: ["Items"]
        }),

        addItem: builder.mutation({
            query: (data) => ({  
                url: "/items",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Items"]
        })

    })
})

export const {useGetItemQuery, useGetItemsQuery, useAddItemMutation, useDeleteItemMutation, useUpdateItemMutation} = itemsApi