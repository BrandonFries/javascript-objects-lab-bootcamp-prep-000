var recipes = {Objects};

function updateObjectWithKeyAndValue(object, key, value){
  return object.assign({}, object, {[key]: value})
}
