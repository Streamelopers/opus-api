import { Injectable } from "@nestjs/common";

import { CreatePictureDto } from "./dto/create-picture.dto";
import { UpdatePictureDto } from "./dto/update-picture.dto";

@Injectable()
export class PicturesService {
  create(createPictureDto: CreatePictureDto): string {
    return `This action adds a new picture ${JSON.stringify(createPictureDto)}`;
  }

  findAll(): string {
    return `This action returns all pictures`;
  }

  findOne(id: number): string {
    return `This action returns a #${id} picture`;
  }

  update(id: number, updatePictureDto: UpdatePictureDto): string {
    return `This action updates a #${id} picture ${JSON.stringify(
      updatePictureDto
    )}`;
  }

  remove(id: number): string {
    return `This action removes a #${id} picture`;
  }
}
