import { prop } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";

export class Types {
  @prop()
  @ApiProperty({ description: '标签ID', example: 1})
  typeId: string;
  
  @prop()
  @ApiProperty({ description: '标签名称', example: 'UI学习' })
  typeName: string;

  @prop()
  @ApiProperty({ description: '包含文章数量', example: 1})
  articleNums: number
}