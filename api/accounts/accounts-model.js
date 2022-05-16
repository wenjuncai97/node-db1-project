const db = require('../../data/db-config');

const getAll = () => {
  return db('accounts').first();
}

const getById = id => {
  return db('accounts').where({accountid: id}).first();
}

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
