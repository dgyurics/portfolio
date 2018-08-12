import {
  GET_IDEAS_REQUEST,
  GET_IDEAS_SUCCESS,
  GET_IDEA_METADATA_REQUEST,
  GET_IDEA_METADATA_SUCCESS,
  CREATE_IDEA_REQUEST,
  CREATE_IDEA_SUCCESS
} from './types.js'

export const getIdeas = () => dispatch => {
  dispatch({type: GET_IDEAS_REQUEST})
  setTimeout(() => dispatch({
      type: GET_IDEAS_SUCCESS,
      payload: ideas
    }), 3000)
}

export const getIdeaMetaData = (ideaId) => dispatch => {
  dispatch({type: GET_IDEA_METADATA_REQUEST})
  setTimeout(() => dispatch({
    type: GET_IDEA_METADATA_SUCCESS,
    payload: {
      title: 'Your Idea Title',
      created: Date.now(),
      updated: Date.now()
    }
  }), 5000)
}

export const createIdea = (ideaObj) => dispatch => {
  dispatch({type: CREATE_IDEA_REQUEST})
  setTimeout(() => dispatch({
      type: CREATE_IDEA_SUCCESS,
      payload: {...ideaObj, id: 1234}
  }))
}

const ideas = [
  {id: 4544, title: 'Architecture & Engineering', author: 'Dennis Gyurics'},
  {id: 3234, title: 'Architecture & Engineering', author: 'Dennis Gyurics'},
  {id: 5555, title: 'Architecture & Engineering', author: 'Dennis Gyurics'},
  {id: 2333, title: 'Architecture & Engineering', author: 'Dennis Gyurics'},
  {id: 1233, title: 'Architecture & Engineering', author: 'Dennis Gyurics'},
  {id: 1233, title: 'Architecture & Engineering', author: 'Dennis Gyurics'}
]
