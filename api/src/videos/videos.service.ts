import { Injectable } from "@nestjs/common";
import Video from './interfaces/video.interface'

@Injectable()
export class VideosService {
  getTrending(): Video[] {
    const videos = [{ link: 'hello', title: 'test' }]
    return videos
  }
}