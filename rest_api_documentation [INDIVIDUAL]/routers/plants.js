import Router from "express";
const plantRouter = Router();

//DEFINING DATA - PLANT ARRAY WITH PLANTS
let plants = [
    {
        id: 1,
        name: "Rose"
    }, 
    {
        id: 2,
        name: "Sunflower"
    }
];

//DEFINING AUTO-INCREMENT ID -- FROM 3 UP
let autoId = 3

/**
 * @openapi
 * /plants:
 *   get:
 *     summary: Returns a list of all plants...
 *     parameters:
 *       - in: query
 *         name: plantName
 *         schema:
 *            type: string
 *         description: Filter plants by name  
 *     responses:
 *       200:
 *         description: Returns an array of plants // a plant.
 */
 plantRouter.get("/plants", (req, res) => {
    const plantName = req.query.plantName;   
    if (plantName === undefined) {
        res.send({ data: plants });
    } else {
        const foundPlants = plants.find(plant => plant.name === plantName || plant.name.toLowerCase() === plantName);
        res.send({ data: foundPlants });
    }
});

/**
 * @openapi
 * /plants/{id}:
 *   get:
 *     summary: Returns a plant with specific ID...
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *            type: integer
 *            minimum: 1
 *         description: ID of the plant  
 *     responses:
 *       200:
 *         description: Returns a plant with a specific ID.
 */
plantRouter.get("/plants/:id", (req, res) => {
    const plantId = Number(req.params.id);
    const foundPlant = plants.find(plant => plant.id === plantId);
    res.send({ data: foundPlant });
});

/**
 * @openapi
 * /plants:
 *   post:
 *     summary: Add a new plant...
 *     requestBody:
 *        description: Type the name of the new plant...
 *        required: true 
 *        content:
 *          application/json:
 *              schema:
 *                  $ref: '#/definitions/plantSchema'
 *     responses:
 *       201:
 *         description: Created a new plant.
 * definitions:
 *  plantSchema:
 *      type: object
 *      properties:
 *          name:
 *              type: string 
 */ 
plantRouter.post("/plants", (req, res) => {
    const newPlant = req.body;
    newPlant.id = autoId++;
    plants.push(newPlant);
    res.send({ data: newPlant });
});

/**
 * @openapi
 * /plants/{id}:
 *   patch:
 *     summary: Update a plant with specific ID...
 *     parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         required: true
 *         description: ID of the plant
 *     requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/plantPatchSchema'
 *     responses:
 *       201:
 *         description: Updated the plant.
 * definitions:
 *  plantPatchSchema:
 *      type: object
 *      properties:
 *          name:
 *              type: string 
 */ 
plantRouter.patch("/plants/:id", (req, res) => {
    let plantUpdated = false;
    const plantId = Number(req.params.id);
    plants = plants.map(plant => {
        if (plant.id === plantId) {
            plantUpdated = true;
            return { ...plant, ...req.body, id: plant.id }
        }
        return plant;
    });
    res.send({ updated: plantUpdated, at: plantId });
});

/**
 * @openapi
 * /plants/{id}:
 *   delete:
 *     summary: Delete a plant with specific ID...
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *            type: integer
 *            minimum: 1
 *         description: ID of the plant  
 *     responses:
 *       200:
 *         description: Deletes a plant with a specific ID.
 */
plantRouter.delete("/plants/:id", (req, res) => {
    const plantId = Number(req.params.id);
    plants = plants.filter(plant => plant.id !== plantId);
    res.send({ data: "deleted", at: plantId });
});

export default plantRouter;