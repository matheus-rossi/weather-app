var getUser = (id, callback) => {
    var user = {
        id: 21,
        name: "matt"
    };
    callback(user);
};

getUser(31, (user) => {
    console.log(user);
});