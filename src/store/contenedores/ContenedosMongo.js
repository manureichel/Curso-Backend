const mongoose = require("mongoose");
const config = require("../config.js");

class ContenedorMongo {
  constructor(collectionName, schema) {
    this.container = mongoose.model(collectionName, schema);
  }

  async updateMaxId() {
    if (this.lastId === null) {
      const id = await this.container.findOne({}, { id: 1 }).sort({ id: -1 });
      this.lastId = id === null ? 0 : id.id;
    }
  }

  async save(obj) {
    const newObj = new this.container({ id: ++this.lastId, ...obj });
    const savedObj = await newObj.save();
    const rtnObj = await this.container.findOne(
      { _id: savedObj._id },
      { _id: 0, __v: 0 }
    );
    return rtnObj;
  }

  async getById(id) {
    const object = await this.container.findOne({ id }, { _id: 0, __v: 0 });
    if (obj) return { ...obj._doc };
    else return null;
  }

  async getAll() {
    const objects = await this.container.find({}, { _id: 0, __v: 0 });
    return objects;
  }

  async deleteById(id) {
    const object = await this.container.deleteOne({ id });
    if (obj.deletedCount > 0) return "borrado";
    else return "no existe";
  }

  async deleteAll() {
    await this.container.deleteMany({});
  }

  async update(id, obj) {
    const object = await this.container.updateOne({ id }, { $set: { ...obj } });
    const object = await this.getById(id);
    return updatedObj;
  }
}
