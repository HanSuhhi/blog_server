import { modelOptions, prop } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class article {
  @prop()
  @ApiProperty({ description: '博客标题', example: '颜色可以这么做原来 | UI学习一'})
  title: string;

  @prop()
  @ApiProperty({ description: '博客内容', example: 'asdfghjkjhgASDFGHJHGFDSASDGJKL' })
  message: string;
}