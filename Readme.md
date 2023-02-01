# Steplix - Challenge

## Installation
project initialization configuration

```bash
  cd services
  docker-compose up -d
  yarn
  yarn dev
```
## API reference

#### Global Path

```http
  http://localhost:3000
```

#### Get all Currencies

```http
  GET /currencies
```

#### Create Currencies

```http
  POST /currencies
```

| Parameter | Type     | Optional                |
| :-------- | :------- | :------------------------- |
| `description`, `symbol` | `string`, `string` | **Required** |

#### Get all Rates

```http
  GET /rates
```

#### Create Rates

```http
  POST /rates
```

| Parameter | Type     | Optional                |
| :-------- | :------- | :------------------------- |
| `value`, `id_currency` | `string`, `number` | **Required** |

**note:** id_currency is the id generated by default in the `POST /currencies` path.

#### Get one symbol

```http
  GET /rates/{symbol}
```




## Technologies employed

- Docker (Docker-Compose)

- Express

- MySql 

- Dotenv

- Cors

- Sequelize

- Morgan

- PM2