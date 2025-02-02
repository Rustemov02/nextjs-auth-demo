import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: string | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem("authState") || "null")?.username,
  accessToken:
    JSON.parse(localStorage.getItem("authState") || "null")?.accessToken ||
    null,
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
      return {username : data.username , email : data.email , password : data.password , accessToken : data.accessToken}
    } catch (error: any) {
      return rejectWithValue(error.message || "Registration error...");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData: { password: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://679b27d533d316846322e42b.mockapi.io/api/auth/userInfo?password=${userData.password}`
      );

      if (!response.ok) throw new Error("Login Failed");

      const data = await response.json();

      return { user: data[0].username, accessToken: data[0].accessToken };
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
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem("authState"); //remove local data
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
          action: PayloadAction<{ user: string; accessToken: string }>
        ) => {
          console.log("fullfilled worked !");
          console.log(action.payload);
          state.loading = false;
          state.user = action.payload.user;
          state.accessToken = action.payload.accessToken;
          state.isAuthenticated = true;
          localStorage.setItem("authState", JSON.stringify(action.payload)); //set the token to local
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
            accessToken : string;
          }>
        ) => {
          console.log(action.payload)
          const data = action.payload
          state.loading = false;
          state.user = data.username
          state.accessToken = data.accessToken
          state.isAuthenticated = true
          localStorage.setItem("authState" , JSON.stringify(data))
        }
      );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
