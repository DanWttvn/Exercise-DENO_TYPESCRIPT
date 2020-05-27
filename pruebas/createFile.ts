const encoder = new TextEncoder()

const greetText = encoder.encode("Hello, my name is Dan")


//top level await included in Deno
await Deno.writeFile("greet.txt", greetText)