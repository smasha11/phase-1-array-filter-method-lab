// Code your solution here

// Function to return all drivers that match the passed in name
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to return drivers if beginning provided letters match
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  // Function to check if name matches within a data structure
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  