## Https

#### Use command below to generate a certificate and private key

```sh
    openssl req -nodes -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
```
