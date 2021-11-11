import { model, Schema, Model, Document } from 'mongoose';

export interface IPostDto extends Document {
    date: Date;
    title: string;
    body: string;
    category: string;
}

const PostDtoSchema: Schema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
});

export const Post: Model<IPostDto> = model('Post', PostDtoSchema);
