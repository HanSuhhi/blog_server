import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ShortArt } from '@libs/db/models/shortArt.model';

@Controller('short-art')
@ApiTags('首页推送')
export class ShortArtController {
  constructor(@InjectModel(ShortArt) private readonly shortArtModel) {}
  
  @Post()
  @ApiOperation({ summary: '创建博客'})
  async create(@Body() body: ShortArt) {
    await this.shortArtModel.create(body);
    return {
      success: true
    }
  }

  @Get()
  @ApiOperation({ summary: '显示所有博客内容' })
  async show() {
    return await this.shortArtModel.find();
  }

  @Get(':title')
  @ApiOperation({ summary: '博客详情'})
  async detail(@Param('title') title: string) {
    return await this.shortArtModel.find({
      title: title
    })
  }

  @Put(':id')
  @ApiOperation({ summary: '修改博客' })
  async update(@Param('id') id: string, @Body() body: ShortArt) {
    await this.shortArtModel.findByIdAndUpdate(id, body)
    return {
      success: true
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除博客' })
  async remove(@Param('id') id: string) {
    await this.shortArtModel.findByIdAndRemove(id);
    return {
      success: true
    };
  }
  
}
