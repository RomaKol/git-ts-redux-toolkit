import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { RootState } from './index';
import GitHubClient from '../clients/GitHubClient';

const REDUCER_KEY_GIT = 'git';

/* eslint-disable no-param-reassign */

interface GitState {
  isFetching: boolean;
  repositories: Record<string, unknown>;
}

interface GetReposParams {
  value: string;
  page: string;
}

const initialState: GitState = {
  isFetching: false,
  repositories: {},
};

const getRepositories = createAsyncThunk<Promise<AxiosResponse<any>>, GetReposParams>(
  `${REDUCER_KEY_GIT}/getrepositories`,
  async ({
    value,
    page,
    // eslint-disable-next-line arrow-body-style
  }) => {
    const response = await GitHubClient.getRepositories(value, page)
    console.log('response', response);
    return response;
  },
);

const gitSlice = createSlice<GitState, SliceCaseReducers<GitState>, typeof REDUCER_KEY_GIT>({
  name: REDUCER_KEY_GIT,
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRepositories.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getRepositories.fulfilled, (state, { payload }) => {
        state.repositories = {...payload};
        state.isFetching = false;
      })
  }
});

export {
  getRepositories,
};

export default gitSlice.reducer;

/* eslint-disable no-param-reassign */
