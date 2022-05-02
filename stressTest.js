import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 100 },
    { duration: '2m', target: 0 },
  ],
};

const BASE_URL = 'http://localhost:3000/api/v2';

function random (max) {
  return Math.floor(Math.random()*max) + 1;
}

export default () => {
  const paramsTransaccion = {
    headers: {
      'Accept': "application/json",
      'Content-type': "application/json"
    },
    tags: { k6test: 'yes' },
  };

  const payloadCodigoTransaccion = JSON.stringify({
    codigo_transaccion: "12315464",
    descripcion: "Pendiente",
    tipoTransaccionId: random(2)
  })

  const payloadTransaccion = JSON.stringify({
    mondo: 231654,
    fecha: new Date(),
    no_cheque: random(90000),
    usuario: "wil",
    codigoTransaccionId: 1,
    origenId: random(),
    tipoTransaccionId: random(2),
    cuentaId: 1
  })

  const reqCodigoTransaccion = {
    method: 'POST',
    url: `${BASE_URL}/codigoTransaccion`,
    body: payloadCodigoTransaccion,
    params: paramsTransaccion
  }

  const reqTransaccion = {
    method: 'POST',
    url: `${BASE_URL}/transacciones`,
    body: payloadTransaccion,
    params: paramsTransaccion
  }

  // http.batch([reqCodigoTransaccion, reqTransaccion])


  const codigoTransaccion =  http.post(`${BASE_URL}/codigoTransaccion`, payloadCodigoTransaccion, paramsTransaccion);
  http.post(
    `${BASE_URL}/transacciones`,
    JSON.stringify({
    mondo: 231654,
    fecha: new Date(),
    no_cheque: random(90000),
    usuario: "wil",
    codigoTransaccionId: codigoTransaccion.json('id'),
    origenId: random(2),
    tipoTransaccionId: random(2),
    cuentaId: 1
  }),
    paramsTransaccion
  );

  sleep(10);
};
