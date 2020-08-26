/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN EventsActionsGenerated.js PLEASE EDIT ../EventsActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import EventsApi from "../../../api/EventsApi";

let actionsFunction = {

  //CRUD METHODS

  // Create events
  createEvents: function(events) {
    return function(dispatch) {
      return EventsApi
        .createEvents(events)
        .then(events => {
          dispatch(actionsFunction.createEventsSuccess(events));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createEventsSuccess: function(events) {
    return { type: types.CREATE_EVENTS_SUCCESS, payload: events };
  },


  // Delete events
  deleteEvents: function(id) {
    return function(dispatch) {
      return EventsApi
        .deleteEvents(id)
        .then(events => {
          dispatch(actionsFunction.deleteEventsSuccess(events));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteEventsSuccess: function(events) {
    return { type: types.DELETE_EVENTS_SUCCESS, payload: events };
  },


  // Find by _clubs
  findBy_clubs: function(key) {
    return function(dispatch) {
      return EventsApi
        .findBy_clubs(key)
        .then(item => {
          dispatch(actionsFunction.findBy_clubsSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_clubsSuccess: function(item) {
    return { type: types.FINDBY_CLUBS_EVENTS_SUCCESS, payload: item };
  },


  // Get events
  loadEvents: function(id) {
    return function(dispatch) {
      return EventsApi
        .getOneEvents(id)
        .then(events => {
          dispatch(actionsFunction.loadEventsSuccess(events));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadEventsSuccess: function(events) {
    return { type: types.GET_EVENTS_SUCCESS, payload: events };
  },

  // Load  list
  loadEventsList: function() {
    return function(dispatch) {
      return EventsApi
        .getEventsList()
        .then(list => {
          dispatch(actionsFunction.loadEventsListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadEventsListSuccess: function(list) {
    return { type: types.LIST_EVENTS_SUCCESS, payload: list };
  },

	
  // Save events
  saveEvents: function(events) {
    return function(dispatch) {
      return EventsApi
        .saveEvents(events)
        .then(events => {
          dispatch(actionsFunction.saveEventsSuccess(events));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveEventsSuccess: function(events) {
    return { type: types.UPDATE_EVENTS_SUCCESS, payload: events };
  },


};

export default actionsFunction;