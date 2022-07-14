import { EAction } from '../action-types';
import axios from 'axios';
import { Dispatch } from 'redux';
import { TAction } from '../actions';



export function SearchRepos(term: string) {
    return async function(dispatch: Dispatch<TAction>) {
        dispatch({
            type: EAction.SEARCH_REPOS
        })

        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search',{
                params: {
                    text: term.toLocaleLowerCase()
                }
            });

            const names = data.objects.map((result: any) => result.package.name);
            
            dispatch({
                type: EAction.SEARCH_REPOS_SUCCESS,
                payload: names
            })

        } catch (error: any) {
            dispatch({
                type: EAction.SEARCH_REPOS_ERROR,
                payload: error.message
            })
        }
    }
}