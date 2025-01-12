import AdminJSExpress from "@adminjs/express";
import * as url from "url";
import express from "express";
import connectDatabase from "./db/Database.js";
import admin from "./src/admin/adminjsSetup.js";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import os from "os";
import fs from "fs";

// all routes imported
import galleryRoutes from "./routes/media/galleryRoute.js";
import heroRoutes from "./routes/media/heroRoute.js";
import brandLogoRoutes from "./routes/media/brandRoute.js";
import notice from "./routes/media/noticeRoute.js";
import multimedia from "./routes/media/multimediaRoute.js";

import contactRoutes from "./routes/communication/contactRoute.js";
import getTouchRoutes from "./routes/communication/getTouchRoute.js";
import inquiryRoutes from "./routes/communication/inquiryRoute.js";

import calendarRoute from "./routes/event/calendarRoute.js";
import UpcomingEvent from "./routes/event/upcomingEventRoute.js";

import career from "./routes/application/careerRoute.js";
import application from "./routes/application/applicationRoute.js";

import teams from "./routes/user/teamRoute.js";
import testimonials from "./routes/user/testimonialRoute.js";

import authenticate from "./middleware/authenticateUser.js";

import Blog from "./routes/blog/blogRoute.js";
import Activity from "./routes/blog/activitRoute.js";
import CreativeWeek from "./routes/blog/creativeRoute.js";

import amun from "./routes/academic/amunRoute.js";
import middleschool from "./routes/academic/middleRoute.js";
import kindergarten from "./routes/academic/kindergartenRoute.js";
import elementary from "./routes/academic/elementaryRoute.js";
import seniorschool from "./routes/academic/highRoute.js";
import longtermprojects from "./routes/academic/longProjectRoute.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const PORT = 3000;

const app = express();

os.tmpdir = () => "D:\\temp";
const tempDir = "D:\\temp";
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

const start = async () => {
  // Middleware to parse JSON requests
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));
  dotenv.config();

  app.use("/uploads", express.static(path.join(__dirname, "/public/uploads")));
  app.use(express.static(path.join(__dirname, "public")));

  // Connect to MongoDB
  await connectDatabase();

  // Add authentication to AdminJS
  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,

    {
      authenticate,
      cookieName: "adminjs",
      cookiePassword: "sessionsecret",
    },
    null,
    {
      resave: true,
      saveUninitialized: true,
      secret: "sessionsecret",
      cookie: {
        httpOnly: process.env.NODE_ENV === "production",
        secure: process.env.NODE_ENV === "production",
      },
    }
  );

  // Use the authenticated router
  app.use(admin.options.rootPath, adminRouter);

  // all routes here defined
  // blog  routes
  app.use("/api/blog", Blog);
  app.use("/api/activity", Activity);

  app.use("/api/creativeweek", CreativeWeek);
  // media  routes
  app.use("/api/galleries", galleryRoutes);
  app.use("/api/hero", heroRoutes);
  app.use("/api/brandlogos", brandLogoRoutes);
  app.use("/api/notice", notice);
  app.use("/api/multimedia", multimedia);
  // communication routes
  app.use("/api/contact", contactRoutes);
  app.use("/api/getintouch", getTouchRoutes);
  app.use("/api/inquiry", inquiryRoutes);
  // events
  app.use("/api/calendar", calendarRoute);
  app.use("/api/upcomingevent", UpcomingEvent);
  // application
  app.use("/api/career", career);
  app.use("/api/application", application);

  // user Routes
  app.use("/api/team", teams);
  app.use("/api/testimonial", testimonials);

  // academic
  app.use("/api/kindergarten", kindergarten);
  app.use("/api/elementary", elementary);
  app.use("/api/middleschool", middleschool);
  app.use("/api/seniorschool", seniorschool);
  app.use("/api/longtermprojects", longtermprojects);
  app.use("/api/amun", amun);

  // Catch-all route for non-API and non-admin routes (React App)
  app.get("*", (req, res) => {
    if (!req.path.startsWith("/api") && !req.path.startsWith("/admin")) {
      res.sendFile(path.join(__dirname, "public/"));
    } else {
      res.status(404).send("Not Found");
    }
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

start();
