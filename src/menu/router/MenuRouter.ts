// src/menu/router/MenuRouter.ts
import { Router } from "express";
import { MenuView } from "../view/MenuView";

const router = Router();

// Página principal
router.get("/", MenuView.renderMain);

export default router;
