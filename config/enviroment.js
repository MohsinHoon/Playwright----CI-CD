require("dotenv").config();
import dotenv from "dotenv";

dotenv.config();

export const ACTIVE_ENVIRONMENT = "QA";

export const BASE_URL = process.env.QA_BASE_URL;
export const USER_EMAIL = process.env.QA_USER_EMAIL;
export const USER_PASSWORD = process.env.QA_USER_PASSWORD;