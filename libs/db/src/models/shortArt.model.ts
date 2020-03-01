import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class ShortArt {
  @prop()
  @ApiProperty({ description: '文章序号', example: 1})
  index: 1
  
  @prop()
  @ApiProperty({description: '博客标题', example: '颜色可以这么做原来 | UI学习一'})
  title: string

  @prop()
  @ApiProperty({description: '博客标签', example: 'UI学习'})
  type_label: string

  @prop()
  @ApiProperty({description: '博客标签', example: '读《一二三四》'})
  lineTitle: string

  @prop()
  @ApiProperty({description: '博客简介', example: '这些天继续在看《巴拉巴拉巴拉》一书，偶有启发'})
  introduction: string

  @prop()
  @ApiProperty({description: '博客发布时间', example: '2020-1-27 2:00'})
  pub_time: string

  @prop()
  @ApiProperty({ description: '预计阅读时间', example: 6})
  may_time: number
  
}