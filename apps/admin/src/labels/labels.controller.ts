import { Controller, Body, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Labels } from '@libs/db/models/label.model';

@Controller('labels')
@ApiTags('标签及标签所含文章链')
export class LabelsController {
  constructor(
    @InjectModel(Labels) private readonly labelModel
  ){}

  @Post()
  @ApiOperation({ summary: '添加标签链' })
  async create(@Body() body: Labels) {
    await this.labelModel.create(body);
    return {
      success: true
    }
  }

  @Get()
  @ApiOperation({ summary: '显示所有标签链' })
  async showAll() {
    return await this.labelModel.find();
  }

  @Get(':type_label')
  @ApiOperation({ summary: '根据标签和标签链获取链'})
  async detail(@Param('type_label') type_label:string) {
    return await this.labelModel.find({type_label: type_label})
  }

  @Put(':id')
  @ApiOperation({ summary: '修改标签链' })
  async changeone(@Param('id') id: string, @Body() changeItem: Labels) {
    await this.labelModel.findByIdAndUpdate(id, changeItem);
    return{
      success: true
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除标签链' })
  async remove(@Param('id') id: string) {
    await this.labelModel.findByIdAndRemove(id);
    return {
      success: true
    }
  }

}
