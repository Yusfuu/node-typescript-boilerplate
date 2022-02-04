import "dotenv/config";
import { config } from 'dotenv';
config({ path: './.env.example' });
jest.setTimeout(10000);