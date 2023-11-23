
import { apiSlice } from './../api/apiSlice';
import { userLoggedIn } from './authSlice';


const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/auth/register",
                method: 'POST',
                body: data,
            }), 

            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try {
                    const result = await queryFulfilled;

                    const {accessToken, ...user} = result.data

                    //set user to localStorage
                    localStorage.setItem("auth", JSON.stringify({
                        accessToken: result.data.accessToken,
                        user: user
                    }));
                    

                    // store to redux store
                    dispatch(userLoggedIn(
                        {    
                        accessToken: result.data.accessToken,
                        user: user
                        }
                    ));
                } catch (e) {
                    console.log(e);
                }
            },
            invalidatesTags: ["Users"]
        }),

        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data,
            }),

            async onQueryStarted(arg , {queryFulfilled, dispatch}){
                try {
                    const result = await queryFulfilled;
                    const {accessToken, ...user} = result?.data

                    // set Local Storage
                    localStorage.setItem(
                        "auth",
                        JSON.stringify(
                            {
                                accessToken: result.data.accessToken,
                                user : user,
                            }
                        )
                    );

                    dispatch(userLoggedIn(
                        {
                            accessToken: result.data.accessToken,
                            user : user,
                        }
                    ));
                } catch (e) {
                    console.log(e);
                }
            },
        }),
    })
});

export const {useRegisterMutation, useLoginMutation} = authApi