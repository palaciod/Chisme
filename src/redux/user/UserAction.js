export const setUser = user => ({
    type: "SET_USER",
    payload: user
});
  
export const setToken = token => ({
    type: "SET_ACCESS_TOKEN",
    payload: token
});

export const setLocation = coordinate => ({
    type: "SET_LOCATION",
    payload: coordinate
});