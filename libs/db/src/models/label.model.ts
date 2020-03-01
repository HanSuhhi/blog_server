import { modelOptions, prop } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Labels {
  @prop()
  @ApiProperty({description: '博客标签', example: 'UI学习'})
  type_label: string

  @prop()
  @ApiProperty({ description: '标签', example: {'lineTitle': '读《xxx》有感', "articles": ["a1", "a2"]} })
  lines: {
    lineTitle: String,
    articles: String[]
  };
  
}