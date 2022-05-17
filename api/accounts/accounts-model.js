const res = require('express/lib/response');
const db = require('../../data/db-config');

const getAll = () => {
  // select * from accounts;
  return db('accounts');
}

const getById = id => {
  // select * from accounts where id = 1;
  return db('accounts').where({id: id}).first();
}

const create = async account => {
  // insert into accounts (name, budget) values ('foo', '1000');
  const [id] = await db('accounts').insert(account);
  return getById(id)
}

const updateById = async (id, account) => {
  await db('accounts').where('id', id).update(account)
  return getById(id)
}

const deleteById = id => {
  // delete from accounts where id = 1;
  return db('accounts').where('id', id).delete()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
