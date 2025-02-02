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
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem("authState"); //remove local data
    },
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
