const router = require("express").Router();
const tokenBuilder = require('./tokenBuilder');
const Model = require('./login-model');

router.post("/", (req, res, next) => {

    const { username, password } = req.body;

    const [user] = Model.findBy({ username, password });
    if (user && password === user.password) {
      const token = tokenBuilder(user);

      res.status(200).json({
        message: `${user.username} is back!`,
        token: token,
      })
    }else {
      next({ status: 401, message: 'Invalid credentials' })
    }
});

module.exports = router;