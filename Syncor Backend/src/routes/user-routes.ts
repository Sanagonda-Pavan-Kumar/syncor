import type { Router } from "express";
import { handleContactus } from "@/controllers/user-controllers";
import { createRouter } from "@/utils/create";

export default createRouter((router: Router) => {
  router.post("/register/Contactus", handleContactus);
});
