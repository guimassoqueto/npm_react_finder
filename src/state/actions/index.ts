import { EAction } from '../action-types';

export interface ISearchReposAction {
    type: EAction.SEARCH_REPOS;
}

export interface ISearchReposSuccessAction {
    type: EAction.SEARCH_REPOS_SUCCESS;
    payload: string[];
}

export interface ISearchReposErrorAction {
    type: EAction.SEARCH_REPOS_ERROR;
    payload: string;
}

export type TAction = (
    | ISearchReposAction 
    | ISearchReposSuccessAction 
    | ISearchReposErrorAction
);
