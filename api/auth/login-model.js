function findBy(login) {
console.log("env", process.env)
  if (login.username === process.env.USERNAME && login.password === process.env.PASSWORD) {
    return [
      {
        "user_id": 1,
        "username": process.env.USERNAME,
        "password": process.env.PASSWORD,
        "role_name": "admin",
      }
    ]
  }else {
    return []
  }
}

module.exports = {
  findBy
}