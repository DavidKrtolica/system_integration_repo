import Router from "express";
const router = Router();

/**
 * @openapi
 * /users:
 *   get:
 *     description: Returns a list of all users...
 *     responses:
 *       200:
 *         description: Returns an array of users.
 */
router.get("/users", (req, res) => {
    res.send({users: []});
});

export default router;