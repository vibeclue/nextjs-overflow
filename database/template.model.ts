import { Schema, models, model } from "mongoose";

export interface IModel {
  id: string;
}

const ModelSchema = new Schema<IModel>({}, { timestamps: true });

const Model = models?.Model || model<IModel>("Model", ModelSchema);

export default Model;
