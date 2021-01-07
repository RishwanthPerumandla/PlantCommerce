import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sunny',
    email: 'sunny@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Hari',
    email: 'hari@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
