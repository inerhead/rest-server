const { Router } = require('express');
const { usersDelete, usersPost, usersGet, userPut, usersPutError } = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.post('/', usersPost);

router.put('/:usuarioId', userPut);
router.delete('/', usersDelete);
router.put('*', usersPutError);


module.exports = router;