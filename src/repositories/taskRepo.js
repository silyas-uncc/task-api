import prisma from '../config/db.js';

export async function findAll(filter = {}) {
  const where = {};
  
  if (filter.completed !== undefined) {
    where.completed = filter.completed;
  }
  
  return prisma.task.findMany({
    where,
    orderBy: { id: 'asc' },
  });
}

export async function create(data) {
  return prisma.task.create({
    data,
  });
}