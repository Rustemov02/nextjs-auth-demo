"use client";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  userId: string | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  userId: null,
  accessToken: null,
  loading: false,
  isAuthenticated: false,
  error: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async (
    userData: { email: string; password: string; username: string },
    { rejectWithValue }
  ) => {
    if (typeof window === "undefined") {
      return rejectWithValue("This action is only available on the client.");
    }
    try {
      const response = await fetch(
        "https://679b27d533d316846322e42b.mockapi.io/api/auth/userInfo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: userData.email,
            password: userData.password,
            username: userData.username,
            accessToken: `fake-access-token-${Date.now()}`,
          }),
        }
      );

      if (!response.ok) throw new Error("Registration Failed !");

      const data = await response.json();
      return {
        username: data.username,
        email: data.email,
        password: data.password,
        accessToken: data.accessToken,
      };
    } catch (error: any) {
      return rejectWithValue(error.message || "Registration error...");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (
    userData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    if (typeof window === "undefined") {
      return rejectWithValue("This action is only available on the client.");
    }
    const testData = JSON.stringify(userData);
    console.log(testData);
    try {
      const response = await fetch(`https://localhost:7260/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error("Login Failed");

      const data = await response.json();
      return { userId : data.userId , accessToken: data.accessToken };
    } catch (error: any) {
      return rejectWithValue(error.message || "Login error");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      console.log("logout...");
      state.userId = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem("authState"); //remove local data
      localStorage.removeItem("isAuth")
    },
  },
  extraReducers: (builder) => {
    builder
      // Login thunk
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (
          state,
          action: PayloadAction<{ userId: string; accessToken: string }>
        ) => {
          console.log("fullfilled worked !");
          console.log(action.payload);
          state.loading = false;
          state.userId = action.payload.userId;
          state.accessToken = action.payload.accessToken;
          state.isAuthenticated = true;
          localStorage.setItem("authState", JSON.stringify(action.payload)); //set the token to local
          localStorage.setItem("isAuth",JSON.stringify(state.isAuthenticated))
        }
      )
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        console.log("Hatali girish");
      })

      // Register thunk
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        register.fulfilled,
        (
          state,
          action: PayloadAction<{
            username: string;
            email: string;
            password: string;
            accessToken: string;
          }>
        ) => {
          console.log(action.payload);
          const data = action.payload;
          state.loading = false;
          state.userId = data.username;
          state.accessToken = data.accessToken;
          state.isAuthenticated = true;
          localStorage.setItem("authState", JSON.stringify(data));
        }
      );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
