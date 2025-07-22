## Saorsail Gateway

This API is powered by [Zuplo](https://zuplo.com) and [Supabase](https://supabase.com) and allows users to 
install apps from the [Saorsail website](https://www.saorsail.com) directly to their Android device.

It essentially works by calling the API with details about an app a user wishes to install, along with a "pair code" 
which is simply a SHA265 has. The [assistant app](https://github.com/scottstraughan/saorsail-assistant-android) then
calls the Zuplo API with the paid code and checks for any apps to install. If they exist, they are downloaded.

## Components

1. [Saorsail Website](https://github.com/scottstraughan/saorsail-web)
2. [Saorsail Assistant (Android)](https://github.com/scottstraughan/saorsail-assistant-android)

## Development

Clone the code.

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the API by modifying `config/routes.oas.json`. The dev
server will automatically reload the API with your changes.

### Learn More

To learn more about Zuplo, you can visit the
[Zuplo documentation](https://zuplo.com/docs).

To connect with the community join [Discord](https://discord.zuplo.com).

## License

MIT
