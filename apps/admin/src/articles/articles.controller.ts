import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { article } from '@libs/db/models/article.model';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('articles')
@ApiTags('文章详情')
export class ArticlesController {
  constructor(
    @InjectModel(article) private readonly articleModel
  ){}

  @Post()
  @ApiOperation({ summary: '创建文章内容' })
  async create(@Body() articleItem: article) {
    await this.articleModel.create(articleItem);
    return {
      success: true
    }
  }

  @Get(':title')
  @ApiOperation({ summary: '根据标题请求文章详情'})
  async detail(@Param('title') title: string) {
    return await this.articleModel.find({title: title})
  }

  @Put(':id')
  @ApiOperation({ summary: '修改博文' })
  async update(@Param('id') id: string, @Body() articleItem: article) {
    await this.articleModel.findByIdAndUpdate(id, articleItem)
    return {
      success: true
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除博文' })
  async remove(@Param('id') id: string) {
    await this.articleModel.findByIdAndRemove(id);
    return {
      success: true
    };
  }

  @Get()
  @ApiOperation({ summary: '测试接口' })
  async show() {
    return await this.articleModel.find();
  }
}
