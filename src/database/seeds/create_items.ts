import Knex from 'knex';

export async function seed(knex: Knex) {
  return knex('items').insert([
    { title: 'Lampadas', image: 'lampadas.svg'},
    { title: 'Baterias', image: 'baterias.svg'},
    { title: 'Papel', image: 'papel.svg'},
    { title: 'Eletrônicos', image: 'eletronicos.svg'},
    { title: 'Organicos', image: 'organicos.svg'},
    { title: 'Oléos', image: 'oleo.svg'},
  ])
}