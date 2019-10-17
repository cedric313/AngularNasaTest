import {Deserializable} from '../deserialize';
import {deserializeWithAliases, InputAliases} from '../alias';

export class NasaObject implements Deserializable {
@InputAliases(['id'])
public id: number;
@InputAliases(['name'])
public name: string;



  constructor(id,name){
    this.id = id;
    this.name = name;
  }

  deserialize(input: any): this {
    deserializeWithAliases(this, input, NasaObject);
    return this;
  }

}
