import { EAction } from '../action-types';
import { TAction } from '../actions';

interface IRepoState {
    loading: boolean;
    error: string | null;
    data: string[];
}

function repositoresReducer(
        state: IRepoState, 
        action: TAction
    ): IRepoState {

    switch (action.type) {
        case EAction.SEARCH_REPOS:
            return { loading: true, error: null, data: [] }
        case EAction.SEARCH_REPOS_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case EAction.SEARCH_REPOS_ERROR:
            return { loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export default repositoresReducer;