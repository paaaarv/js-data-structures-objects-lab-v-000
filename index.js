// Write your solution in this file!

var driver = {}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){

  driver[key] = value
  return driver
}

function updateDriverWithKeyAndValue(driver,key,value){
  return Object.assign({}, driver, {[key]: value})

}

function destructivelyDeleteFromDriverByKey(driver,key){
  return delete driver.key
}

function destructivelyDeleteFromDriverByKey(driver,key){
  driver.key = undefined;
  return driver
}
