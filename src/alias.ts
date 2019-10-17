//Unique Alias to Serialize
export function OutputAlias(alias: string) {
  //Function that will be called for each property mapped using decorator
  return (target: Object, propertyKey: string | symbol) => {
    //save mapping reference as static property to target class
    target['constructor']['_alias_output'] = target['constructor']['_alias_output'] || {};
    target['constructor']['_alias_output'][propertyKey] = alias;
  }
}
//Multiple Aliases to Deserialize.
export function InputAliases(aliases: string[]) {
  //Function that will be called for each property mapped using decorator

  return (target: Object, propertyKey: string | symbol) => {
    //save mapping reference as static property to target class
    target['constructor']['_alias_input'] = target['constructor']['_alias_input'] || {};
    target['constructor']['_alias_input'][propertyKey] = aliases;
  }
}
//Deserializable
export function deserializeWithAliases<T>(entity: T, itemToMap: any, type?: any): T {
  let t: any;
  if(!type) t = entity.constructor.name;
  else t = type;
  let fields = entity['constructor']['_alias_input'];
  for (let field in fields) {
    const alias = fields[field].find(alias => itemToMap[alias] !== undefined);
    if(alias !== undefined) entity[field] = itemToMap[alias];
    else continue;
  }
  return entity;
}
//Serializable
export function serializeToAliases(entity: any, type?: any): any {
  let item = new Object();
  let fields = (type)['_alias_output'];
  for (let field in fields) {
    let alias = fields[field];
    if (entity[field] !== undefined) item[alias] = entity[field];
  }
  return item;
}
