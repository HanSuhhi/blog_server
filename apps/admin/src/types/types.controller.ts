import { Controller, Body, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Types } from '@libs/db/models/type.model';
import { InjectModel } from 'nestjs-typegoose';

@Controller('types')
@ApiTags('标签管理')
export class TypesController {
  constructor(
    @InjectModel(Types) private readonly typeModel
  ){}
  
  @Post()
  @ApiOperation({ summary: '创建标签'})
  async create(@Body() body: Types) {
    await this.typeModel.create(body);
    return {
      success: true
    }
  }

  @Get()
  @ApiOperation({ summary: '显示所有标签' })
  async showAll() {
    return await this.typeModel.find();
  }

  @Get(':typeName')
  @ApiOperation({ summary: '获取某个标签' })
  async showone(@Param('typeName') typeName: string) {
    return await this.typeModel.find({typeName: typeName});
  }

  @Put(':id')
  @ApiOperation({ summary: '修改标签' })
  async changeone(@Param('id') id: string, @Body() changeItem: Types) {
    await this.typeModel.findByIdAndUpdate(id, changeItem);
    return{
      success: true
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除标签' })
  async remove(@Param('id') id: string) {
    await this.typeModel.findByIdAndRemove(id);
    return {
      success: true
    }
  }
}
