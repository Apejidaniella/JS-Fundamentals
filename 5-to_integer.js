#!/usr/bin/node

const args = process.argv[2];

const number = Number.parseInt(args);

if (!Number.isNaN(number)) {
  console.log(`My number: ${number}`);
} else {
  console.log('Not a number');
}
