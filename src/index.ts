export function getGreeting(): string {
  return 'Hello World';
}

function sayHello() {
  console.log(getGreeting());
}

sayHello();
