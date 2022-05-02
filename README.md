## Descripcion

El siguiente proyecto fue realizado con Express y NodeJs, se creo el Api y base de datos de un banco en la cual a continuacion vera como instalarla y poder ejecutarla

## Instalacion

Esto instalara todas las dependencias del proyecto.


```bash
$ npm install
```

## Levantar docker

Luego de correr las migraciones y tener la base de datos levantaremos nuestro servicio docker con el siguiente comando

```bash
$ docker-compose up -d
```

## Correr las migraciones

Con este comando correran las migraciones para poder crear el esquema de la base de datos

```bash
$ npm run migrations:run
```

## Encender nuestro Api

Teniendo todo listo estamos preparados para correr nuestra Api con el siguiente comando

```bash
$ npm run dev
```

Con esto ya estamos listos para poder hacer las peticiones necesarias

El api se levantara en el puerto 3000 la direccion a la cual podra hacer las peticiones es la siguiente [http://localhost:3000/api/v2/](http://localhost:3000/api/v2/)

# Pruebas de estres

Las pruebas de estres se realizaron con la herramienta [K6](https://k6.io/)

Por lo que si se requiere realizar la prueba de estres es necesario tener instalada la herramienta, puede seguir la guia de [instalacion](https://k6.io/docs/getting-started/installation/)

Una vez tengamos instalada la herramienta lo podemos ejecutar con el siguiente comando.

```bash
k6 run stressTest.js
```

- Author - [Wilmer Monterrozo](https://github.com/Wharem85-25)


## License

Nest is [MIT licensed](LICENSE).
