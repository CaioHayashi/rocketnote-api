const {Router} = require("express")
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const NotesControllers = require("../controllers/NotesController")

const notesRoutes = Router()

notesRoutes.use(ensureAuthenticated);
const notesController = new NotesControllers()

notesRoutes.post("/", notesController.create)
notesRoutes.get("/", notesController.index);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes