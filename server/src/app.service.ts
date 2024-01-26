import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './cat.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getCat(): Promise<Cat[]> {
    const newCat = new this.catModel({ name: 'Cat 1', age: 23, breed: 'Meow' });
    await newCat.save();
    return this.catModel.find().exec();
  }
}
