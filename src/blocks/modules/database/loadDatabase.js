const loadDatabase = ( handler, filter ) => {    
    fetch('../../../db/db.json')
        .then(response => response.json())
        .then(filter)
        .then(handler);
};

export { loadDatabase };
