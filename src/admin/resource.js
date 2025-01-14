import { componentLoader } from "./componentsLoader.js";
import bcrypt from "bcrypt";
import Gallery from "../../models/galleryModel.js";
import Contact from "../../models/contactModel.js";
import BrandLogo from "../../models/brandModel.js";
import User from "../../models/GetTouchModel.js";
import Users from "../../models/UserModel.js";
import Blog from "../../models/blogModel.js";
import RotateImage from "../../models/rotateImageModel.js";
import HeroSlider from "../../models/HeroModel.js";
import Career from "../../models/careerModel.js";
import Application from "../../models/applicationModel.js";
import Multimedia from "../../models/multimediaModel.js";
import uploadFeature from "@adminjs/upload";
import Activity from "../../models/activityModel.js";
import Creative from "../../models/creativeModel.js";
import NoticeImage from "../../models/noticeModel.js";
import Testimonial from "../../models/testimonialModel.js";
import Team from "../../models/teamModel.js";
import Calendar from "../../models/calendarModel.js";
import UpcomingEvent from "../../models/upcomingEventModel.js";
import LongtermProject from "../../models/longtermProjectModel.js";
import KinderGarten from "./../../models/academicModel/kindergartenModel.js";
import ElementarySchool from "../../models/academicModel/elementaryModel.js";
import MiddleSchool from "../../models/academicModel/middleschoolModel.js";
import SeniorSchool from "../../models/academicModel/seniorschoolModel.js";
import Amun from "../../models/academicModel/amunModel.js";
import GetEnquiry from "../../models/getInquiryModel.js";
import PDF from "../../models/resultModel.js";

const localProvider = {
  bucket: "public/uploads",
  opts: {
    baseUrl: "/uploads",
  },
};

// Hashing function for passwords
const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

