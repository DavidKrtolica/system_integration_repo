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
    res.send({users: [
        {
            name: "David",
            role: "student"
        },
        {
            name: "Marko",
            role: "full-time worker"
        }
    ]});
});

export default router;