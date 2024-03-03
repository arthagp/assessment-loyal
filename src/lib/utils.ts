import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomString(length: number): string {
  const characters: string = "abcdefghijklmnopqrstuvwxyz";
  let result: string = "";
  const charactersLength: number = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function getFirstThreeWord(characters: string) {
  const words = characters.split(" ");
  let firstThreeWords = "";
  for (let word of words) {
    firstThreeWords += word.slice(0, 3);
    if (firstThreeWords.length >= 3) break;
  }
  return firstThreeWords.toUpperCase();
}

