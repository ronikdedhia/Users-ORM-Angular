import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello';
  }
  getBye(): string {
    return 'Goodbye!';
  }
  greet(name: string): string {
    return `Hello, ${name}!`;
  }
}
