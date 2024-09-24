// import S3 from "../config/S3";
import { message } from "antd";
import {API} from "../config/api"

// import { AwsImageUploadResponseType } from "../shared/types/types";
// const S3FileUpload = require("react-s3").default;
// window.Buffer = window.Buffer || require("buffer").Buffer;

const GET = async (url: any, params: any) => {
  return new Promise(async (resolve, reject) => {
    fetch(API.BASE_URL + url, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const POST = async (url: any, body: any) => {
  return new Promise(async (resolve, reject) => {
    fetch(API.BASE_URL + url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const PUT = async (url: any, body: any) => {
  return new Promise(async (resolve, reject) => {
    fetch(API.BASE_URL + url, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const DELETE = async (url: any) => {
  return new Promise(async (resolve, reject) => {
    fetch(API.BASE_URL + url, {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        resolve(json);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// const COMPRESS_IMAGE = async (url: any, file: any) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       if (file) {
//         const formData = new FormData();
//         formData.append("file", file);
//         const response = await fetch(API.BASE_URL + url, {
//           method: "POST",
//           body: formData,
//         });
//         if (response.ok) {
//           const jsonResponse: AwsImageUploadResponseType =
//             await response.json();
//           const obj = {
//             ...jsonResponse,
//             url: jsonResponse.Location,
//             status: true,
//           };
//           resolve(obj);
//         } else {
//           let obj = {
//             status: false,
//             url: null,
//           };
//           resolve(obj);
//         }
//       } else {
//         resolve("no file selected");
//       }
//     } catch (err) {
//       resolve(err);
//     }
//   });
// };

export { GET, POST, PUT, DELETE };
