import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user-dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(body: UpdateUserDto) {
    return this.userRepository.save(body);
  }

  update(id: number, body: UpdateUserDto) {
    return this.userRepository.update(id, body);
  }

  show(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  findByName(name: string) {
    return this.userRepository.findOne({ where: { name } });
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
