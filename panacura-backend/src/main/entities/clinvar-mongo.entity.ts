import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'clinvars',
})
export class ClinvarMongo extends Document {
  @Prop()
  pos: string;
  @Prop()
  ref: string;
  @Prop()
  alt: string;
  @Prop()
  qual: string;
  @Prop()
  filter: string;
  @Prop()
  info: string;
}

export const ClinvarMongoSchema = SchemaFactory.createForClass(ClinvarMongo);
