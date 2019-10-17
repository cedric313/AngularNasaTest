import {Deserializable} from '../deserialize';
import {deserializeWithAliases, InputAliases} from '../alias';

export class NasaObject implements Deserializable {
@InputAliases(['photos'])
public photos: Array<any>;


  constructor(photos){
    this.photos = photos;
  }

  deserialize(input: any): this {
    deserializeWithAliases(this, input, NasaObject);
    return this;
  }


}
