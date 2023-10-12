// import axios, { AxiosResponse } from "axios";
// import { Modal } from "antd";
// import { getCookie, setCookie, deleteCookie } from "./CookieFunction";

// const Http = axios.create({
//   baseURL: "http://tribuana-api.obieprakoso.my.id/api/",
//   timeout: 50000,
//   headers: {
//     "content-type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "application/json",
//   },
//   withCredentials: true,
// });

// // Configure incoming response interceptor logic
// Http.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalConfig = error.config;
//     if (error.response) {
//       if (error.response.status === 401 && !originalConfig._retry) {
//         originalConfig._retry = true;
//         const user = await getCookie("auth");

//         const resData = await Http.post(
//           "auth/refreshToken",
//           {
//             refreshToken: user?.refreshToken, //Second param will be your body
//           },
//           {
//             withCredentials: true,
//             headers: { Authorization: `Bearer ${user?.accessToken}` },
//           }
//         ).catch((err) => {
//           return Promise.reject(err);
//         });
//         const response = {
//           id: resData.data?.data?.id,
//           name: resData.data?.data?.name,
//           no_unit: resData.data?.data?.no_unit,
//           no_tlp: resData.data?.data?.no_tlp,
//           email: resData.data?.data?.email,
//           role: resData.data?.data?.role,
//           accessToken: resData.data?.data?.accessToken,
//           refreshToken: resData.data?.data?.refreshToken,
//         };
//         setCookie("auth", JSON.stringify(response));
//         // Do something, call refreshToken() request for example;
//         // return a request
//         return Http(originalConfig);
//       } else {
//         Modal.error({
//           title: "This is a warning message",
//           content: error.response.data.message,
//           // eslint-disable-next-line @typescript-eslint/no-empty-function
//           onOk() {},
//         });
//       }
//     }

//     return Promise.reject(error);
//   }
// )

// async (err:any) => {
//   const prevRequest = err?.config;
//   if (err.response.status === 401 && !prevRequest._retry) {
//     prevRequest._retry = true;

//     const user = getCookie("auth");
//     const resData = await Http.post(
//       "auth/refreshToken",
//       {
//         refreshToken: user?.refreshToken, //Second param will be your body
//       },
//       {
//         withCredentials: true,
//       }
//     );
//     // Do something, call refreshToken() request for example;
//     // return a request
//     return Http(prevRequest);
//   }

//   if (err.response.data.code !== 401) {
//     Modal.error({
//       title: "This is a warning message",
//       content: err.response.data.message,
//       // eslint-disable-next-line @typescript-eslint/no-empty-function
//       onOk() {},
//     });
//   } else {
//     const user = getCookie("auth");
//     const resData = await Http.post(
//       "auth/refreshToken",
//       {
//         refreshToken: user?.refreshToken, //Second param will be your body
//       },
//       {
//         withCredentials: true,
//       }
//     );

//     const response = {
//       id: resData.data?.data?.id,
//       name: resData.data?.data?.name,
//       no_unit: resData.data?.data?.no_unit,
//       no_tlp: resData.data?.data?.no_tlp,
//       email: resData.data?.data?.email,
//       role: resData.data?.data?.role,
//       accessToken: resData.data?.data?.accessToken,
//       refreshToken: resData.data?.data?.refreshToken,
//     };
//     setCookie("auth", JSON.stringify(response));

//     return Http(prevRequest);
//   }
//   return Promise.reject(err);
// }

// export default Http;
