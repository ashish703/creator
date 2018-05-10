import mongoose, { Schema } from 'mongoose'

const usersSchema = new Schema({}, { timestamps: true })

usersSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Users', usersSchema)

export const schema = model.schema
export default model