export const Resources = [
  /*---------------Photo or gallery  management---------------*/

  // 1. for Hero or home slider section
  {
    resource: HeroSlider,
    options: {
      navigation: {
        name: "Media",
        icon: "Camera",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `/${filename}`;
        },
      }),
    ],
  },
  //2. for Notice section
  {
    resource: NoticeImage,
    options: {
      navigation: {
        name: "Media",
        icon: "Camera",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `/${filename}`;
        },
      }),
    ],
  },
  //3. for gallery section
  {
    resource: Gallery,
    options: {
      navigation: {
        name: "Media",
        icon: "Image",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`;
        },
      }),
    ],
  },
  //4. for gallery section
  {
    resource: RotateImage,
    options: {
      navigation: {
        name: "Media",
        icon: "Image",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`;
        },
      }),
    ],
  },
  //5. for brand logo
  {
    resource: BrandLogo,
    options: {
      navigation: {
        name: "Media",
        icon: "Camera",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },

        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },

      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },

        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`;
        },
      }),
    ],
  },
  //6. for pdf download logo
  {
    resource: PDF,
    options: {
      navigation: {
        name: "Media",
        icon: "Camera",
      },
      properties: {
        _id: { isVisible: false },
        resultPdf: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },

        pdfKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },

      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "resultPdf",
          key: "pdfKey",
          bucket: "bucket",
          mimeType: "mime",
        },

        validation: {
          mimeTypes: ["application/pdf"],
        },
        uploadPath(record, filename) {
          return `pdf_uploads/${filename}`;
        },
      }),
    ],
  },
  //7.  for multimedia upload
  {
    resource: Multimedia,
    options: {
      navigation: {
        name: "Media",
        icon: "Image",
      },
      properties: {
        _id: { isVisible: false },
        images: {
          type: "file",
          isArray: true,
          isVisible: { list: true, edit: true, filter: true, show: true },
        },

        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        multiple: true,
        properties: {
          filePath: "images",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          //   return `${filename}`;
          return `${filename}`;
        },
      }),
    ],
  },

  /*----------Calendar  resource management-------------*/
  //1. Calendar resource
  {
    resource: Calendar,
    options: {
      navigation: {
        name: "Events and Activities",
        icon: "School",
      },
      properties: {
        _id: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },
  // 2. upcoming event resource
  {
    resource: UpcomingEvent,
    options: {
      navigation: {
        name: "Events and Activities",
        icon: "School",
      },
      properties: {
        _id: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },

  /*---------------Academic   management------------------*/
  // 1. KinderGarten section
  {
    resource: KinderGarten,
    options: {
      navigation: {
        name: "Academic Management",
        icon: "camera",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`;
        },
      }),
    ],
  },
  // 2. ElementarySchool section
  {
    resource: ElementarySchool,
    options: {
      navigation: {
        name: "Academic Management",
        icon: "camera",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`;
        },
      }),
    ],
  },
  // 3.Middle School section
  {
    resource: MiddleSchool,
    options: {
      navigation: {
        name: "Academic Management",
        icon: "camera",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`;
        },
      }),
    ],
  },
  // 4.Senior School section
  {
    resource: SeniorSchool,
    options: {
      navigation: {
        name: "Academic Management",
        icon: "camera",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`;
        },
      }),
    ],
  },
  // 4.Amun section
  {
    resource: Amun,
    options: {
      navigation: {
        name: "Academic Management",
        icon: "camera",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`;
        },
      }),
    ],
  },

  /*-------------------for blog and activity  section -------------------------------*/
  // 1.  blog  section
  {
    resource: Blog,
    options: {
      navigation: {
        name: "BlogsModel",
        icon: "Image",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
        description:{
          type: "richtext", isVisible: { list: true, edit: true, show: true },isRequired: true,
          default: "Enter a description of the blog here...",
        }
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },

  // 3.  activity  section
  {
    resource: Activity,
    options: {
      navigation: {
        name: "BlogsModel",
        icon: "Image",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
        description:{
          type: "richtext", isVisible: { list: true, edit: true, show: true },isRequired: true,
          default: "Enter a description of the blog here...",
        }
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },
  // 4.  creative  section
  {
    resource: Creative,
    options: {
      navigation: {
        name: "BlogsModel",
        icon: "Image",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },
  // 5.  LongTerm Project  section
  {
    resource: LongtermProject,
    options: {
      navigation: {
        name: "BlogsModel",
        icon: "Image",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },

  /*-------------------for Testimonial  section -----------------------*/
  // 1.  Testimonial  section
  {
    resource: Testimonial,
    options: {
      navigation: {
        name: "Testimonial & Team",
        icon: "User",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },

  // 2.  Team  section
  {
    resource: Team,
    options: {
      navigation: {
        name: "Testimonial & Team",
        icon: "User",
      },
      properties: {
        _id: { isVisible: false },
        image: {
          type: "file",
          isVisible: { list: true, edit: true, filter: true, show: true },
        },
        imageKey: { isVisible: false },
        bucket: { isVisible: false },
        mime: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
    features: [
      uploadFeature({
        provider: { local: localProvider },
        componentLoader,
        properties: {
          filePath: "image",
          key: "imageKey",
          bucket: "bucket",
          mimeType: "mime",
        },
        validation: {
          mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
        },
        uploadPath(record, filename) {
          return `${filename}`; // Save directly under public/uploads with original filename
        },
      }),
    ],
  },

  /*-------------------------------Career model management--------------------*/
  // 1. Application config
  {
    resource: Application,
    options: {
      navigation: { name: "Careers", icon: "Briefcase" },
      properties: {
        _id: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },
  // 2. career config
  {
    resource: Career,
    options: {
      navigation: { name: "Careers", icon: "Briefcase" },
      properties: {
        _id: { isVisible: false },
        createdAt: { isVisible: false },
        updatedAt: { isVisible: false },
      },

      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
      properties: {
        description: {
          type: "richtext",
          custom: {
            quill: {
              modules: {
                toolbar: [
                  ["bold", "italic", "underline", "strike"],
                  ["blockquote", "code-block"],
                  [{ header: 1 }, { header: 2 }],
                  [{ list: "ordered" }, { list: "bullet" }],
                  [{ script: "sub" }, { script: "super" }],
                  [{ indent: "-1" }, { indent: "+1" }],
                  [{ direction: "rtl" }],
                  [{ size: ["small", false, "large", "huge"] }],
                  [{ header: [1, 2, 3, 4, 5, 6, false] }],
                  [{ color: [] }, { background: [] }],
                  [{ font: [] }],
                  [{ align: [] }],
                  ["clean"],
                ],
              },
              theme: "snow",
              placeholder: "Type your content here...",
              bounds: ".admin-bro_Edit",
            },
          },
        },
      },
    },
  },

  /*------------communication and engagement functions--------------------*/
  // 1. contact section
  {
    resource: Contact,
    options: {
      navigation: { name: "Communication", icon: "User" },
      properties: {
        _id: { isVisible: false },
        updatedAt: { isVisible: false },
        name: { isVisible: true },
        email: { isVisible: true },
        phone: { isVisible: true },
        message: { isVisible: true },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },
  //2. get in touch section
  {
    resource: User,
    options: {
      navigation: { name: "Communication", icon: "User" },
      properties: {
        _id: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },
  //3. get Enquiry section
  {
    resource: GetEnquiry,
    options: {
      navigation: { name: "Communication", icon: "User" },
      properties: {
        _id: { isVisible: false },
        updatedAt: { isVisible: false },
      },
      actions: {
        list: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can view the list
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        new: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin and sub-admin can create new brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin")
            );
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) => {
            // admin, sub-admin, and editor can edit brand logos
            return (
              currentAdmin &&
              (currentAdmin.role === "admin" ||
                currentAdmin.role === "sub-admin" ||
                currentAdmin.role === "editor")
            );
          },
        },
        delete: {
          isAccessible: ({ currentAdmin }) => {
            // Only admin can delete brand logos
            return currentAdmin && currentAdmin.role === "admin";
          },
        },
      },
    },
  },

  /*----------authentication on role based acces--------------------*/

  {
    resource: Users,
    options: {
      navigation: { name: "Admin Access Management", icon: "User" },
      properties: {
        _id: {
          isVisible: { list: false, filter: false, show: false, edit: false },
        },
        password: {
          isVisible: { list: false, filter: false, show: false, edit: true },
        },
      },

      actions: {
        new: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
          before: async (request) => {
            if (request.payload?.password) {
              // Hash the password before saving a new user
              request.payload.password = await hashPassword(
                request.payload.password
              );
            }
            return request;
          },
        },
        edit: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
          before: async (request) => {
            if (request.method === "post") {
              if (request.payload?.password) {
                // Hash the new password if it is being updated
                request.payload.password = await hashPassword(
                  request.payload.password
                );
              } else {
                // If password is not provided, remove it from the payload to avoid overwriting with empty
                delete request.payload?.password;
              }
            }
            return request;
          },
        },
        show: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
          after: async (response) => {
            // Ensure the password is not shown in the show view
            response.record.params.password = "";
            return response;
          },
        },
        list: {
          isAccessible: ({ currentAdmin }) =>
            currentAdmin && currentAdmin.role === "admin",
          after: async (response) => {
            // Ensure the password is not shown in the list view
            response.records.forEach((record) => {
              record.params.password = "";
            });
            return response;
          },
        },
      },
    },
  },
];
