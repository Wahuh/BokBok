import { Controller, Get } from '@nestjs/common'
import Video from './interfaces/video.interface'
import { VideosService } from './videos.service'

@Controller('videos')
export class VideosController {
  constructor(private videosService: VideosService) {}

  @Get()
  async GetVideos(): Promise<Video[]> {
    return this.videosService.getTrending()
  }
}