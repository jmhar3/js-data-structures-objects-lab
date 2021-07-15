const driver = {
    name : 'name'
}

function updateDriverWithKeyAndValue(driver, key, value) {
    const updatedDriver = {...driver};
    updatedDriver[key] = value;
    return updatedDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const deleteFromDriver = {...driver};
    delete deleteFromDriver[key];
    return deleteFromDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}